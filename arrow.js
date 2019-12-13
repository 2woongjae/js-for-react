// arrow.js

function Foo() {
  this.name = 'Mark';

  setTimeout(function() {
    console.log(this.name);
  }, 1000);

  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}

const foo = new Foo();

// 익명 함수를 변수에 대입해서 사용
const a = () => {
  return '리턴';
};

console.log(a());

// 리턴이 바로 표현 가능하면, { return } 생략
const b = () => '리턴';

console.log(b());

// 매개변수가 한개면 () 생략
const c = props => `리턴 ${props}`;

console.log(c('프롭스'));
