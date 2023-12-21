const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 1️⃣ forEach((value, index, array) => { })
// 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
fruits.forEach(function (value, index, array) {
  console.log('------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

// 보통 인덱스와, 배열의 정보는 잘안쓰고 화살표 함수를 씀
fruits.forEach((value) => console.log(value));

// 2️⃣ find((item) => { return 조건 })
// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
const foundProduct = products.find((value) => value.name === '🍪');
console.log(foundProduct);

// 3️⃣ findIndex((item) => { return 조건 } )
// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
const foundIndex = products.findIndex((value) => value.name === '🍪');
console.log(foundIndex);

// 4️⃣ some((item) => { return 조건 })
// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
const resultSome = products.some((item) => item.name === '🍪');
console.log(resultSome);

// 5️⃣ every((item) => { return 조건 })
// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
const isEvery = products.every((value) => value.name === '🍪');
console.log(isEvery);

// 6️⃣ filter((item) => { return 조건 })
// 조건에 맞는 모든 아이템들을 새로운 배열로!
const filterProducts = products.filter((item) => item.name === '🍪');
console.log(filterProducts);

// 7️⃣ map((item) => { return 매핑할 아이템 })
// 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const numbersArr = [1, 2, 3, 4, 5];
const numberArrTwice = numbersArr.map((item) => item * 2);
console.log(numberArrTwice);

const result = numbersArr.map((item) => {
  if (item % 2 === 0) {
    return item * 2; // 짝수 아이템만 2배로 매핑
  } else {
    return item;
  }
});
console.log(result);

// 8️⃣ flatMap((item) => { return 매핑할 아이템 배열 })
// 중첩된 배열을 쫘악 펴줌
console.log('numbersArr', numbersArr); // numbersArr [ 1, 2, 3, 4, 5 ]

const mapResult = numbersArr.map((item) => [1, 2]); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
console.log(mapResult);

const flatResult = numbersArr.flatMap((item) => [1, 2]); // [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ]
console.log(flatResult);

const mapResult2 = ['dream', 'coding'].map((text) => text.split('')); // [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
console.log(mapResult2);

const flatResult2 = ['dream', 'coding'].flatMap((text) => text.split('')); // [ 'd', 'r', 'e', 'a', 'm', 'c', 'o', 'd', 'i', 'n', 'g' ]
console.log(flatResult2);

// 9️⃣ sort((a, b) => { return a - b })
// 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

// 주의! sort()는 문자열 형태로 정렬하기 때문에 숫자는 제대로 정렬이 안될 수 있음.
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ] 💩

// 콜백함수 리턴값 < 0 a가 앞으로 정렬, 오름차순
// 콜백함수 리턴값 > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// 🔟 reduce 배열의 요소들을 접어서 접어서 값을 하나로!
const reduceResult = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(reduceResult);
