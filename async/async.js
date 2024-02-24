// async & await
// 깔끔하게 프로미스를 사용하는 방법

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  // 위와 같은 오래걸리는 일은 비동기적으로 처리해야함!

  return '강동욱';
}

const user = fetchUser();
user.then((data) => console.log(data)); // 강동욱
console.log('프로미스', user); // Promise {<fulfilled>: '강동욱'}

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(3000);
  return '🍌';
}

// 프로미스의 문제점: 체이닝을 하다보면 콜백지옥과 비슷해짐
// 해결방법: async await로 해결
function pickFruits2() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

// async, await 문제점: 병렬 처리하기 까다롭 할수는 있음(42~45 코드)
// 해결방법: Promise Static APIs
async function pickFruits() {
  // const applePromise = getApple();
  // const bananaPromise = getBanana();
  // const apple = await applePromise;
  // const banana = await bananaPromise;

  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then((fruits) => console.log(fruits));

// 3. 유용한 Promise Static APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then((data) => console.log(data));

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then((fruit) => console.log(fruit));
