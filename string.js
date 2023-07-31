// We are going to evaluate three string methods that comeup with ES6
// They are : includes()
//   startsWith()
//   endsWith()
//
//

let str = "karera is a good developer";

console.log(str.includes("is"));
console.log(str.includes("isa"));
console.log(str.endsWith("developer"));
console.log(str.endsWith("good"));
console.log(str.startsWith("karera"));
console.log(str.startsWith("karerais"));

// numbers ........
// We are going also to look on numbers by example
//  The methhods are:

//......................isFinite()

console.log("finite nbr", Number.isFinite(2)); //true
console.log("finite nbr", Number.isFinite(Infinity)); //false
console.log("finite nbr", Number.isFinite(null)); //False
console.log("finite nbr", Number.isFinite(undefined)); //false
console.log("finite nbr", Number.isFinite(-3)); //true
console.log("finite nbr", Number.isFinite(NaN)); //false

//.....................isNaN()
console.log(
  "...................................................................................."
);
console.log("isNaN nbr", Number.isNaN(2)); //false
console.log("isNaN nbr", Number.isNaN(Infinity)); //false
console.log("isNaN nbr", Number.isNaN(null)); //false
console.log("isNaN nbr", Number.isNaN(undefined)); //false
console.log("isNaN nbr", Number.isNaN(-3)); //false
console.log("isNaN nbr", Number.isNaN(NaN)); //true

//...................... isInteger()
console.log(
  "...................................................................................."
);

console.log("Integer nbr", Number.isInteger(2)); //true
console.log("Integer nbr", Number.isInteger(Infinity)); //false
console.log("Integer nbr", Number.isInteger(null)); //False
console.log("Integer nbr", Number.isInteger(undefined)); //false
console.log("Integer nbr", Number.isInteger(-3)); //true
console.log("Integer nbr", Number.isInteger(NaN)); //false
console.log(
  "...................................................................................."
);

//                    Number()
//                 .parseInt() // parses the number from String and returns

//HEX
console.log(0xff);
// Binary;
console.log(0b110110);
// Octal;
console.log(0o7456);
