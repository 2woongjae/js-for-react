function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

const numbers = [2, 3, 4];

console.log(sum(...numbers));

const num = {
  a: 3,
  b: 4,
  c: 5,
};

const cloned = { ...num };
cloned.a = 10;

console.log(num);
console.log(cloned); //  1 레벨 깊이

const deep = {
  a: {
    b: 100,
  },
};

const deepCloned = { ...deep };
deepCloned.a.b = 200;

console.log(deep);
console.log(deepCloned);

function rest(...args) {
  // function rest(name, ...args) {
  console.log(args);
}

rest('mark', 37, 'korea');
