const array = [3, -1, -4, 54, 11, 9]
const targetSum = 10;

// function twoNumberSum(array, targetSum) {
//     for (var i = 0; i < array.length - 1; i++) {
//         const firstNum = array[i]
//         for (var j = i + 1; j < array.length; j++) {
//             const secondNum = array[j];
//             if (firstNum + secondNum === targetSum) {
//                 console.log([firstNum, secondNum])
//                 return [firstNum, secondNum];
//             }
//         }
//     }
// }

// function twoNumberSum(array, targetSum) {
//     const nums = {}
//     for (const num of array) {
//         const potentialMatch = targetSum - num;
//         if (potentialMatch in nums) {
//             return [potentialMatch, num]
//         } else {
//             nums[num] = true
//         }
//     }
//     return [];
// }

// function twoNumberSum(array, targetSum) {
//     array.sort((a, b) => a - b)
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//         let currentSum = array[left] + array[right]
//         if (currentSum === targetSum) {
//             return [array[left], array[right]]
//         } else if (currentSum < targetSum) {
//             left++
//         } else if (currentSum > targetSum) {
//             right--
//         }
//     }
//     return [];
// }

function twoNumberSum(array, targetSum) {
    for(var i = 0; i < array.length - 1; i++) {
        let firstNum = array[i]
        for (var j = i + 1; j < array.length; j++) {
            let secondNum = array[j]
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum]
            }
        }
    }
}

twoNumberSum(array, targetSum);