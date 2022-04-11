class Planeta {
    constructor(name, dist) {
        name = this.name;
        dist = this.dist; //em Unidades Astronômicas
    }

    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
    }

    get dist() {
        return this.dist
    }

    set dist(dist) {
        this.dist = dist
    }
}

module.exports = Planeta