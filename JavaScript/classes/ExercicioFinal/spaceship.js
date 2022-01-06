class Spaceship {
    constructor(name, numberOfCrew, type){
        this.name = name
        this.numberOfCrew = numberOfCrew
        this.type = type
        this.velocity = 0
    }
}

class Battleship extends Spaceship {
    constructor(name, numberOfCrew, type, numberOfAvailibleGuns){
        super(name, numberOfCrew, type)
        this.numberOfAvailibleGuns = numberOfAvailibleGuns
    }
}

class TransportShip extends Spaceship {
    constructor(name, numberOfCrew, type, numberOfSeats) {
        super(name, numberOfCrew, type)
        this.numberOfSeats = numberOfSeats
    }
}

class Menu {

    speedUp(){
        return 0
    }
    set spaceship(ship){
        this.spaceship = ship
    }

    printAndEnd() {
        console.log('oi')
    }
}