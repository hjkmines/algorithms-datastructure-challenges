class Engineer {
    constructor(name) {
        this.name = name; 
        this.type = 'Engineer'; 
    }
}

class Tester {
    constructor(name) {
        this.name = name; 
        this.type = 'Tester'
    }
}

class empFactory {
    createEmployee(name, type) {
        switch(type) {
            case 1: 
                return new Engineer(name); 
                break; 
            case 2: 
                return new Tester(name); 
                break; 
            default:    
                return 'Wrong input'
                break; 
        }
    }
}

function sayHi() {
    console.log(`Hi my name is ${this.name} 
    and I am a ${this.type}`);
}

const factory1 = new empFactory; 
const employees = []
employees.push(factory1.createEmployee('Tony', 1)); 
employees.push(factory1.createEmployee('Bob', 2)); 
employees.forEach( employee => sayHi.call(employee)); 


