function add(a, b) {
  return a + b;
}
// 함수 이름 자체는 함수를 가르키는 메모리 주소와 동일함
const sum = add; // 함수 이름을 어딘가에 할당한다는것은 함수를 가르키는 메모리 주소를 복사해서 할당하는것과 동일

console.log(sum(1, 2));
console.log(add(1, 2));

console.log(add === sum); // true // add와 sum의 메모리 주소는 같다.
