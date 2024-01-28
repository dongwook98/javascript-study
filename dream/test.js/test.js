let promise = new Promise((resolve, reject) => {
  reject(new Error('에러!'));
});

promise.catch((error) => {
  console.log(error);
});
