// Given 2 integers, swap them without using a 3rd variable 

// X=5, Y=7 -> X=7, Y=5

let x = 5; 
let y = 7; 
x = x + y //12
y = x - y //-2
x = x - y //7 

// Reverse a string and output the result
// “Hello”   -> “olleH”

const text = 'hello'; 

const textArray = text.split('') 

const newArray = []

for (let i = (textArray.lenght - 1); i >= 0; i--) {
    newArray.push(textArray[i]);
}

newArray.join('')

// An integer is provided by the user. Reverse it without the use of any other type (
    // such as making it a String) and output the new integer. Then prompt for a new integer to reverse or allow the user to exit

// 567  -> 765    
function reverseNumber(integer) {
    let reversed_num = 0; 

    while (integer > 0) {
        reversed_num = reversed_num * 10 + integer % 10
        integer = integer / 10
    }

    return reversed_num; 

}