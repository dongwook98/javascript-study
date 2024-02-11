// static 정적 프로퍼티, 메서드
class Fruit {
  // 클래스 레벨의 프로퍼티
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    // why? 클래스 자체로는 아무것도 채워지지않은 템플릿 상태이므로
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드로 두는게 좋다.
  // why? this.name, this.emoji 부분이 인스턴스와 밀접하게 연관 되있기 때문
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 클래스 레벨의 프로퍼티와 메서드는 클래스로 접근 가능
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// static의 사용예제
// static을 사용하면 우리가 별도로 객체를 만들지 않고도
// 비슷한 내용의 함수를 묶어서 관리 할 수 있다.
Math.pow();
Number.isFinite(1);
