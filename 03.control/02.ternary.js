// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 실행될 표현식 : 거짓인경우 실행될 표현식

let fruit = 'apple';
// if (fruit === 'apple') {
//   console.log('🍎');
//   let a = 1;
//   console.log(a);
// } else {
//   console.log('😍');
// }

// 삼항연산자를 사용하면 위 if문 코드를 아래와 같이 간결하게 작성 가능
fruit === 'apple' ? console.log('🍎') : console.log('😍');

let emoji = fruit === 'apple' ? '🍎' : '😍';
console.log(emoji);
