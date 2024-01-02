// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const dog = { name: '🐶' };
const cat = { name: '🐈', owner: '동욱' };

if (dog && cat) {
  console.log('둘다 true!');
}

if (dog || cat) {
  console.log('둘다 true!');
}

let result = dog && cat;
console.log(result); // { name: '🐈', owner: '동욱' }

result = dog || cat;
console.log(result); // { name: '🐶' }

// 활용 예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falsy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐 주인';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있음');
  }
  animal.owner = '새로운 주인';
}

dog.owner && changeOwner(dog);
cat.owner && changeOwner(cat);
console.log(dog);
console.log(cat);

dog.owner || makeNewOwner(dog);
cat.owner || makeNewOwner(cat);
console.log(dog);
console.log(cat);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falsy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
