export default class Spaceship {
    constructor(nome, cargaAtual, capacidadeMaxima){
        this.nome = nome
        this.cargaAtual = cargaAtual
        this.capacidadeMaxima = capacidadeMaxima
    }

    getLoadPercentage() {
        return this.cargaAtual * 100/this.capacidadeMaxima
    }
}