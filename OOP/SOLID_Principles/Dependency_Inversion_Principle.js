//Dependecy inversion: your high level code should not depend on low level implementation. 
//Create a intermediate wrapper API
//For example, store (high level code) => payment processor <= Paypal (low level)

class Store { //this high level does not need to be modified since we now have wrappers for the apis to make modifications.
    constructor (paymentProccessor) {
        this.paymentProccessor = paymentProccessor  //middle wrapper between store and the two APIs
    }

    purchaseBike(quantity) {
        this.paymentProccessor.pay(200 * quantity)
    }
}

class StripePaymentProcessor { //wrapper 1 for the Stripe pattern 
    constructor(user) {
        this.stripe = new Stripe(user)  
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class PaypalPaymentProcessor { //wrapper 2 for the paypal pattern 
    constructor(user) {
        this.user = user 
        this.paypal = new Paypal()
    }

    pay(amountInDollars) {
        this.stripe.makePayment(this.user, amountInDollars)
    }
}

class Stripe {  //API number one 
    constructor(user) {
        this.user = user 
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made a payment of $${amountInCents / 100}`)
    }
}

class Paypal { //API number two 
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`)
    }
}

const store = new Store(new StripePaymentProcessor('Tony'))
store.purchaseBike(2); 