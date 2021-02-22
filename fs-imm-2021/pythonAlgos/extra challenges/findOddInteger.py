# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times. use the below array

seq = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

def find_it(seq):
    odd_number = None
    for i in range(0, len(seq)):
        sum = 0
        for j in range(0, len(seq)):
            if seq[i] == seq[j]:
                sum += 1
        if (sum % 2 != 0):
            odd_number = seq[i]
            return odd_number

find_it(seq)