// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay3(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수를 전달 해야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}

runInDelay3(() => {
  console.log('타이머 완료 👍');
}, -5);

// try {
//   runInDelay3(() => {
//     console.log('타이머 완료 👍');
//   }, -5);
// } catch (error) {
//   console.log('에러 발생! 🚨');
//   console.log(error);
// }
