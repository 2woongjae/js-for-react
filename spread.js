// spread.js

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

const numbers = [2, 3, 4];

console.log(sum(...numbers));

//  1 레벨 깊이
const obj = { a: 3, b: 4, c: 5 };

const cloned = { ...obj, a: 6 };
cloned.c = 10;

console.log(obj, cloned);

//  2 레벨 깊이
const obj1 = { a: { b: 100 } };

const obj1Cloned = { ...obj1 };
obj1Cloned.a.b = 200;

console.log(obj1, obj1Cloned);

const obj2 = { a: { b: 100 } };

const obj2Cloned = { ...obj2, a: { ...obj2.a } };
obj2Cloned.a.b = 200;

console.log(obj2, obj2Cloned);
