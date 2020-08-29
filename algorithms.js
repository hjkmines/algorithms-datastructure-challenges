
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

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const digits = 1234
function reverseInt(int) {
    return digits.toString().split('').reverse().join(''); 
}

console.log(reverseInt(parseInt(digits))); 

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
const upperCaseThisSentence = 'hello tony'
function capitalizeLetters(str) {
    return str.toLowerCase().split(' ').map( word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
}   

console.log(capitalizeLetters(upperCaseThisSentence)); 

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const maxChar = 'hello'
function maxCharacter(str) {
    const count = str.split('').reduce((object, key) => {
        object[key] ? object[key]++ : object[key] = 1
    return object
    }, {})
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b) 
}

console.log(maxCharacter(maxChar)); 

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
//CONTINUED: For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
//CONTINUED: For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i%5 === 0 && i%3 === 0){
            console.log('FizzBuzz')
        } else if (i%3 === 0) {
            console.log('Fizz')
        } else if (i%5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz()); 

// CHALLENGE 7: Anagrams 

function anagrams(str1, str2) {
    const string1 = str1.split('').sort().join('').toLowerCase(); 
    const string2 = str2.split('').sort().join('').toLowerCase();
    return (string1 === string2);  
}

console.log(anagrams('hello', 'hello')); 
console.log(anagrams('abcd', 'dabc')); 

  
// CHALLENGE 8: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sentence) {
    const arrayOfSentences = sentence.split(' '); 
    const countLength = arrayOfSentences.map( word => word.length); 
    const longestWordCount = Math.max(...countLength); 
    const longestWordInSentence =  arrayOfSentences.find( word => word.length === longestWordCount); 
    return longestWordInSentence; 
}

console.log(longestWord('Hi my name is Alexander'))

// CHALLENGE 9: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // Init chunked arr
  const chunkedArr = [];
  // Set index
  let i = 0;

  // Loop while index is less than the array length
  while (i < arr.length) {
  // Slice out from the index to the index + the chunk length nd push on to the chunked array
  chunkedArr.push(arr.slice(i, i + len));
  // Increment by chunk length
  i += len;
  }

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); 

// CHALLENGE 10: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    return arrays.flat(); 
}

console.log(flattenArray([[1, 2, 3],[4, 5, 6],[7]])); 

// CHALLENGE 11: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('').toLowerCase(); 
    const sortedStr2 = str2.split('').sort().join('').toLowerCase(); 
    if (sortedStr1 === sortedStr2) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isAnagram('bob', 'joe')); 
console.log(isAnagram('hello', 'elloh')); 

// CHALLENGE 12: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z' || char === 'Z') {
          return 'a';
        } else {
          return String.fromCharCode(char.charCodeAt() + 1);
        }
      });
    
      newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
    
      return newStr;
}
// Call Function
const output = letterChanges('Hello There');

console.log(output);