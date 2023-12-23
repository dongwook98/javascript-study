// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const dongwook = { name: '강동욱' };
const cat = { name: '루비', emoji: '🐈', owner: dongwook };
Object.freeze(cat);
cat.name = '샤넬';
console.log(cat);
cat.age = 4;
console.log(cat);
delete cat.name;
console.log(cat);

dongwook.name = '김예리';
console.log(cat); // { name: '루비', emoji: '🐈', owner: { name: '김예리' } }

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const dog = { ...cat };
// Object.assign(dog, cat);
Object.seal(dog);
console.log(dog);
dog.name = '백구';
console.log(dog);
delete dog.emoji;
console.log(dog);

console.log(Object.isFrozen(cat));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '호랑이' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '한국 호랑이';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
