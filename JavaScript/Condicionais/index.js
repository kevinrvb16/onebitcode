const name = prompt("Qual o seu nome Píloto?")
let velocity = 0
let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let isConfirmed = confirm("A velocidade está indo para " + newVelocity + " km/s.")

if(isConfirmed) {
    velocity = newVelocity
}

if (velocity <= 0 ) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if ( velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if ( velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if ( velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert( `Piloto: ${name} \nVelocidade atual: ${velocity} km/s`)