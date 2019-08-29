class Person {
    constructor(height, weight, hairColour) {
        this.height = height;
        this.weight = weight;
        this.hairColour = hairColour;
    }

    doADance() {
        return `I'm doing a dance!`;
    }

    get doubleWeight() {
        return this.weight * 2;
    }

    get tripleWeight() {
        return this.weight * 3;
    }

    set weightLoss (lostPounds) {
        this.weight -= lostPounds;
    }

}

class Lawyer extends Person {
    constructor (height, weight, hairColour, speciality) {
        super(height, weight, hairColour);
        this.speciality = speciality;
    }

    get elevatorPitch () {
        return `I practice ${this.speciality} law. 3 times my weight is ${this.tripleWeight} pounds. Also, my hair is ${this.hairColour}. Now ${this.doADance()} Hire me!`
    }

}

let Carter = new Person(`6 foot 3 inches`, 180, "brown");
console.log(Carter);
console.log(Carter.doubleWeight);
console.log(Carter.tripleWeight);
Carter.weightLoss = 10;
console.log(Carter.weight);

let CarterTheLawyer = new Lawyer (`6 foot 3 inches`, 180, "brown", "Bird");
console.log(CarterTheLawyer.weight);
console.log(CarterTheLawyer.elevatorPitch);
