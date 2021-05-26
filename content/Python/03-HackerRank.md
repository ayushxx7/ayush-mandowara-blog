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
```py
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
