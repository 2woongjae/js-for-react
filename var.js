// 1. 헷갈리는 함수 레벨 스코프
(function() {
  if (true) {
    var variable = 'function scope';
  }

  console.log(variable);
})();

// 2. 중복 선언이 가능
(function() {
  var variable = 'function scope';
  var variable = 'duplicated';

  console.log(variable);
})();

// 3. 생략도 가능
(function() {
  variable = 'no var';

  console.log(variable);
})();

console.log(variable);

// 4. 호이스팅
(function() {
  console.log(variable);
  var variable = 'hoisted';
})();

(function() {
  var variable;
  console.log(variable);
  variable = 'hoisted';
})();
