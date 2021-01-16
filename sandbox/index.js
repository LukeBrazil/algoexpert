// const array = [3, 5, -4, 8, 11, 1, -1, 20];
// const targetSum = 25;

// const twoNumberSum = (array, targetSum) => {
//     for (var i = 0; i < array.length - 1; i++) {
//         var firstNum = array[i];
//         for (var j = i + 1; j < array.length; j++) {
//             var secondNum = array[j];
//             if (firstNum + secondNum === targetSum) {
//                 console.log('target >>', [firstNum, secondNum])
//             }
//         }
//     }
// }

// twoNumberSum(array, targetSum);

const array = [3, 5, -4, 8, 11, 1, -1, 20];
const targetSum = 12;

const twoNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b);
  var left = 0;
  var right = array.length - 1;
  while (left < right) {
    var firstNum = array[left];
    var secondNum = array[right];
    if (firstNum + secondNum === targetSum) {
      console.log("target hit >>>", [firstNum, secondNum]);
      return [firstNum, secondNum]
    } else if (firstNum + secondNum < targetSum) {
      left++;
    } else if (firstNum + secondNum > targetSum) {
        right --
    } else {
        return []
    }
  }
};

twoNumberSum(array, targetSum);
