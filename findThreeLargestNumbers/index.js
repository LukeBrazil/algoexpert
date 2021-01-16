const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function findThreeLargestNumbers(array) {
  array.sort((a, b) => b - a);
  const solution = [array[0], array[1], array[2]];
  solution.sort((a, b) => a - b)
  return solution;
}

findThreeLargestNumbers(array);
