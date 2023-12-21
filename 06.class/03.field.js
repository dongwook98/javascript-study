// 접근제어자 - 캡슐화(내부상으로 필요한 데이터를 외부에서는 보이지 않도록 수정할 수 없도록 꽁꽁 캡슐화 하는 느낌)
// private(#), public(기본), protected
class Fruit {
  #name;
  emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // SyntaxError: Private field '#name' must be declared in an enclosing class
// #field는 외부에서 접근이 불가능함
console.log(apple); // Fruit { emoji: '🍎' }
// apple.#display(); // SyntaxError: Private field '#display' must be declared in an enclosing class
