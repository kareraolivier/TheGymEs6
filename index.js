// class user {
//   constructor(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }

//   static countUsers() {
//     console.log("users are 30");
//   }

//   register() {
//     console.log(this.name + " is available");
//   }
// }
// new user("karera", "karera@gmail.com", 123).register();
// user.countUsers();

//other way ................................................

class user1 {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  static countUsers() {
    console.log("users are 30");
  }

  register() {
    console.log(this.name + " is registered");
    return "flesh";
  }
}
// let userRegiser = new user1("karera", "karera@gmail.com", 123);
// userRegiser.register();
// user1.countUsers();

class student extends user1 {
  constructor(name, email, age, level) {
    super(name, email, age);
    this.level = level;
  }
  getLevel() {
    return `student at ${this.level} are called ${this.name}`;
  }
}

console.log(new student("John", "john@example.com", 18, "level II").getLevel());
console.log(new student("John", "john@example.com", 18, "level II").register());
// userRegiser.register();

// Create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should override Vehicle's constructor function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.

class Vehicle {
  constructor(color = "blue", wheels = 4, horn = "beep beep") {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
  }
}
class Bicycle extends Vehicle {
  constructor(color, wheels = 2, horn = "honk honk") {
    super(color, wheels, horn);
  }
}
// const myBike = new Bicycle('blue',2,'honk honk');
// console.log(myBike)
// your code goes here

/* tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk*/
