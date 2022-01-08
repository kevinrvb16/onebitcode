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
    speedUp(aceleration){
        this.spaceship.velocity += (0.83 * aceleration)
    }
    set spaceship(ship){
        this.spaceship = ship
        this.spaceship.name = prompt("Digite o nome da nave:")
        this.spaceship.numberOfCrew = prompt("Digite a quantidade de tripulantes:")
        this.spaceship.type = prompt("Digite o tipo da nave:")
        this.spaceship.velocity = 0
    }

    printAndEnd() {
        alert('Nome:'+ this.spaceship.name + '\nQuantidade de tripulantes' + this.spaceship.numberOfCrew + '\nVelocidade atual:' + this.spaceship.velocity)
    }
}