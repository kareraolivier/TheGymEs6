function* gen1() {
  console.log("generator one");
  yield "yield one";
  console.log("generator two");
  yield "yield two";
  return "finish";
}
let g1 = gen1();
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
