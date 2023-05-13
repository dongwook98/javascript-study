// 리터럴(Literal) - 코드에서 값을 나타내는 표기법

// 문(Statement) - 최소 실행 단위
// 표현식(Expressions) - 값으로 평가 될 수 있는 문

let b; // 선언문
// ! 선언문은 값으로 평가 될 수 없기때문에 표현식이 아니다!
b = 2; // 표현식, 할당문

let a = (b = 2);
console.log(a);

/** ✨point
 *  1. 코드 한줄한줄이 실행되면 어떤 일이 발생하는지?
 *  2. 코드 한줄한줄이 실행되면 어떤 값을 생성되는가?
 *  3. 이 변수에는 어떤 값이 들어 있는가?
 */
