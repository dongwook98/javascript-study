const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y }와 같음
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
let result = makeObj('동욱', 26);
console.log(result);
