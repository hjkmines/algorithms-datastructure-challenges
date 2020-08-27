//Singleton Pattern 
let obj = (function () {

    //object 
    let objInstance; 

    //creates the objInstance if one isn't available 
    function create() {

        return {

        }
    }

    //checks to see if a object exists 
    return {
        getInstance: function() {
            if(!objInstance) {
                objInstance = create() 
            }
            return objInstance; 
        }
    }
})()