//Singleton Pattern 
let obj = (function () {

    //object 
    let objInstance; 

    //creates the objInstance if one isn't available 
    function create() {
        let _isRunning = false; 
        let start = function() {
            _isRunning = true; 
        }
        let stop = function() {
            _isRunning = false; 
        }
        let currentState = function() {
            return _isRunning
        }
        return {
            start: start, 
            stop: stop,
            currentState: currentState
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

let obj1 = obj.getInstance(); 
let obj2 = obj.getInstance(); 