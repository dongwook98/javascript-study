// 원시타입은 값이 복사되어 전달됨 (copy by value)
let a = 1;
let b = a; // 1
a = 2;
console.log(a); // 2
console.log(b); // 1

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨 (copy by reference)
let apple = {
  // 0x1234
  name: '사과',
};
let orange = apple; // 0x1234이 복사되어서 orange에 전달됨
orange.name = '오렌지';
console.log(apple); // { name: '오렌지' }
console.log(orange); // { name: '오렌지' }
