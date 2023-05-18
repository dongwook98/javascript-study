const x = 'x';
function c() {
  const y = 'y';
  console.log('c');

  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}

function a() {
  const x = 'x';
  console.log('a');
  b();
}

a(); // a, b, c
c(); // c
