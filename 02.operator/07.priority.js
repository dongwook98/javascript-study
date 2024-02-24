// 연산자 우선순위
// MDN 연산자 우선순위: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
let a = 2;
let b = 3;
let result = ((a + b) * 4) / 5;
console.log(result);
result = a++ + b * 4; // a++ 는 문장이 끝나고 실행..
console.log(result); // 14
console.log(a); // 3

// 내가 우선순위를 높이고 싶은거를 명확하게 코드상에서 괄호를 쳐주자.
