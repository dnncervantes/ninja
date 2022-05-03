class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`This Ninjas name is ${this.name}.`)
    }
    showStats() {
        console.log(`Stats: Speed = ${this.speed} Strength = ${this.strength}`)
    }
    drinkSake() {
        this.health += 10;
        console.log(`Health increased by 10! New Health: ${this.health}`)
    }
}
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();