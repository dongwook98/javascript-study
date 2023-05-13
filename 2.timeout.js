function execute() {
  console.log('1'); // 1번째
  setTimeout(() => {
    console.log('2'); // 3번째실행
  }, 3000);
  setTimeout(() => {
    console.log('4'); // 4번째실행
  }, 1000);
  setTimeout(() => {
    console.log('5'); // 5번째실행
  }, 3000);
  console.log('3'); // 2번째실행
}

execute();
