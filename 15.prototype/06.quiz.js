// 클래스를 베이스로한 객체지향 프로그래밍
class Animal {
  name;
  emoji;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  printName = function () {
    console.log(`${this.name} ${this.emoji}`);
  };
}

class Dog extends Animal {
  owner;

  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }

  play = () => {
    console.log('같이 놀아요');
  };
}

class Cat extends Animal {
  constructor(name, emoji) {
    super(name, emoji);
  }

  hunt = () => {
    console.log('사냥하자...🐁...');
  };
}

const dog1 = new Dog('백구', '🐶', '동욱');
console.log(dog1);
dog1.printName();
dog1.play();

const cat1 = new Cat('루비', '🐈');
cat1.printName();
cat1.hunt();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Cat);

console.log(cat1 instanceof Dog);
console.log(cat1 instanceof Animal);
console.log(cat1 instanceof Cat);
