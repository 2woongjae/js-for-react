const mark = {
  name: 'Mark',
};

function hello() {
  console.log(`안녕하세요 ${this.name}`);
}

const helloMark = hello.bind(mark);

helloMark();

const anna = {
  name: 'Anna',
};

const helloAnna = hello.bind(anna);

helloAnna();
