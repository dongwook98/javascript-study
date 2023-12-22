'use strict';

// JavaScript is synchronous. 자바스크립트는 동기적이다.
// 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말
// hoisting: var, function declaration 선언들이 제일 위로 올라가는것
// synchronous: 정해진 순서에 맞게 코드가 실행되는 것
// asynchronous: 비동기적으로 언제 코드가 실행될지 예측 할 수 없는 것
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello')); // 동기

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// 콜백 지옥 체험 💩
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'dongwook98' && password === '1234') {
        onSuccess(id);
      } else {
        onError(new Error('등록되지 않은 회원정보 입니다.'));
      }
    }, 2000);
  }

  getRoles(id, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'dongwook98') {
        onSuccess({ name: '강동욱', role: '프론트엔드 개발자' });
      } else {
        onError(new Error('권한이 없습니다.'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해주세요.');
const password = prompt('비밀번호를 입력해주세요.');
userStorage.loginUser(
  id,
  password,
  (id) => {
    console.log(`id: ${id} 로그인`);
    userStorage.getRoles(
      id,
      (user) => {
        alert(`${user.role} - ${user.name}님 안녕하세요!`);
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
// 콜백 지옥의 문제점
// 1. 가독성이 떨어짐
// 2. 비즈니스 로직도 한눈에 알아보기 힘듬
// 3. 유지보수도 어렵다.
