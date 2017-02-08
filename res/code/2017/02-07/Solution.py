"""
Binghamton ACM February 7th, 2017
A python solution to the problem posed here:
    https://www.hackerrank.com/contests/buacm/challenges/maximum-in-a-unimodal-array/
"""

# Input parsing
length = int(input())
arr = [int(x) for x in input().split(' ')]

# Binary search function to find max
# Takes in the array, start bound, and end bound
def binSearch(arr, start, end):
    if(end - start <= 1): 
        # Base case
        return arr[end]
    # Calculate midpoint index
    mid = (end + start) // 2

    if(arr[mid] <= arr[mid + 1]):
        # We are in an increasing part of the array
        return binSearch(arr, mid, end)

    # We are in a decreasing part of the array
    return binSearch(arr, start, mid)

#Run binSearch on the entire array
print(binSearch(arr, 0, length - 1))
