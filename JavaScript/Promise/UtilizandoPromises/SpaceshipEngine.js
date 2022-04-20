export default class SpaceshipEngine {
    constructor(spaceship){
        this.spaceship = spaceship
    }

    async ligar = spaceship => {
        new Promise( function(resolv, reject){
            setTimeout(() => {

                if(spaceship.getLoadPercentage() > spaceship.cargaAtual) {
                    resolve('Capaciddade ok')
                } else {
                    reject('Ops, não foi')
                }
                
            }, 2000)
        })
    }


}