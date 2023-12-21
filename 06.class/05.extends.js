// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

/**
 * Tiger와 Dog는 공통점(Animal)이 있다. Animal 은 먹고,자고,컬러가 있다.
 * Tiger와 Dog는 Animal의 속성과 메서드를 상속 받을 수 있다.
 */
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {} //  Tiger 클래스는 Animal 클래스에게 속성과 메서드를 상속받음
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    // super는 부모 클래스를 가르킴
    super(color); // 부모 클래스의 생성자에 color(필요한 정보)를 전달
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding (자식 클래스에서 부모 클래스에 있는 함수를 덮어씌우는 것)
  eat() {
    // 부모의 기능을 그대로 유지하면서 추가적인걸 하고 싶다면
    super.eat(); // 부모 클래스에 있는 eat 호출
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이', '동욱');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
