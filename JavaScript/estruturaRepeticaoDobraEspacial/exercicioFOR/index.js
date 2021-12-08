const spaceshipName = prompt("Digite o nome da espaçonave")

const oldCharacter = prompt("Qual caractere você deseja substituir?")

const newCharacter = prompt("Por qual caractere você deseja substituir?")

let newSpaceshipName = ""
for (let i = 0; i < spaceshipName.length; i++){
    if (oldCharacter == spaceshipName[i]) {
        newSpaceshipName += newCharacter
    } else {
        newSpaceshipName += spaceshipName[i] 
    }
}

alert(`O novo nome da nave é ${newSpaceshipName}`)