#  Create a function that takes a number as an argument, increments the number by +1 and returns the result.

def addition(num):
    return num + 1

#  You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

def points(x, y):
    two_pointer = 2 * x
    three_pointer = 3 * y
    return two_pointer + three_pointer


#  You have an array of random intergers. Create a function that finds the sum of the three largest numbers inside that array.

def find_sum(array):
    solution_array = array.sort(reverse = True)
    num1 = solution_array[0]
    num2 = solution_array[1]
    num3 = solution_array[3]
    result = num1 + num2 + num3
    return result

# Compare triplets

def compare_triplets(array1, array2):
    sum1 = None
    sum2 = None
    for i in range(0, len(array1)):
        if array1[i] > array2[i]:
            sum1 += 1
        elif array1[i] < array2[i]:
            sum2 += 1
        elif array1[i] == array2[i]:
            pass
    
    return [sum1, sum2]
