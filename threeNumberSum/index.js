const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

// [-8, -6, 1, 2, 3, 5, 6, 12]

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    const solutionArray = [];
    for (var i = 0; i < array.length - 2; i++) {
        let leftCounter = i + 1;
        let rightCounter = array.length - 1;
        while (leftCounter < rightCounter) {
            let currentSum = array[i] + array[leftCounter] + array[rightCounter];
            if (currentSum === targetSum) {
                solutionArray.push([array[i], array[leftCounter], array[rightCounter]])
                leftCounter++
                rightCounter--
            } else if (currentSum < targetSum) {
                leftCounter++
            } else if (currentSum > targetSum) {
                rightCounter--
            } else {
                return []
            }
        }
    }
    return solutionArray
}

threeNumberSum(array, targetSum);