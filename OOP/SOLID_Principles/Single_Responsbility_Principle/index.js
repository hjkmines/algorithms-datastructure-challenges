import logMessage from './logger'; 

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories; 
        this.currentCalories = 0; 
    }

    trackCalories(calories) {
        this.currentCalories += calories; 
        if (this.currentCalories >= this.maxCalories) {
            logMessage('Max Calorioes exceeded')
        }
    }
}; 

const calorieTracker = new CalorieTracker(2000); 
calorieTracker.trackCalories(400); 
calorieTracker.trackCalories(400); 
calorieTracker.trackCalories(400); 
calorieTracker.trackCalories(400); 
calorieTracker.trackCalories(400); 
