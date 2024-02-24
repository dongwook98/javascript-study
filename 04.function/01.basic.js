// 사용예제 1
function add(num1, num2) {
  console.log('function');
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2
// 함수로 만들어두면 재사용성도 높아지고, 유지보수하기도 쉬움
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 👋`;
}

console.log(fullName('동욱', '강'));
console.log(fullName('예리', '김'));
