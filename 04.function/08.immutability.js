// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 왜냐하면 원시값 - 값에 의한 복사가 되어서 큰 문제는 없지만
// 객체값 - 참조에 의한 복사(메모리주소)는 메모리 주소를 복사하기 때문에 원본 객체도 변경해버림..
function display(num) {
  num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value); // 5 -> 이것도 안좋음
console.log(value); // 4

function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(특히 오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const dongwook = { name: 'dongwook' };
displayObj(dongwook); // { name: 'Bob' }
console.log(dongwook); // { name: 'Bob' }

// 만약 정말 부득이하게 주어진 인자로 부터 상태를 변경해야한다면?
// 1. 우선 함수 이름부터 변경한다는 느낌을 주도록!
// 2. 외부에서 전달된 객체를 바꾸는것이 아니라 새로운 객체를 만들어서 만들어서 반환!
function changeName(obj) {
  return { ...obj, name: 'Bob' }; // 반활할때는 새로운 오브젝트 만들기!
}
