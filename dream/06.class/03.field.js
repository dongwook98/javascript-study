// 접근제어자 - 캡슐화(내부상으로 필요한 데이터를 외부에서는 보이지 않도록 수정할 수 없도록 꽁꽁 캡슐화 하는 느낌)
// 클래스 내부에서만 사용되는 프로퍼티, 메서드가 있다면 접근제어자를 사용해서 클래스 외부에서 접근하지 못하도록 할 수 있음
// private(#), public(기본), protected
class Fruit {
  // 필드, 자바스크립트에서는 constructor에서 주어진 데이터라면 생략 가능
  #name;
  #emoji;
  #type = '과일'; // 클래스를 만들때 프로퍼티 초기화 가능

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // SyntaxError: Private field '#name' must be declared in an enclosing class // #field는 외부에서 접근이 불가능함
console.log(apple); // Fruit {}
// apple.#display(); // SyntaxError: Private field '#display' must be declared in an enclosing class
