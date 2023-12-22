function getBanana() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('오렌지가 없습니다.'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) => {
    return getApple() //
      .then((apple) => [banana, apple]);
  })
  .then((result) => console.log(result)); // 4초 소요

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits)); // 3초 소요

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// Promise.all은 getOrange 하나만 실패해도 then의 콜백함수가 실행이 안됨
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch((error) => console.log(error));

// Promise.allSettled 성공하든 실패하든 모든 결과에 대해서 반환
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch((error) => console(error));
