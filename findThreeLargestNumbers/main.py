array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];



def findThreeLargest(array):
    array.sort(reverse = True)
    print([array[0], array[1], array[2]])

findThreeLargest(array)