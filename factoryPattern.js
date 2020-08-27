//factory pattern 

function Engineer(name) {
    this.name = name;  
    this.type = 'Engineer'; 
}

function Tester(name) {
    this.name = name; 
    this.type = 'Tester'
}

function EmployeeFactory() {

    this.create = (name, type) => {
        switch(type) {
            case 1: 
                return new Engineer(name); 
                break; 
            case 2: 
                return new Tester(name); 
                break; 
        }
    }

}

function say() {
    console.log(`Hi, my name is ${this.name} and I am a ${this.type}`); 
}

const factory1 = new EmployeeFactory; 
const employees = []; 
employees.push(factory1.create('Tony', 1)); 
employees.push(factory1.create('Bob', 2)); 

employees.forEach( employee => say.call(employee)); 