//Default parameter:  this is the way of initializing paramenter they are also known as default arguments
// this the proccess of giving parameters default values that are
// used when the function is called and those parrameters dont have arguments they use the default ones

const greating = (name = "Hello World") => {
  console.log(name);
};
greating();

// Spreed operators

let numbers = [2, 5, 3, 4, 7];

// Argments object.................
function test() {
  return numbers;
}
console.log(test(...numbers));

// Rest parameter....................
function test(...add) {
  return add;
}
console.log(test(...numbers));

// variadic funtion.................. this can take different number of argument when it is called
function test() {
  return numbers;
}
console.log(test(...numbers));
