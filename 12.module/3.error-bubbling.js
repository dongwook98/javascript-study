// Bubbling up, Propagating(전파) 🧼
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    if (error.message === 'error!') {
      console.log('에러 잡을 수 있어!');
    } else {
      console.log(
        '생각해보니깐 이 에러는 b 함수에서 핸들링 할 수 없을 것 같군!'
      );
      throw error; // 에러를 다시 던짐
    }
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('c 함수에서 핸들링 할 수 있어! error Catched!');
}
console.log('done!!');

// 에러는 전파 ,버블링 되므로 내가 에러를 잘 처리할 수 있는 곳, 적합한 곳에서 에러를 처리 하면 된다.
