let spaceshipInverted = ""
let spaceship = prompt("Qual é o nome da nave")
const forbiddenCharacter = "e"
for(let i = spaceship.length -1; i >= 0; i--){
    if (spaceship[i] == forbiddenCharacter) {
        break
    }
    spaceshipInverted += spaceship[i]
}

alert(`Nome original da nave: ${spaceship} \nNome após ocultação: ${spaceshipInverted}`)