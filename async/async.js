// async & await
// 깔끔하게 프로미스를 사용하는 방법

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  // 오래걸리는일은 비동기적으로 처리해야함!

  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return '🍎';
}

async function getBanana() {
  await delay(3000);
  return '🍌';
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 프로미스 : 언제 유저의  데이터를 받아올지 모르겠지만 내가약속할게 이 프로미스라는 오브젝트를 가지고 있으면 여기에 너가 then이라는 콜백함수만 등록해놓으면 유저의 데이터가 준비되는데로 너가 등록한 콜백함수를 불러줄게 이다.
