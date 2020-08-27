//create card object 
class Card {
    constructor(suit, value) {
        this.suit = suit; 
        this.value = value; 
    }
}

class Deck {
    constructor() {
        this.deck = []; 
    }

    createDeck() {
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value)); 
            }
        }
        return this.deck; 
    }

    shuffle() {
        const { deck } = this 
        let counter = deck.length, i; 

        while(counter) {
            i = Math.floor(Math.random() * counter--); 
            [deck[counter], deck[i]] = [deck[i], deck[counter]]; 
        }

        return this
    }

    deal() {
        let hand = []; 
        while (hand.length < 2) {
            hand.push(this.deck.pop()); 
        }

        return hand; 
    }
}

let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']; 
let values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']; 
const deck = new Deck;
deck.createDeck(suits, values); 
deck.shuffle(); 
console.log(deck.deal()); 