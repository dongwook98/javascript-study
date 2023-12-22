function execute() {
  console.log('1'); // 1번째 실행
  setTimeout(() => {
    console.log('2'); // 3번째 실행
  }, 3000);
  console.log('3'); // 2번째 실행
}

execute();
