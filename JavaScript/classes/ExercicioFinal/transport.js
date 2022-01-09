import Spaceship from './spaceship.js'
export default class TransportShip extends Spaceship {
    constructor(name, numberOfCrew, type, numberOfSeats) {
        super(name, numberOfCrew, type)
        this.numberOfSeats = numberOfSeats
    }
}