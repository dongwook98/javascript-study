// 프로미스 - 비동기적으로 처리하게 도와줌.
// 무겁고, 오래걸리는 일이 있다면 코드 내부에서 조금 더 비동기적으로 처리 할 수 있게 도와준다.
function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머완료'))
  .catch(console.error) // .catch(error => console.error(error))
  .finally(() => console.log('끝났다!'));

// runInDelay(3)
// .then(필요한일을 수행) // 성공
// .catch(에러를 처리) // 실패
// .finally(최종적으로 무조건 호출!) // 성공실패상관없이 호출
