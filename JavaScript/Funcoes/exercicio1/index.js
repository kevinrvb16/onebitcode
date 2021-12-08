const spaceshipName = prompt("Qual o nome da nave?")
let velocity = 0;

while(true){
    
    let option = prompt("Esolha entre as opções:\n" +
        "1- Acelerar a nave em 5km/s\n" +
        "2- Desacelerar em 5km/s\n" +
        "3- Imprimir dados de bordo\n" +
        "4- Sair do programa")
    
        switch(option){
            case '1':
                speedUp()
                break
    
            case '2':
                slowDown()
                break
    
            case '3':
                printOut()
                break
    
            case '4':
                return false
        }
}
function speedUp(speedUp = 5) {
    velocity += speedUp
}

function slowDown(slowDown = 5) {
    if (velocity > 5) {
        velocity -= slowDown
    }
}

function printOut() {
    alert(`Nome da nave: ${spaceshipName} \nVelocidade atual: ${velocity}`)
}