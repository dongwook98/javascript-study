// 반복문 Loop Statement
// for (변수선언문; 조건식; 증감식) { }
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓일 될때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 💩 반복문을 작성할때 조건이 언젠가는 false가 될 수 있도록 코딩을 하는것이 중요
// for (;;) {
//   console.log('🤪');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    // continue; // 조건이 맞으면 다음으로 넘어가!

    console.log('i가 드디어 10이 되었다!');
    break; // 조건이 맞으면 반복문을 그만해!
  }
  console.log(i);
}
