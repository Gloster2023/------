class transport{
    constructor(mark, name,  mileage, price){
        this.mark = mark;
        this.name = name;
        this.type = null;
        this.mileage = mileage;
        this.price = price;
    }
}


class Moto extends transport{
    constructor(mark, name,  mileage, price){
        super(mark, name,mileage, price)
        this.type = "motocicles"
        }
}

class Car extends transport{
    constructor(mark, name, mileage, price){
    super(mark, name, mileage, price)
    this.type = "auto"
    }
}


class cafeRacer extends Moto{
    constructor(mark, name,  mileage, price,cool, customs){
        super(mark, name, mileage, price)
        this.cool = cool;
        this.customs = customs;
    }
}

class Naked extends Moto{
    constructor(mark, name,  mileage, price,cool, year){
        super(mark, name, mileage, price)
        this.cool = cool;
        this.year = year;
    }
}

class GT extends Car{
    constructor(mark, name, mileage, price){
        super(mark, name, mileage, price)
        this.type = "auto";
        this.carcass = "coupe"
    }
}

class Cabrio extends Car{
    constructor(mark, name, mileage, price){
        super(mark, name, mileage, price)
        this.type = "auto";
        this.carcass = "cabrio"
    }
}


class Garage{
    constructor(name, transports){
    this.name = name;
    this.transports = [];
}
    addTransport(transport){
        this.transports.push(transport)
    }

    getFindBy(type, value){
        return this.transports.find(transport => transport[type] == value) || null
    }

}

const myGarage = new Garage("мой гараж")

myGarage.addTransport(new cafeRacer("Triumph", "Truxton RS", 0, 17000,true,true))
myGarage.addTransport(new Car("Porche","718",0,80000))
myGarage.addTransport(new Cabrio("Jaguar","XKR",50000,23000))
myGarage.addTransport(new Naked("Ducati","Monster S4R",10000,9000,true,2007))
myGarage.addTransport(new GT("Mercedes-Benz","GT 4-door",0,200000))