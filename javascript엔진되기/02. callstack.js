const console = {
  log() {
    // 콘솔에 글자 적는 기능
  },
};

const x = 'x';
function c() {
  const y = 'y';
  console.log('c');
}

function a() {
  const x = 'x';
  console.log('a');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
  b();
}

a(); // a, b, c
c(); // c

//
