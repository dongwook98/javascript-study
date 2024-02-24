// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }

  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// 클로저라는 특징을 이용해서 함수로 내가 은닉하고자 하는 데이터 상태를 감추고
// 오직 퍼블릭 함수만을 통해서 내부 데이터를 조작할 수 있게 만들어 줄 수 있음

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
