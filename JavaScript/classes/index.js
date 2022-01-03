class Spaceship {
    constructor(name, numberOfCrew) {
        this.name = name;
        this.numberOfCrew = numberOfCrew;
        this.isEngaged = false
        this.doorIsOpen = false
    }
    hitch() {
        this.isEngaged = true
        this.doorIsOpen = true
    }
}

let spaceships = []
let option
do {
    option = prompt('Escolha entre as opções:\n1 - Cadastrar e realizar engate da nave \n2 - Listar naves \n3 - Encerrar programa')
    switch(option){
        case '1':
            let name = prompt('Digite nome da nave')
            let numberOfCrew = prompt('Digite o número de tripulantes da nave')
            let spaceship = new Spaceship(name, numberOfCrew)
            spaceship.hitch()
            spaceships.push(spaceship)
            break
        case '2':
            let result = 'Lista de naves:'
            spaceships.map((spaceshipName, index)=> {result += '\n' + Number(index+1) + ' - ' + spaceshipName.name})
            alert(result)
            break
        case '3':
            alert('Programa encerrado')
            break
        default:
            alert("Opção inválida")
    }
}while(option != '3')