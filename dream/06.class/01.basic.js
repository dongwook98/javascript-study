// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

// 클래스 class 만드는 방법
class Fruit {
  name;
  emoji;

  // constructor(생성자): new 키워드로 객체를 생성할때 호출되는 함수
  // 생성자로 객체를 만들때 필요한 데이터를 외부로 부터 전달받을 수 있음
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 메서드에는 function 키워드 적으면 안됌
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple); // Fruit { display: [Function: display], name: 'apple', emoji: '🍎' }
console.log(orange); // Fruit { display: [Function: display], name: 'orange', emoji: '🍊' }
console.log(apple.name); // apple
console.log(apple.emoji); // 🍎
apple.display(); // apple: 🍎
orange.display(); // orange: 🍊

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
