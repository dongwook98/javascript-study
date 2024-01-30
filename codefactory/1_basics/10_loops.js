/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('------------');

for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log('------------');

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6x6의 정사각형를 출력해라
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += '*';
  }
  square += '\n';
}

console.log(square);

/**
 * for...in
 */
const yuJin = {
  name: '안유진',
  year: 2003,
  group: '아이브',
};

console.log('------------');

// for...in을 객체에서 쓰면 key값을 가져옴
for (let key in yuJin) {
  console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log('------------');

// for...in을 배열에서 쓰면 index값을 가져옴
for (let key in iveMembersArray) {
  console.log(key);
  console.log(`${key}:${iveMembersArray[key]}`);
}

/**
 * for...of
 * 이터러블, looping을 할 수 있는 값만 for...of 사용 가능
 * 예를들어, 배열
 */
console.log('------------------');
/**
 * 배열에 for...in 루프를 사용하면 index값 가져옴
 * 배열에 for...of 루프를 사용하면 value값 가져옴
 */
for (let value of iveMembersArray) {
  console.log(value);
}

/**
 * While
 */
console.log('------------------');
let number = 0;

while (number < 10) {
  number++;
}

console.log(number);

/**
 * do...while -> 잘 안씀
 * 먼저 do 블록을 실행한 후
 * 조건을 판단
 */
console.log('------------------');
number = 0;

do {
  number++;
} while (number < 10);

console.log(number);

/**
 * break
 * break문이 실행되는 순간 loop 종료
 */
console.log('--------------');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log('-------------');
number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }

  number++;
  console.log(number);
}

/**
 * continue
 * continue문이 실행되는 순간 스킵,
 * 현재 진행하고 있는 loop만 종료하고 다음 loop 실행
 */
console.log('---------------');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

console.log('----------------');
number = 0;

while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
