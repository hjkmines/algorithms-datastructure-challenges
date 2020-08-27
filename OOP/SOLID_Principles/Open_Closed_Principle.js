// Open/Closed Principle: a method or a class should be opened for extension, closed for modification. 
//Open for Extension happens OUTSIDE of that class or method (another method or class). 
//The original method is CLOSED for modifications. 

function printQuiz(questions) {    //CLOSED
    questions.forEach(question => {
        console.log(question.description); 
        questions.printQuestionChoices(); 
        console.log('')
    })
}

//A class is created like below for EXTENSION 
class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('min: _____')
        console.log('max: _____')
    }
}

const questions = [ 
    new RangeQuestion('What is the min/max speed limit of your city?')
]
