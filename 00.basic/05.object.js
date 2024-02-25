'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literal and property
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const dongwook = { name: '강동욱', age: 27 };
print(dongwook);

// with JavaScript magic (dynamically typed language)
// can add properties later
dongwook.hasJob = true;
console.log(dongwook);

// can delete properties later
delete dongwook.hasJob;
console.log(dongwook);

// 2. Computed property
// key should be always string
console.log(dongwook.name);
console.log(dongwook['name']);
dongwook['hasJob'] = true;
console.log(dongwook.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(dongwook, 'name');
printValue(dongwook, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('강동욱', 20);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this
}

// 5. in operator: property existence check (key in obj)
console.log('name' in dongwook);
console.log('age' in dongwook);
console.log('random' in dongwook);
console.log(dongwook.random);

// 6. for..in vs for..of
// for (key in obj)
for (let key in dongwook) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: '강동욱', age: 27 };
const user2 = user;
user2.name = '김철수';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
