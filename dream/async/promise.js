// 프로미스는 자바스크립트 안에 내장 되어져 있는 오브젝트이다.
// 비동기적인 것을 수행할때 콜백함수대신에 유용하게 쓸 수 있는 오브젝트이다.

// promise의 두가지 포인트
// 1. state 상태 : 이 프로세스가 무거운 오퍼레이션을 수행하고 있는 중 인지 아니면 이 기능 수행이 다 완료되어서 성공했는지 실패했는지 이해하는 것이 중요
// 2. Producer 와 Consumer 의 차이점을 아는것

// state: pending -> fulfilled OR rejected
// Producer(제공자) vs Consumer(소비자)

// 1. Producer
// ✨ 새로운 프로미스를 만드는 순간 우리가 전달한 executor라는 콜백함수가 바로 자동적으로 실행
const promise = new Promise((resolve, reject) => {
  // 보통 promise 안에서 무거운 일을 함 (네트워크 통신 또는 파일 읽기) -> 오래걸리기 때문에 비동기적으로 처리하는것이 좋음
  console.log('doing something...');
  setTimeout(() => {
    // 네트워크에서 받아온 데이터를 resolve라는 콜백함수를 통해 전달
    resolve({ name: '강동욱', age: 27, job: '프론트엔드 개발자' });
    // reject(new Error('네트워크가 불안정해요.. 죄송합니다.'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((user) => {
    alert(`${user.job} - ${user.name}(${user.age})님 안녕하세요.`);
  })
  // 프로미스에 then을 호출하게 되면 then은 결국 똑같은 프로미스를 리턴하기 때문에
  // 리턴된 프로미스에 catch를 호출 할 수 있음(체이닝)
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally는 성공하든 실패하든 ');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // then은 값을 바로 전달 해도 되고 또다른 비동기인 프로미스를 전달 해도 됨
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 다른 서버와 통신
    });
  })
  .then((num) => console.log(num));

// 4. 오류를 잘 처리하자 -> 프로미스 체이닝을 했을때 어떻게 에러를 잘 처리할까
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (chicken) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${chicken} -> 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((chicken) => getEgg(chicken))
  .catch((error) => {
    console.log(error);
    return '🥝'; // 땜빵 처리
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
