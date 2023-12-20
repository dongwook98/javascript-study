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
// 실제 object는 Heap에 저장되고 변수 이름에는 실제 object가 보관된 메모리 주소를 보관하고 있다.
// 그래서 const를 써도 Heap에 저장된 실제 object를 수정하는거기 때문에 에러가 나지 않는다.
// const는 실제 object가 보관된 메모리 셀에 재할당이 불가능하다는것이다.
