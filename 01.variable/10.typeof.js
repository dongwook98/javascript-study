// typeof: 데이터 타입을 확인
// 특정한 데이터의 값을 타입 문자열로 반환
// 자바스크립트의 타입은 동적으로 결정이 되고 할당된 값에 따라서 타입이 결정된다.
// 자바스크립트의 타입 - dynamic,  weakly typed programming language

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123456; // 할당된 값에 따라 타입이 결정됨!
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
