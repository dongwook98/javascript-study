/**
 * Operators (연산자)
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log('----------------');

// 소괄호로 우선순위 지정 가능
console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log('------------');

/**
 * 연산자의 위치
 *
 * 보통 뒤에다 연산자씀
 */
let result = 1;
console.log(result);

result = number++; // result에 먼저 number값(1) 저장, = 부터 실행
console.log(result, number);

result = number--; // result에 먼저 number값(2) 저장
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게될까?
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample); // number

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample); // 1
console.log(typeof +sample);

sample = false;
console.log(+sample); // 0
console.log(typeof +sample);

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교 -> 이것만 쓰는게 좋음
 */
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('-------------');

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('----------');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('-------------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

console.log('-----------------');

/**
 * 논리 연산자
 *
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('------------');

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('---------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log('---------------');

console.log(true || '아이브');
console.log(false || '아이브');
console.log(true && '아이브');
console.log(false && '아이브');

console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브'); // false

/**
 * 지수 연산자
 */
console.log('-------------');

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 *
 * ??: 좌측 값이 null이거나 undefined일 경우 우측 값을 반환해라.
 */
console.log('-------------');

let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name); // 코드팩토리

let name2;
name2 ??= '코드팩토리'; // name2 = name2 ?? '코드팩토리';
console.log(name2);
