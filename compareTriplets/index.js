a = [1, 2, 3]
b = [3, 2, 1]

function compareTriplets(a, b) {
    let sum1 = 0
    let sum2 = 0
    for(var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            sum1 += 1
        } else if (a[i] < b[i]) {
            sum2 += 1
        } else if (a[i] === b[i]) {
            continue
        }
    }
    return [sum1, sum2]
}

compareTriplets(a, b)