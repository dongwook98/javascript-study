/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString()); // 코드 중복 -> 함수로 중복제거 가능

/**
 * DRY 원칙을 지키며 프로그래밍하는게 중요
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

// 이렇게만 하면 3에 대한 계산만 할 수 있음
function calculate() {
  console.log((((3 * 10) / 2) % 3).toString());
}
// calculate();

/**
 * Parameter를 정의해서 외부에서 함수 호출시 전달하는 argument를 전달받을 수 있음
 * 즉, 함수 호출시 argument값이 함수에서 정의한 parameter로 전달되어서 확장성이 좋아짐
 *
 * 함수에서 외부로부터 입력받는 값에대한 정의를 Parameter라고한다.
 * 외부에서 실제 전달하는 값을 argument라고 한다.
 */
function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}
calculate(4);
calculate(5);

// 파라미터 여러개 정의 가능
function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4);

// 파라미터에 기본값 지정 가능
function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2, 4);
multiply(2);

/**
 * 반환받기
 * return 받기
 * 함수 안에서 정의한것들은 함수 스코프안에서만 존재
 * 그런데 함수 안에서만 존재하는것들을
 * 함수 밖에서 받아볼수 있게하는것이 return
 *
 * return 키워드를 쓰면 함수 안에서 작업한 값을 함수 밖에서 받을 수 있기 때문에 유용하다.
 */
console.log('---------------');
function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 *
 * 일반 function 함수와 기능적으로 다름
 */
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

// return 다음 한줄일때, {} return 생략가능
const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

// 파라미터가 한개일때 () 생략가능
const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z:${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

// 함수 표현식
const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(4, 5));

// 함수 내부에서 arguments 키워드로 외부 arguments 값들을 확인 가능
const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};
console.log('-----------------');
console.log(multiplyThree(4, 5, 6));

// rest parameter -> 외부 argument를 무한하게 받을 수 있음
const multiplyAll = function (...arg) {
  console.log(arguments);
  console.log(arg);
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function -> 즉시실행 함수
(function (x, y) {
  console.log(x * y);
})(4, 5);

// function의 타입
console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true -> 함수는 Object이다.
