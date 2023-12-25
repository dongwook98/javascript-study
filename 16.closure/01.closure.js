const text = 'hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();

// 클로저: 함수가 중첩되어있을때 내부 함수가 외부 함수의 렉시컬 환경에 접근 할 수 있으니까
// 외부 환경에 접근이 가능 한 것을 클로저라고 한다.
