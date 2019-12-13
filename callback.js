// callback.js

function foo(callback) {
  setTimeout(() => {
    // 로직
    callback();
  }, 1000);
}

foo(() => {
  console.log('end');
});
console.log('이것이 먼저 실행');
