/**
 * null, undefined
 *
 * undefined: 정해지지 않은 상태
 * null: 확실하게 비어있다는걸 표현하고 싶을때 사용
 */

let variable; // 값이 있는지 없는지 모르겠음
console.log(variable);

variable = null; // 명시적으로 이 변수에는 값이 없다라고 표현할때 null 사용
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태!
activeItem = null; // 활성화된 아이템이 없는 상태!

console.log(typeof null); // object
// null은 자바스크립트 자체에서 null이라는거를 표현하기 위해서 object를 만들어서 표현
console.log(typeof undefined); // undefined
