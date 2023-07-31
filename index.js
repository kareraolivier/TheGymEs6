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
