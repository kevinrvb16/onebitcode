let spaceship = {}
spaceship.name = prompt('Nome:')
spaceship.type = prompt("Tipo: ")
spaceship.maxVelocity = prompt('Velocidade máxima: ')
let increment, velocity = 0
let option

function incrementFunction() {
    velocity += increment
}

option = prompt('Quer acelerar ou parar a nave?')
if (option == 'acelerar') {
    increment = prompt('O quanto quer acelerar?')
    incrementFunction()
}

alert(`Nave: ${spaceship.name}\nTipo: ${spaceship.type}\nVelocidade Máxima: ${spaceship.maxVelocity}\nVelocidade: ${velocity}`)
