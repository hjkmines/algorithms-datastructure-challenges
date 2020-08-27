// Interface_Segregation_Principle: specifiy each object or class what to implements of actions/methods it can use 
//and not using all actions that are relevant.  This is done by breaking up each action and method into smaller components
//and Assigning each action to the object or class. 

class Entity {
    constructor(name) {
        this.name = name; 
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`)
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
        targetEntity.takeDamage(this.attackDamage); 
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount 
        console.log(`${this.name} has ${this.health} left`)
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name)
        this.attackDamage = attackDamage
        this.health = health
    }
}

//You can choose to add these additional actions to the Character prototype 
Object.assign(Character.prototype, mover)
Object.assign(Character.prototype, attacker)
Object.assign(Character.prototype, hasHealth)

class Wall extends Entity{
    constructor(name, health) {
        super(name); 
        this.health = health; 
    }
}

//Assign only the hasHealth action to the wall class 
Object.assign(Wall.prototype, hasHealth)

const character1 = new Character('Bob', 20, 100); 
const wall1 = new Wall('Blue', 150)

character1.attack(wall1); 
wall1.takeDamage(50); 