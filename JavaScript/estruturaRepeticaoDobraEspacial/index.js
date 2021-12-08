warpCount = 0
let chosenOption = ""

let spaceshipName = prompt("Dígite o nome da nave")

chosenOption = prompt("Deseja entrar na dobra espacial?\n" +"1- Sim" + "\n2- Não")

while(chosenOption == '1') {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- SIm\n2- Não")
}

alert("Nave: " + spaceshipName + "\n" +
"Quantidade de dobras: " + warpCount)


