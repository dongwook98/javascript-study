// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 비슷한 객체를 만들때 특정한 템플릿에 맞게 쉽게 객체를 만들 수 있는 생성자 함수
// 여기서의 this는 인스턴스를 가르킴
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략가능 (생성자 함수로 만들면 자동으로 return this)
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
