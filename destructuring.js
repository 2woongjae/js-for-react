const foo = {
  a: '에이',
  b: '비이',
};

const { a, b } = foo;
console.log(a, b);

const bar = ['씨이', '디이'];

const [c, d] = bar;
console.log(c, d);

const { a: newA, b: newB } = foo;
console.log(newA, newB);
