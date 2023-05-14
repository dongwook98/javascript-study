// 삼항 조건 연산자 Ternary Operator
// MDN 삼항조건연산자: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// 조건식 ? 참인경우 : 거짓인경우

let fruit = 'apple';
// if (fruit === 'apple') {
//   console.log('🍎');
//   let a = 1;
//   console.log(a);
// } else {
//   console.log('😍');
// }
// ? 삼항연산자를 사용하면 위 코드를 아래와 같이 간결하게 작성가능하다.

fruit === 'apple' ? console.log('🍎') : console.log('😍'); // '🍎'

let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji); // '🍎'
