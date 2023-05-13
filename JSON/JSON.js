// JSON
// JavaScript Object Notation

// 1. Object to JSON 오브젝트 -> JSON
// stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"] -> 작은따옴표가아니라 큰따옴표로 출력됨 ""로 출력되는이유는 JSON의 규격사항

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // jump메서드는 출력x why? 메서드는 데이터가 아니기 때문에, Symbol도 출력x why? 자바스크립트만의 타입이기때문에 JSON의 규격에 맞지않음.

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // {"name":"tori","color":"white","size":null} 배열로 지정하고 싶은 키값만 나오게 할 수 있다.

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
}); // ! 콜백함수로 좀 더 세밀하게 데이터를 통제할 수 있다.
console.log(json);

// 2. JSON to Object JSON -> 오브젝트
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // Uncaught TypeError // ✨ why? rabbit객체에서 jump라는 메서드가 있었지만 JSON으로 변환할때 jump 메서드는 데이터가 아니므로 포함되지 않는다.
// 그래서 JSON에서 변환한 객체에는 jump 메서드가 존재하지 않는다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // Uncaught TypeError // ✨ why? obj.birthDate는 string이기 때문에 getDate() 메서드 사용불가 위와 비슷함.
// ! .parse()의 두번쨰 인자로 오는 콜백함수를 통해 birthDate를 string 에서 Date객체로 변환해줌!!
