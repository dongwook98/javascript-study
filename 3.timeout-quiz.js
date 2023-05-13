// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
  if (seconds < 0) throw new Error();
  setTimeout(() => {
    return callback();
  }, seconds / 1000);
}

// TODO 풀이 ✨✨
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
