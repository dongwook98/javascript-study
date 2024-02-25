// Q1. make a string out of an array
// 1. 배열 순회하면서 요소를 꺼내서 string에 넣기
{
  const fruits = ['apple', 'banana', 'orange'];
  let result = '';
  fruits.forEach((fruit, index) => {
    if (index === fruits.length - 1) {
      result = result + fruit;
      return;
    }
    result = result + fruit + ', ';
  });

  console.log(`Q1 result: ${result}`);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(', ');
  console.log('Q2 result: ', result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.sort((a, b) => b - a);
  console.log(`Q3 result: ${array}`);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2);
  console.log(`Q4 result: ${newArray}`);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  let result;
  students.forEach((student) => {
    if (student.score >= 90) {
      result = student;
    }
  });
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = [];
  students.forEach((student) => {
    if (student.enrolled) {
      enrolledStudents.push(student);
    }
  });
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // 1. for..of 사용
  const scoreArray = [];
  for (let value of students) {
    scoreArray.push(value.score);
  }
  console.log('for..of: ', scoreArray);

  // 2. map
  const scoreArray2 = students.map((student) => student.score);
  console.log(scoreArray2);
}

// Q8. check if there is a student with the score lower than 50
{
  let isScoreless50;
  students.forEach((student) => {
    if (student.score < 50) {
      isScoreless50 = true;
      console.log('실행');
    }
  });
  console.log(isScoreless50);
}

// Q9. compute students' average score
{
  let total = 0;
  students.forEach((student) => {
    total = total + parseInt(student.score);
  });
  const average = total / students.length;
  console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // 1.
  let stringScore = '';
  students.forEach((student, index) => {
    if (index === students.length - 1) {
      stringScore = `${stringScore + student.score}`;
      return;
    }
    stringScore = `${stringScore + student.score}, `;
  });
  console.log(stringScore);

  // 2.
  const scores = students.map((student) => student.score);
  const result2 = scores.join(', ');
  console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scores = students.map((student) => student.score);
  scores.sort();
  const result2 = scores.join(', ');
  console.log(result2);
}
