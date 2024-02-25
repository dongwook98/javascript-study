// 1. Use strict
// ES 5에 추가됨
// use this for vanilla Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'; // global scope
// global 변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어있기 때문에
// 최소한으로 쓰는것이 좋다. 가능하면 클래스, 함수, if, for 안에 필요한 곳에만 사용하는 것이 좋음
{
  let name = 'dongwook';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name); // block scope
console.log(globalName);

// var (더 이상 쓰지마라)
// var hoisting (선언부가 최상단으로 이동하는 것)
// has no block scope
{
  age = 4; // 💩 선언보다 할당 먼저 가능
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// 웬만하면 const 사용, 변해야하는 값이 필요하다면 let 사용
// 한번 할당하면 값이 절대로 변경되지 않는 것
const daysInWeek = 7;
const maxNumber = 5;

// Data type에는 2가지 존재
// Immutable data type: primitive type, frozen object (ex. object.freeze())
// Mutable data type: 자바스크립트에서는 모든 오브젝트는 변경 가능

// Immutable data type을 쓰면 좋은 이유
// - 보안성
// - 실수 방지

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(일급 함수)

// C, Java는 숫자 데이터를 저장할 때 숫자 범위에 따라 타입이 달라짐
// JavaScript는 number 타입밖에 없음
const count = 17; // 정수
const size = 17.1; // 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - 특별한 값이 정해져 있음: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 123n; // -2**53 ~ 2**53 초과한 숫자
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: 어떤 값이든 true
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, 일상생활에서 보는 물건과 물체들을 대표할 수 있는 박스 형태를 말함
const dongwook = {
  name: '강동욱',
  age: 27,
};
dongwook.age = 20;
console.log(dongwook);

// 5. 동적 타이핑: 자바스크립트는 동적 타입 언어
// 런타임에서 동적으로 타입이 결정되기 때문에 에러를 일으킴 그래서 타입스크립트가 인기
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));
