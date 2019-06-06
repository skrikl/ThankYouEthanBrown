let a = 5;
// Function does not work with a in any way
let f = arg => arg = 69;
console.log(`f = ${f()}, a = ${a}.`);
// a in function shadow the global a
let f3 = a => a = 69;
console.log(`f3 = ${f3()}, a = ${a}.`);
// a is not defined in function, so the global a is used instead
let f2 = arg => a = 69;
console.log(`f2 = ${f2()}, a = ${a}.`);