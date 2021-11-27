class Transport{
    constructor(name,weight,speed,price,color,drive){
        this.name = name
        this.weight = weight
        this.speed = speed
        this.price = price
        this.color = color
        this.drive = drive

    }
}

class Car extends Transport{
    constructor(name,weigth,speed,price,color,drive){
        super(name,weigth,speed,price,color.drive)
        
    }
}

const car = new Car('Maclaren720s',1332,'430km\h','300000$','grey','one the ground')
console.log(car)


class Ship extends Transport{
    constructor(name,weight,speed,price,color,drive){
        super(name,weight,speed,price,color,drive)
    }
}

const ship = new Ship('yacht',4500,'43km\h','133,750,000 EUR','white','water')
console.log(ship)


class Airplan extends Transport{
    constructor(name,weight,speed,price,color,drive){
        super(name,weight,speed,price,color,drive)
    }
}

const airplan = new Airplan('airplan','85 t','500km\h','80milliom$','gold','air')
console.log(airplan)