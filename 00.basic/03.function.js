// Function
// - 프로그램을 구성하는 기본적인 빌딩 블럭
// - 서브 프로그램이라고도 불리며 여러번 재사용 가능
// - 한가지의 태스크나 어떤 것을 계산하기 위해 사용

// 1. Function declaration
// function name(param1, param2) { body... return; }
// 하나의 함수는 한가지의 일만 하도록 만들어야함
// 네이밍: 동사로 지정
// ex) createCardAndPoint -> createCard, createPoint
// 자바스크립트에서 함수는 오브젝트이다.
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello 동욱');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = '이름이 바뀜~';
}
const dongwook = { name: '강동욱' };
changeName(dongwook);
console.log(dongwook);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'dongwook');

// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello2';
  }
  // console.log(childMessage); // 에러
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum result: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// 함수는 다른 변수와 마찬가지로
// 다른 변수에 할당이 되고
// 다른 함수의 파라미터로 전달이 되고
// 다른 함수 리턴값으로 사용할 수 있다.

// 1. Function expression
// 함수 선언문은 함수 선언 이전에도 호출 가능 (함수 선언문은 호이스팅 됨)
// 함수 표현식은 함수 선언 이전에 호출 X, 할당되야 호출 가능
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(2, 4));

// 2. 함수 표현식을 사용한 콜백 함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('정답!');
};

// named function
// 디버거의 스택 트레이스에 함수이름이 나오게 하기위해 사용
// recursions (재귀)
const printNo = function print() {
  console.log('오답~');
  // print(); // 재귀
};
randomQuiz('djdkjsid', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      return `${command}는 유효하지 않은 커맨드입니다.`;
  }
}
console.log(calculate('sadasd', 1, 2));
