const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`); // 객체안에서 객체안의 데이터를 접근할때는 this로 접근
  },
};

apple.display();
