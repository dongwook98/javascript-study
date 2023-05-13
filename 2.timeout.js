function execute() {
  console.log('1'); // 1번째
  setTimeout(() => {
    console.log('2'); // 3번째실행
  }, 100);
  setTimeout(() => {
    console.log('4'); // 4번째실행
  }, 100);
  setTimeout(() => {
    console.log('5'); // 5번째실행
  }, 100);
  console.log('3'); // 2번째실행
}

execute();
