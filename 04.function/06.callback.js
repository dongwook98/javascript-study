// 콜백함수 (필요한순간에 호출이 나중에 됨! - 나중에 돌아와 이런느낌)
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 콜백함수(add,multiply)는 고차함수(calculator)안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b); // action 콜백함수는 언제 호출될지 모름 고차함수(calculator)가 필요한 순간에 호출
  console.log(result);
  return result;
}

// 어떤 함수를 전달하냐에 따라서 고차함수안에서 실행되는 함수가 달라짐
calculator(-1, -2, add); // add 함수의 참조값, 주소를 calculator 함수에 전달
calculator(7, 4, multiply); // multiply 함수의 참조값, 주소를 calculator 함수에 전달
