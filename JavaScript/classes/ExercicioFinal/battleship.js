import Spaceship from './spaceship.js'
export default class Battleship extends Spaceship {
    constructor(name, numberOfCrew, type, numberOfAvailibleGuns){
        super(name, numberOfCrew, type)
        this.numberOfAvailibleGuns = numberOfAvailibleGuns
    }
}