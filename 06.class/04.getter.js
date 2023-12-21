// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
    // 이렇게 하면 인스턴스를 수정하면 업데이트가 안됨 ❌
    // constructor 함수는 인스턴스를 생성할 때 딱! 한번만 실행되기 때문
  }
  // fullName() {
  //   return `${this.lastName} ${this.firstName}`;
  // }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  } // 동작이기보다는 속성에 가까움. 함수 호출하는 것처럼 하지않고 속성에 접근 할 수 있어서 접근자 프로퍼티다.

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('동욱', '강');
student.firstName = '철수';
// console.log(student.fullName()); 이렇게 하기 싫은데.. 그럼 getter를 쓰자.
console.log(student.firstName); // 철수
console.log(student.fullName); // 강 철수 -> 값을 읽게 되면 get 호출
student.fullName = '김예리'; // set에 무언가를 할당한다면 ()하지않아도 set 호출

// 접근자 프로퍼티 사용하는 경우 - 무언가를 처리하는 행위는 아닌데 프로퍼티의 일부분을 조합해서 만들거나
// 또는 get,set을 할 때 특정한 일을 좀 더 해주고 싶다면 예를 들어서 특정한 숫자를 set 할 때 0 이하가 숫자가 들어오면
// 그냥 0으로 set 될 수 있도록 이런 것들을 조금 더 제어 하고 싶을 때 접근자 프로퍼티를 사용 할 수 있다.
