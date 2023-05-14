const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => {
      console.log('resolve');
    });
    reject(() => {
      console.log('reject!');
    });
  }, 5000);
});

// 딴 짓1!
// 딴 짓2!!
// 딴 짓3!!!

// 아 맞다! 10분뒤에 아까 setTimeout한 거 결과 받아야하는데
promise.then((result) => {
  result();
});
