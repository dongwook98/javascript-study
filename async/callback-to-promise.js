class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'dongwook98' && password === '1234') {
          resolve(id);
        } else {
          reject(new Error('등록되지 않은 회원정보 입니다.'));
        }
      }, 2000);
    });
  }

  getRoles(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'dongwook98') {
          resolve({ name: '강동욱', role: '프론트엔드 개발자' });
        } else {
          reject(new Error('권한이 없습니다.'));
        }
      }, 2000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력해주세요.');
const password = prompt('비밀번호를 입력해주세요.');
userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id))
  .catch((error) => {
    console.log(error);
    return { name: '익명', role: '모름' }; // 땜빵
  })
  .then((user) => alert(`${user.role} - ${user.name}님 안녕하세요!`))
  .catch((error) => {
    console.log(error);
  });
