// rest.js

function rest1(...args) {
  console.log(args);
}

rest1('mark', 37, 'korea');

function rest2(name, ...args) {
  console.log(name, args);
}

rest2('mark', 37, 'korea');
