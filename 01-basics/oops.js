var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clss and constructor
var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.getDetail = function () {
        return "Name : ".concat(this.name, " :: Age : ").concat(this.id);
    };
    return Person;
}());
var person = new Person("Aadil ", 123);
console.log(person.getDetail());
//inheritance 
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, id, employeeAge) {
        var _this = _super.call(this, name, id) || this;
        _this.employeeAge = employeeAge;
        return _this;
    }
    Employee.prototype.getDetail = function () {
        return "".concat(_super.prototype.getDetail.call(this), " , employee age ").concat(this.employeeAge);
    };
    return Employee;
}(Person));
var employee = new Employee('Aadil', 123, 27);
console.log(employee.getDetail());
//abstract class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rectAngle = new Rectangle(10, 5);
console.log("Area:", rectAngle.calculateArea());
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.drive = function () {
        console.log("Driving a ".concat(this.make, " ").concat(this.model));
    };
    return Car;
}());
var car = new Car('Swift', 123);
car.drive();
