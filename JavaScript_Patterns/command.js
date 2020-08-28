(function(){

    var carManager = {
    
    //information requested
    requestInfo: function( model, id ){
    return "The information for " + model + " with ID " + id + " is foo bar";
    },
    
    // now purchase the car
    buyVehicle: function( model, id ){
    return "You have successfully purchased Item " + id + ", a " + model;
    },
    
    // now arrange a viewing
    arrangeViewing: function( model, id ){
    return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
    }
    };
})();