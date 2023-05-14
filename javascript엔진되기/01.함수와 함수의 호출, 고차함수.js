const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8

calculator(add, 3, 5); // 8

document.querySelector('#header').addEventListener('click', add()); // ❌
// add() : undefind + undefind
document.querySelector('#header').addEventListener('click', add); // ⭕️

const onClick = () => (event) => {
  console.log('hello');
};

document.querySelector('#header').addEventListener('click', onClick()); // ⭕️

// 결론 : 함수의 호출을 보면 리턴값으로 대체
