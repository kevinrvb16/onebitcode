let name = prompt('Nome:')
let type = prompt("Tipo: ")
let  maxVelocity = prompt('Velocidade máxima: ')
let option = prompt('Quer acelerar ou parar a nave?')
let increment, velocity = 0
if (option == 'acelerar'){
    increment = prompt('O quanto quer acelerar?')
} else if (option == 'parar') {
    alert('mensagem final aqui')
}

let incrementFunction = () => {
    velocity += increment
}

let spaceship = {
    name,
    type,
    maxVelocity,
    velocity
}