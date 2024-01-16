// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.log('----------------');
// Falsy 거짓인 값
console.log(!!0); // !!: 값을 true 나 false 로 변환
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log('---------------');
// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);
