// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  console.log('같이 놀아요');
};

function Cat(name, emoji) {
  Animal.call(this, name, emoji);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.hunt = () => {
  console.log('사냥하자...🐁...');
};

const dog1 = new Dog('백구', '🐶', '동욱');
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
