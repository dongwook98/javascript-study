// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
class Counter {
  #value; // 접근제어자(#)을 사용해 외부에서 value 속성을 외부에서 접근, 변경하지 못하게 막을수있다.
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  // 접근제어자(#)를 사용했기 때문에 외부에서 접근 가능 하게 하기 위해서 접근자 프로퍼티 getter 사용
  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value); // 2
