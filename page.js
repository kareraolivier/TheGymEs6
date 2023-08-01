// const { toLowerCase } = "Hello world";
// console.log(toLowerCase);

const isRaining = new Boolean(false);

console.log("isRaining", isRaining); //isRaining [Boolean: false]

console.log("isRaining", !isRaining); //isRaining false

if (isRaining) {
  console.log("Take the umbrella");
} else {
  console.log("Enjoy the sun");
}

const [a, b, ...{ length: size }] = [10, 11, 12, 13, 14];
console.log(size); //3

let number1 = 10;
let number2 = 5;
[number1, number2] = [number2, number1];
console.log(number1, number2);

const data = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 25,
  hobbies: ["Reading", "Painting", "Cooking"],
};

const { firstName, lastName, hobbies } = data;
const [hobby1, hobby2, hobby3] = hobbies;

console.log(firstName); // Output: 'Alice'
console.log(lastName); // Output: 'Johnson'
console.log(hobby1); // Output: 'Reading'
console.log(hobby2); // Output: 'Painting'
console.log(hobby3); // Output: 'Cooking'
