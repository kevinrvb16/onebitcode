import Battleship from './battleship.js'
import TransportShip from './transport.js'
export default class Menu {

    constructor(ship) {
        this.spaceship = ship
    }
    speedUp(aceleration){
        this.spaceship.velocity += (0.83 * aceleration)
    }

    printAndExit() {
        alert('Nome: '+ this.spaceship.name + '\nQuantidade de tripulantes: ' + this.spaceship.numberOfCrew + '\nVelocidade atual: ' + this.spaceship.velocity + 'm/s')
    }

    registerSpaceship(){
        let name = prompt("Digite o nome da nave:")
        let numberOfCrew = prompt("Digite a quantidade de tripulantes:")
        let type
        while(!["batalha", "transporte"].includes(type)) {
            type = prompt("Digite o tipo da nave (batalha ou transporte):")
        }
        if (type == 'batalha') {
            let numberOfAvailableGuns = prompt("Digite a quantidade de armas disponíveis")
            this.spaceship = new Battleship(name, numberOfCrew, type, numberOfAvailableGuns)
        } else if ( type == 'transporte'){
            let numberOfSeats = prompt("Digite a quantidade de assentos")
            this.spaceship = new TransportShip(name, numberOfCrew, type, numberOfSeats)
        }
        this.spaceship.velocity = 0
    }

    showOptions(){
        let option = ''
        while(option != '3'){

            option = prompt('Esolha a opção desejada:\n1 - Acelerar a nave\n2 - Trocar a nave\n3 - Imprimir e sair')
            switch(option) {
                case '1':
                    let aceleration = prompt('Digite o quanto quer acelerar em m/s:')
                    this.speedUp(aceleration)
                    break
                case '2':
                    this.registerSpaceship()
                    break
                case '3':
                    this.printAndExit()
                    break
                default:
                    alert('Opção inválida')
            }
        }
    }
}