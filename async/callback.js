'use strict';

// JavaScript is synchronous. 자바스크립트는 동기적이다.
// 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말
// hoisting: var, function declatation 선언들이 제일위로 올라가는것
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기 // 브라우저 API(SetTimeout() 등)는 무조건 브라우저에게 요청을 먼저 보냄!!!!
console.log('3'); // 동기

// ✨ Synchronous callback 동기적 콜백함수
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello')); // 동기적 콜백함수가 전달됨

// ✨ Asychronous callback 비동기적 콜백함수
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기적 콜백함수가 전달됨.

// 자바스크립트는 함수를 콜백형태로 인자로 다른함수에 전달할수도 있고 또는 변수에 할당 할 수도 있다.

// 콜백 지옥 체험 💩
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백 체인의 문제점
// 가독성이 떨어진다.
// 한눈에 로직을 이해하기 어렵.
// 유지보수도 어렵다.
