const cat = { name: '루비', emoji: '🐈' };

console.log(Object.keys(cat)); // [ 'name', 'emoji' ]
console.log(Object.values(cat)); // [ '루비', '🐈' ]
console.log(Object.entries(cat)); // [ [ 'name', '루비' ], [ 'emoji', '🐈' ] ]

console.log('name' in cat); // true
console.log(cat.hasOwnProperty('name')); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(cat);
console.log(descriptors); // { name: { value: '루비', writable: true, enumerable: true, configurable: true }, emoji: { value: '🐈', writable: true, enumerable: true, configurable: true } }

const desc = Object.getOwnPropertyDescriptor(cat, 'name');
console.log(desc); // { value: '루비', writable: true, enumerable: true, configurable: true }

Object.defineProperty(cat, 'name', {
  value: '샤넬',
  writable: false, // 수정여부
  enumerable: false, // 열거여부
  configurable: false, // 키수정여부
});
console.log(cat.name); // 샤넬
console.log(Object.keys(cat)); // [ 'emoji' ]
delete cat.name;
console.log(cat.name); // 샤넬

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '동욱',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '강',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student.fullName); // 강 동욱
console.log((student.fullName = '김 예리')); // 김 예리
console.log(student); // { firstName: '예리', lastName: '김' }

// 포인트는 자바스크립트 객체에서 특정한 value가 수정되면 안되거나,
// 열거 되면 안되거나, key 자체가 수정이 되면 안되거나 할 때
// 이런식으로 세밀하게 객체를 만들 수 있다는것이다.
