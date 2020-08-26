
//Problem 1: compare numbers and rank each category 
const alice = [10,33, 55]; 
const bob = [3, 33, 32]; 

function compare(a, b) {    
    let scores = [0,0]; 
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scores[0] += 1
        } else if (a[i] < b[i]) {
            scores[1] += 1
        }
    }
    return scores; 
}

console.log(compare(alice, bob)); 

//Problem 2: Big Sum Calculation 
const largeNumbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function largeSum(arr) {
    const sum = arr.reduce((accum, currVal) => accum + currVal); 
    return sum; 
}

console.log(largeSum(largeNumbers)); 


//Problem 3: Absolute sum of the diagnols 
function sumCross(arr) {
    //left to right 
    let leftToRight = 0; 
    //right to left 
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]
        rightToLeft += arr[i][arr.length - i - 1]; 
    }; 

    let sum = Math.abs(leftToRight + rightToLeft); 

    return sum; 
} 

//Problem 4: Ratio of postive, negative, and zero.
const someNums = [1, 2, 0, -1] 
function plusMinus(arr) {
    let positive = 0;
    let negative = 0; 
    let zero = 0; 
    arr.forEach( x => {
        if (x > 0) {
            positive++; 
        } else if (x < 0) {
            negative++; 
        } else {
            zero++; 
        }
    } )
    const numbers = [positive/arr.length, negative/arr.length, zero/arr.length]
    const list = numbers.forEach( x => console.log(x)); 

    return list 
}

console.log(plusMinus(someNums))

//Problem 5: Staircase 
function staircase(n) {
    const pound = '#'
    const pounds = []
    for (let i = 1; i <= n; i++) {
       pounds.push(pound.repeat(i)); 
    }; 

    const list = pounds.forEach(x => console.log(x)); 
    return list; 
}

console.log(staircase(10)); 

 ///Problem 6: Sum of min and max 

 const listOfNums = [1, 3, 4, 10]
 function miniMaxSum(arr) {
    const min = Math.min(...arr); 
    const max = Math.max(...arr); 

    const maxSum = arr.filter((value, index, arr) => value > min).reduce((accum, currVal) => accum + currVal) 

    const minSum = arr.filter((value, index, arr) => value < max).reduce((accum, currVal) => accum + currVal) 

    const minMax = [minSum, maxSum].map(String)
    return minMax.join(' ')

 }

 console.log(miniMaxSum(listOfNums))

 //Problem 7: Birthday cake candles 

 function cakeCandles(arr) {
     const tallestCandle = Math.max(...arr); 
     let count = 0; 

     for (let i = 0; i < arr.length; i++) {
         if(arr[i] === tallestCandle) {
             count += 1; 
         }
     }

     return count; 
 }
  
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
 let string = 'hello Tony'
 function reverseString(str) {
     //split into a array element for each word 
     const reversedArr = str.split('').reverse().join('')
     return reversedArr; 
 }

 console.log(reverseString(string))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const palindrome = 'racecar'
const notPalindrome = 'hello'
function isPalindrome(str) {
    if (str === str.split('').reverse().join('')) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isPalindrome(notPalindrome))
