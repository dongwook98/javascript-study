// 사용예제 1
function add(num1, num2) {
  console.log('function');
  return num1 + num2;
}
const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 👋`;
}
let lastName = '강';
let firstName = '동욱';
console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '예리';
console.log(fullName(firstName2, lastName2));
