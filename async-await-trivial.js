let num = 0 

async function increment() {
    num = await 2
    console.log(num); 
}

increment() //put on pause, move to the next line 
num++ // add 1 to 0 
console.log(num) //outputs 1, now, the increment promise is resolved and outputs 2. 

//What should the output be?
//anwswer 1, 2