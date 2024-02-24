/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - 노드: 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout()
// setTimeout()

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function func() {
  console.log(this);
}
func();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('루비');
const cat2 = new Cat('샤넬');
cat1.printName();
cat2.printName();
