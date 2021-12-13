let slowDown = (spaceshipVelocity, callback) => {
    for(let i = spaceshipVelocity; i >=-10; i -= 20 ) {
        callback(i)
    }
}

let printSlowDown = velocity => {
    0 >= velocity ? console.log("Nave está parada, as comportas podem ser abertas") : console.log("Velocidade atual " + velocity + "Km/s")
}

slowDown(150, printSlowDown)