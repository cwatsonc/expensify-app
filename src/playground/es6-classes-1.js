class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`
    }

    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }

};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        const traditional = super.getGreeting();
        return this.homeLocation ? `${traditional} I am visiting from ${this.homeLocation}` : traditional;
    }
}

const me = new Traveler('Charles Watson', 3, 'Seattle, Washington');
const other = new Traveler('Fred Watson', 36);

console.log(me.getGreeting());
console.log(other.getGreeting());