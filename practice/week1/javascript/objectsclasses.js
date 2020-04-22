// formatting  for an object with multiple PROPERTIES
let object = {
    "name": "Eduardo", 
    address: "123 Some City, CA, 94134", 
    "salary": 170000
};

// Acceptable format for an object with a single PROPERTY.
let myOtherObject = {"isTrue": true};

// Nesting objects within objects
//let employee1 = {
//    "name": "Angie",
//    address: {
//        "street": "124 Some City"
//        "state": "CA",
//        "zip": 94134
//     },
//     "salary": 20000
//};

 employee2.address.zip
 let employee1 = {
   address: "Oakland",
    "salary": 20000    
 
};


// class, "fancy" objects.

class Car {
    ///static version = "100";
    constructor(age, valueOfMileage, valueOfColor, valueOfHp) {
        // bonus: figure out what non-this variables go t
        this.age = age;
        this.milage = valueOfMileage;
        this.hp = valueOfHp;
        this.color = valueOfColor;
}
isWorking() {
    console.log("The car is working and currently is " + this.age + " years old.")
}
// same thing as the class, value cannot be changed and may be different to other objects: let myCarExample = {age: 100};

let someNumber = 190;

let myFirstCar = new Car(50, 600000, "brown", 25);
let mySecondCar = new Car(someNumber);
let mySoldCar = new Car(12);

console.log(Car.version);


 // if a fucntion belongs to a class, its called a method
Math.random()

// let myFirstCar = {};

console.log(myFirstCar, mySecondCar, mySoldCar);
