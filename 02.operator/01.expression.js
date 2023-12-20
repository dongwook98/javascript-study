// 리터럴(Literal) - 코드에서 특정한 값을 나타내는 표기법
// 문(Statement) - 코드를 실행하기 위한 최소 실행 단위
// 표현식(Expressions) - 값으로 평가 될 수 있는 문

let b; // 선언문
// 선언문은 값으로 평가 될 수 없기때문에 표현식이 아니다!
b = 2; // 표현식, 할당문

// let a = let b // 선언문은 값이 아니기 때문에 할당 할 수 없음
let a = (b = 2);
console.log(a);
