// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:
'''''
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // check와 같은 무거운 연산은 뒤로

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // check와 같은 무거운 연산은 뒤로

// &&로 간편하게 null 체크 가능
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // 시간 낭비
    console.log('시간 낭비');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입 변환)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const dongwook1 = { name: '강동욱' };
const dongwook2 = { name: '강동욱' };
const dongwook3 = dongwook1;
console.log(dongwook1 == dongwook2); // false
console.log(dongwook1 === dongwook2); // false
console.log(dongwook1 === dongwook3); // true

// equality - puzzler
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = '동욱';
if (name === '동욱') {
  console.log('하이 동욱');
} else if (name === 'coder') {
  console.log('하이 코더');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === '동욱' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('저리가..');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('사랑해');
    break;
  default:
    console.log('모르는 브라우저');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. 0 ~ 10 순회하고, continue 사용해서 짝수만 출력
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Q1: ${i}`);
}

// Q2. 0 ~ 10 순회하고 8까지 출력 break 사용해서 그 후 종료
// 안녕하세요.
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`Q2: ${i}`);
}
