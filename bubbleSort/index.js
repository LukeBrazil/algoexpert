const array = [8, 5, 2, 9, 5, 6, 3];

function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i += 1) {
        for (var j = 0; j < array.length - 1; j += 1) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    console.log(array)
    return array
}

bubbleSort(array);

