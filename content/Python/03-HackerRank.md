---
title: HackerRank Questions solved in Python 3
description: Easy questions from "Arays-Ds"
date: "2021-05-26"
image: "python.png"
author: "Ayush"
tags: ["python"]
---

# PURPOSE

Storing Python solutions for questions that I solve on HackerRank

## [Return reverse of Array](https://www.hackerrank.com/challenges/arrays-ds/problem)

Using list slicing to reverse array
```py heading="Reversing an Array using List Slicing"
def reverseArray(a):
    """reverse of input list

    Parameters
    ----------
    a: list

    Returns
    -------
    list
    """
    return a[::-1]

rev = reverseArray(['1', '2', '3'])
print(rev)
```
[Methods to reverse a list in Python](https://www.geeksforgeeks.org/python-reversing-list/)

## [Creating 2D Arrays](https://www.hackerrank.com/challenges/dynamic-array/problem)

In Python, there are no arrays, there's only list.
To create a 2D Array, (or 2D list), we can wrap one list inside the other. 

```py heading="Creating 2D arrays"
# using append
arr = []
arr.extend([[], []])
print(arr)
arr[0].append('this works as expected')
print(arr)

# using range
arr = [[] for i in range(10)]
print(arr)
arr[0].append('this works as expected')
print(arr)

# using multiplication
# BEWARE: This will create duplicate-interlined elements. Pointer Nightmare intensifies.
# reference: https://stackoverflow.com/a/8183201/7048915
arr = [[]]*10
print(arr)
arr[0].append('this will be added to all the elements, even though I am specifying index 0')
print(arr)
```

```py heading="Dynamic Arrays Solution"
def dynamicArray(n, queries):
    """Generate a list of answers based on input queries

    if query type is 1,
        - append the 3rd element of query into arr[index]
    if query type is 2:
        - lastAnswer = arr[idx][y % len(arr[idx])]
        - calculate and append answer to answer list

    Parameters
    ----------
    n: int
        number of sub arrays
    queries: list
        inputs of this list decides the answer

    Returns
    -------
    list
        list of answers
    """
    arr = [[] for i in range(n)]
    answers = []
    lastAnswer = 0

    for i in queries:
        query_type, x, y = i
        idx = ((x^lastAnswer)%n)
        if query_type == 1:
            arr[idx].append(y)
        elif query_type == 2:
            lastAnswer = arr[idx][y % len(arr[idx])]
            answers.append(lastAnswer)

    return answers
```
