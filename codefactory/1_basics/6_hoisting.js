/**
 * Hoisting
 */
console.log(name);
var name = '코드팩토리';
console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * let과 const도 호이스팅이 일어나긴 하지만
 * let과 const로 선언한 변수는 그 변수가 초기화 되기전에
 * 접근을 하지못하게 막아준다.
 */
console.log(yuJin);
let yuJin = '안유진';
