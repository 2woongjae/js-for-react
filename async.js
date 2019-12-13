// async.js

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 로직
      resolve();
    }, 1000);
  });
}

(async () => {
  await foo();
  console.log('end');
  console.log('이것이 먼저 실행');
})();
