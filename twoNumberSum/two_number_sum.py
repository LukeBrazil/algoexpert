array = [25, 5, -4, 25, 11, 1, -1, 6]
targetSum = 50

def twoNumberSum(array, targetSum):
    for i in range(len(array) - 1):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == targetSum:
                print([firstNum, secondNum])
    return []

twoNumberSum(array, targetSum)


