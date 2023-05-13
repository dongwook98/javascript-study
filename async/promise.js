'user strict';

// 프로미스는 자바스크립트 안에 내장 되어져 있는 오브젝트이다.
// 비동기적인 것을 수행할때 콜백함수대신에 유용하게 쓸 수 있는 오브젝트이다.

// ✨ promise의 두가지 포인트
// 1. state 상태 : 이 프로세스가 무거운 오퍼레이션을 수행하고 있는 중 인지 아니면 이 기능 수행이 다 완료되어서 성공했는지 실패했는지 이해하는 것이 중요
// 2. producer 와 consumer 의 차이점을 아는것

// State: pending -> fulfilled or rejected
// Producer vs consumer

// 1. Producer
// ! 새로운 프로미스가 만들어 질때는 우리가 전달한 executor라는 콜백함수가 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) -> 오래걸리기 때문에 비동기적으로 처리하는것이 좋다.
  console.log('doing something...'); // ✨ 프로미스를 만드는 순간 우리가 전달한 executor라는 콜백함수가 바로 실행된다. // ⚠️ 만약 네트워크 요청을 사용자가 요구했을때만 해야하는경우라면 위처럼 작성하게 되면 사용자가 요구하지도않았는데 불필요한 네트워크 통신이 이뤄진다.
  setTimeout(() => {
    resolve('ellie'); // 네트워크에서 받아온 가공한 데이터를 resolve라는 콜백함수를 통해 전달
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    // ⚠️ 프로미스에 then을 호출하게 되면 then은 결국 똑같은 프로미스를 리턴하기 때문에 리턴된 프로미스에 catch를 호출 할 수 있다.
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // ✨ then은 값을 바로 전달 해도 되고 또다른비동기인 프로미스를 전달 해도 된다!
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. 오류를 잘 처리하자 -> 프로미스 체이닝을 했을때 어떻게 에러를 잘 처리할까
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} -> 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen)) // .then(getEgg) 로 축약가능
  .catch((error) => {
    return '🥖';
  })
  .then((egg) => cook(egg)) // .then(cook) 로 축약가능
  .then((meal) => console.log(meal)) // .then(console.log) 로 축약가능
  .catch(console.log);
