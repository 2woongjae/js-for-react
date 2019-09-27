// 1. 블록 레벨 스코프
{
  let variable = 'block scope';

  console.log(variable);
}

// 2. 중복 선언 => syntax error
{
  let variable = 'block scope';
  let variable = 'duplicated';

  console.log(variable);
}

// 3. 호이스팅 => syntax error
{
  console.log(variable);
  let variable = 'hoisted';
}
