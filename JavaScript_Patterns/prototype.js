var myCar= {

    name:"Ford Escort",

    brake: function(){

    console.log("Stop! I am applying brakes");

    }, 

    panic: function() {

    console.log ( "wait. how do you stop this thing?")

    }
}
    // use object create to instansiate a new car
    var yourCar = object.create(myCar);
    //You can now see that one is a prototype of the other
    console.log (yourCar.name);