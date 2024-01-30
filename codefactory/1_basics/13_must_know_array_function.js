/**
 * Array Functions
 */
let iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log(iveMembers);

// push() -> 원본 배열 직접 변경
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('---------------_');
// pop() ->
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------_');
// shift()
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진')); // 길이 반환
console.log(iveMembers);

console.log('---------------_');

// splice(삭제시작하고 싶은인덱스, 인덱스부터 삭제하고 싶은 개수)
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log(iveMembers);

/**
 * Immutable 프로그래밍이 대세임
 * 원본을 변경하지 않고 그대로 유지하면서 프로그래밍 하는 것
 */

// concat() -> push()와 비슷함, 차이점은 원본 배열을 변경하지 않음
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// slice() -> splice()와 비슷함, 차이점은 원본 배열을 변경하지 않고 두번째 파라미터 값에 인덱스가옴
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

let iveMembers3 = [iveMembers];
console.log(iveMembers3);

console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers] === iveMembers); // false

// join() -> 배열의 모든 요소들을 문자열로 합쳐줌
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));
console.log('join', iveMembers); // join은 원본 배열 변경X

// sort()
iveMembers.sort(); // 오름차순
console.log(iveMembers); // sort는 원본 배열 변경

console.log(iveMembers.reverse()); // 내림차순

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);
// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map()
// 배열의 요소를 순회하면서 각각의 요소의 값들을 매핑해줌
// 원본 배열 변경X, 새로운 배열 반환
console.log('--------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === '안유진') {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

// filter()
// filter에 인자로 전달되는 콜백함수 리턴값에 true를 반환하면
// filter의 반환값에 들어가게 됨
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));

// find()
// filter와 마찬가지로 콜백함수 리턴값에 true를 반환하면 find 리턴값에 들어감
// filter와 차이점은 filter는 콟백함수 리턴값에 true인 요소들을 전부 filter 리턴값에 들어가지만
// find는 배열의 요소들을 순서대로 보다가 콜백함수 리턴값에 true가 되는 첫번째 값만 반환해준다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
