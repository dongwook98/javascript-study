/**
 * Variable 선언하기
 *
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '강동욱';
console.log(name);

var age = 27;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

// const로 선언하면 값을 추후 변경할 수 없다.
const newJeans = '뉴진스';
console.log(newJeans);
// newJeans = '코드팩토리'; // TypeError: Assignment to constant variable.

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것.
 * 2) 할당
 * let과 var는 선언만해줘도 되지만 (자동으로 undefined 할당)
 * const는 할당까지 반드시 해줘야 한다.
 */
var name2;
console.log(name2);

let girlFriend;
console.log(girlFriend);

const girlFriend2; // 'const' declarations must be initialized.