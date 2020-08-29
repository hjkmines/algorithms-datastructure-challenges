// Before a credit card is submitted to a financial institution, it generally makes sense to run some simple reality checks on the number. The numbers are a good length and it's common to make minor transcription errors when the card is not scanned directly.

// The first check people often do is to validate that the card matches a known pattern from one of the accepted card providers. Some of these patterns are:

// +============+=============+===============+
// | Card Type  | Begins With | Number Length |
// +============+=============+===============+
// | AMEX       | 34 or 37    | 15            |
// +------------+-------------+---------------+
// | Discover   | 6011        | 16            |
// +------------+-------------+---------------+
// | MasterCard | 51-55       | 16            |
// +------------+-------------+---------------+
// | Visa       | 4           | 13 or 16      |
// +------------+-------------+---------------+

// All of these card types also generate numbers such that they can be validated by the Luhn algorithm, so that's the second check systems usually try. The steps are:

// 1. Starting with the next to last digit and continuing with every other
//    digit going back to the beginning of the card, double the digit
// 2. Sum all doubled and untouched digits in the number
// 3. If that total is a multiple of 10, the number is valid

// For example, given the card number 4408041234567893

// Step 1:  8 4 0 8 0 4 2 2 6 4 10 6 14 8 18 3
// Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
// Step 3:  70 % 10 == 0

// Thus that card is valid.

// Let's try one more, 4417 1234 5678 9112:

// Step 1:  8 4 2 7 2 2 6 4 10 6 14 8 18 1 2 2
// Step 2:  8+4+2+7+2+2+6+4+1+0+6+1+4+8+1+8+1+2+2 = 69
// Step 3:  69 % 10 != 0

// That card is not valid.

// This week's Ruby Quiz is to write a program that accepts a credit card number as a command-line argument. The program should print the card's type (or Unknown) as well a Valid/Invalid indication of whether or not the card passes the Luhn algo

//Step 1: develop function that takes in a credit card number 
console.log('Hello, please enter your credit card number:')


function checkCreditCard(numberText) {
    const arrayOfDigits = numberText.split('') // ['1', '1', '3']
    const digitsConvertedToIntegers = arrayOfDigits.forEach( digit => parseInt(digit)); 
    const firstDigit = arrayOfDigits[0]; 

    //convert number into a string 
    const number = parseInt(numberText); 

    const singleDigit = arrayOfDigits.slice(0, 1).join(''); 
    const twoDigits = arrayOfDigits.slice(0, 2).join(''); 
    const fourDigits = arrayOfDigits.slice(0, 4).join(''); 
    //check what type of card it is 
    if (firstDigit[0] === '3' && (twoDigits === '34' || twoDigits === '37') && arrayOfDigits.length === 15) { //Check if it is a AMEX
                    return 'AMEX';
    } else if (firstDigit[0] === '4' && (arrayOfDigits.length === 13 || arrayOfDigits.length === 16)) { //visa 
                    return 'Visa'
    } else if (firstDigit[0] === '5' && fourDigits === '6011' && arrayOfDigits.length === 16) { //Discover 
                    return 'Discover'
    } else if (firstDigit[0] === '6' && (twoDigits >= 51 && twoDigits <= 55) && arrayOfDigits.length === 16) { //Mastercard 
                    return 'Mastercard'
    } else {
        return 'Invalid Card'; 
    }
}

function checkLuhnAlgo(numberText) {
    const arrayOfDigits = numberText.split('') // ['1', '1', '3']
    const digitsConvertedToIntegers = arrayOfDigits.forEach( digit => parseInt(digit)); 
    const newDoubledDigits = []
    for (let i = (arrayOfDigits.length - 1); i >= 0; i--) {
        if ((arrayOfDigits.indexOf(i) % 2) === 0) {
            newDoubledDigits.push(arrayOfDigits[i] * 2)
        } else {
            newDoubledDigits.push(arrayOfDigits[i])
        }
    }
    
    // console.log(splitIntoSingleDigits); 
    const splitIntoSingleDigits = newDoubledDigits.join('').split(''); 

    //splits digits up array 
    const sum = splitIntoSingleDigits.reduce((accum, currentValue) => accum + currentValue); 

    //check if divisble by 10
    sum % 10 == 0 ? console.log('That card is valid') : console.log('That card is not valid')

}

// console.log(checkCreditCard('341255414551234')); 
console.log(checkLuhnAlgo('4408041234567893')); 