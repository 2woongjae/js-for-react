// generator.js

function* foo() {
  console.log(0.5);
  yield 1;
  console.log(1.5);
  yield 2;
  console.log(2.5);
  yield 3;
  console.log(3.5);
}

const g = foo();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// 핸들
let handle = null;

// 비동기 함수
function bar() {
  setTimeout(() => {
    handle.next('hello');
  }, 1000);
}

// 핸들을 통해 컨트롤을 넘기는 제너레이터 함수
function* baz() {
  const text = yield bar();
  console.log(text);
}

handle = baz();
handle.next();
