function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 로직
      resolve();
    }, 1000);
  });
}

function* bar() {
  yield foo();
}

console.log(bar().next());

bar()
  .next()
  .value.then(() => {
    console.log('end');
  });
console.log('이것이 먼저 실행?');

function* baz() {
  yield 1;
  yield 2;
  yield 3;
}

const g = baz();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
