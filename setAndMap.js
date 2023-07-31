//Set.....................................

let numbers = [2, 5, 3, 4, 7, 3, 2];

//add..........
console.log(new Set(numbers).add("100"));
console.log(new Set(numbers).add({ a: 3, b: 5 }));

// size...................
console.log(new Set(numbers).size);

// delete...............
console.log(new Set(numbers).delete("2")); // false bcz 2 is a string and we have 2 of typeof number
console.log(new Set(numbers).delete(2)); //true

// clear...............
console.log(new Set(numbers).clear());

//getting single elements of a set
let myset = new Set(numbers);
myset.forEach((nbr) => console.log(nbr));

//Map.....................................

let elements = new Map([
  ["a1", "hey"],
  ["a2", "heytwo"],
  ["a3", "heythree"],
]);

//add..........
console.log(elements.set("a4", "heyfour"));

// size...................
console.log(elements.size);

// delete...............
console.log(elements.delete("a1"));
console.log(elements.delete("a7"));

//week map

let studentMap = new WeakMap();

let key1 = {
  id: 1,
};
let key2 = {
  id: 2,
};
let key3 = {
  id: 3,
};
let newStudentMap = {
  name: "John",
  age: "26",
};
studentMap.set(key1, newStudentMap);

let newStudentMap2 = {
  name: "Jane",
  age: "25",
};
studentMap.set(key2, newStudentMap2);
let newStudentMap3 = {
  name: "Mark",
  age: 28,
};
studentMap.set(key3, newStudentMap3);
//delete
studentMap.delete(key2);

console.log(studentMap);

//week set

let studentSet = new WeakSet();

let newStudent = {
  name: "John",
  age: "26",
};
studentSet.add(newStudent);

let newStudent2 = {
  name: "Jane",
  age: "25",
};
studentSet.add(newStudent2);
let newStudent3 = {
  name: "Mark",
  age: 28,
};
studentSet.add(newStudent3);
//delete
studentSet.delete(newStudent);

console.log(studentSet);
