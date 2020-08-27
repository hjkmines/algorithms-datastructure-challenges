function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description); 
        questions.printQuestionChoices(); 
        console.log('')
    })
}

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
