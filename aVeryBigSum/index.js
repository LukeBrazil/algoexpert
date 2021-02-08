function aVeryBigSum(ar) {
    let sum = 0
    for (var i in ar) {
        sum += ar[i]
    }
    return sum
}