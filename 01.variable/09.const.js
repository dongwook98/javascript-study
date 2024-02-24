// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5; // 상수는 항상 대문자, 단어와 단어사이에는 _ 사용하자

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; ❌
console.log(apple);
apple.name = 'green apple';
apple.color = 'green';
apple.display = '🍏';
console.log(apple);
// 🚨 const는 재할당이 불가능한거지 객체의 변경은 가능
// 실제 객체는 Heap에 저장되고 변수이름은 실제 객체가 보관된 메모리 주소를 가르키고 있다.
// 그래서 const를 써도 Heap에 저장된 실제 객체를 수정하는거기 때문에 에러가 나지 않는다.
// 즉, const는 apple이 가르키고 있는 메모리셀에 재할당이 불가능하다는것이다.
