// 매개변수의 기본값은 무조건 undefined
// 함수는 객체이기 때문에 함수라는 객체안에 유용한 arguments 속성이 있음
// arguments에는 전달된 인자에 대한 정보가 들어있음

// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments); // [Arguments] {}
  console.log(arguments[0]); // undefined -> why? 매개변수에 아무것도 전달받지 못했기 때문에
  return a + b;
}
console.log(add());

// ✨ Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers); // [ 5, 6, 7, 8 ]
}
sum(3, 4, 5, 6, 7, 8);
