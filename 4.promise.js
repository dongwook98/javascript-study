// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// 프로미스 - 비동기적으로 처리하게 도와줌.
// 무겁고, 오래걸리는 일이 있다면 코드 내부에서 조금 더 비동기적으로 처리 할 수 있게 도와준다.
function runInDelay2(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수를 전달 해야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay2(() => {
    console.log('타이머완료');
  }, -1);
} catch (error) {
  console.log(error);
}

// 위 코드를 프로미스 사용해 콜백중첩(콜백헬)이 되지 않도록 깔끔하게 함수형 프로그래밍 처럼 사용 할 수 있게 도와준다.
function runInDelay2(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay2(2)
  .then(() => console.log('타이머완료'))
  .catch(console.error) // .catch(error => console.error(error))
  .finally(() => console.log('끝났다!'));

// .then(필요한일을 수행) // 성공
// .catch(에러를 처리) // 실패
// .finally(최종적으로 무조건 호출!) // 성공실패상관없이 호출
