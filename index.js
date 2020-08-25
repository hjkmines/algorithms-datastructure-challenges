
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

