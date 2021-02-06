const array = [141, 1, 17, -7, -17, 1000, 18, 541, 8, 7, 7];

function threeLargest(array) {
  const solutionArray = [];
  array.sort((a, b) => b - a)
  for(var i = 0; i < 3; i++) {
    solutionArray.push(array[i])
  }
  solutionArray.sort((a, b) => a - b)
  console.log(solutionArray)
}

threeLargest(array);