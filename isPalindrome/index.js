const target = "abcdcba";

function isPalindrome(target) {
    var newString = ''
    for(var i = target.length - 1; i >= 0; i--) {
         newString += target[i]
    }
    console.log('new string', newString)
    if (newString === target) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

isPalindrome(target);