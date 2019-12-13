// const.js

// Primitive
let a = 'a';
a = 'b';
a;

const c = 'c';
c = 'd'; // TypeError
c;

// Reference
let e = {
  foo: 'foo',
};
e = {
  bar: 'bar',
};
e;

const f = {
  foo: 'foo',
};
// f = {
//   foo: 'bar',
// }; TypeError
f.foo = 'bar';
f;
