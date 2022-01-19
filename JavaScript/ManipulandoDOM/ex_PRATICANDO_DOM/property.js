class Property {
    constructor(type, area, isRent) {
        this.type = type;
        this.area = area;
        this.isRent = isRent;
    }

    get isRent() { 
        return this.isRent
    }
}