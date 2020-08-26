
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