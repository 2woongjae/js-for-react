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

const a = () => {
  return '리턴';
};

console.log(a());

const b = () => '리턴';

console.log(b());

const c = props => `리턴 ${props}`;

console.log(c('프롭스'));
