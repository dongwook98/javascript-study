// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

// 아무것도 반환하지 않는 함수라면 return 생략가능 (return이 생략되면 자동으로 return undefined 라고 처리함 by 자바스크립트엔진)
function justPrint(text) {
  console.log(text);
}
justPrint('hello');

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용 예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function conditionalPrint(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
conditionalPrint(-12); // 출력안됨
conditionalPrint(12); // 출력됨
