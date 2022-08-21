export default class Spaceship {
    constructor(name, maxCapacity, currentCharge){
        this.name = name
        this.currentCharge = currentCharge
        this.maxCapacity = maxCapacity
    }

    currentPercentCharge() {
        return this.currentCharge * 100 / this.maxCapacity
    }
}