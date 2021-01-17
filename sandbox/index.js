const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function find3Largest(array) {
  array.sort((a, b) => b - a)
  const solutionArray = []
  for (var i = 0; i < 3; i++) {
    solutionArray.push(array[i])
  }
  return solutionArray
}

find3Largest(array)