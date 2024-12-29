//clss and constructor
class Person {
    private name : string
    private id : number

    constructor (name: string  , id : number) {
        this.name = name;
        this.id = id;
    }
    getDetail () : string {
        return `Name : ${ this.name} :: Age : ${this.id}`
    }
}

const person = new Person("Aadil ", 123)
console.log(person.getDetail())

//inheritance 

class Employee extends Person {
    private employeeAge: number

    constructor(name: string , id : number , employeeAge : number) {
        super(name, id);
        this.employeeAge = employeeAge
    }

    getDetail(): string {
        return `${super.getDetail()} , employee age ${this.employeeAge}`
    }
}


const employee = new Employee('Aadil', 123, 27)
console.log(employee.getDetail())



//abstract class

abstract class Shape {
    abstract calculateArea() : number
}


class Rectangle extends Shape {
    constructor(private width: number , private height : number){
        super()
    }

    calculateArea(): number {
        return this.width * this.height
    }
}

const rectAngle = new Rectangle(10,5)
console.log("Area:", rectAngle.calculateArea())


//interfaces with classes
interface Vehicle {
    make : string
    model : number
    drive() : void
}

class Car implements Vehicle {
    constructor(public make: string , public model: number) {

    }
    drive(): void {
        console.log(`Driving a ${this.make} ${this.model}`)
    }
}

const car = new Car('Swift', 123)
car.drive()