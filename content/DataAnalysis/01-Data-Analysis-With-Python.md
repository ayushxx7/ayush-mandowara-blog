---
title: Five Powerful and Easy to Learn Numpy Operations
description: Beginner's gold mine to understand the power of Numpy
date: "2020-10-24"
image: "flask.png"
author: "Ayush"
tags: ["python", "data analysis", "numpy"]
---

### Introduction
To put it simply, if you have ever used C/C++, Numpy is the equivalent of Arrays in Python. Along with all the basic operations such as creating and manipulating multidimensional matrices, Numpy provides us with a host of other useful operations that we can run right out of the box. I will list 5 of them down with a simple explanation.

### Functions explored
- `np.zeros`: create an array initialized with zeroes
  - one could use np.empty to initialize an empty numpy array, but there are times when you need the array to be filled with something, and zeroes are one of the most common ways to represent that there is no data present at the moment.

- `np.asmatrix`: Interprets the input numbers and generated a corresponding matrix
  - Matrices are at the core of any data science operation, they are an easy way to understand various data points, especially when working with images. Images can be interpreted as a series of RGB pixels, and matrices provide us with an easy to store this information.
  - There are some prebuilt functions in Numpy for matrices, such as for generating a diag matrix, lower triangle matrix.

- `np.fromfunction`: Generate values dynamically and fill the arrya.
  - Runs an operation over each (i,j) cell/coordinate to generate a value that will be placed in (i,j) coordinate

- `np.mean`: Calculate mean of the values present in the array
  - Mean of all values in the array can be calculated
  - Mean of values on each axis can be calculated

- `np.sin`: Calculate the sine values of a given angle
  - Numpy includes a host of Mathematical functions based on well founded concepts such as Trigonometry, Logarithms, Linear Algebra etc.
  - Trigonometry is very important when working with problems relating to phyics such as oscilation and signal processing. However, certain ML alogrithms also use trigonometry as a base. It is also used for advanced feature extraction where coordinates are transformed using Fourier Transform.

## Function 1 - np.zeros
#### Used to create multidimensional array of 0's

- Example 1
```
arr1 = np.zeros(5)
print(arr1)
```
- Output
```
array([0., 0., 0., 0., 0.])
```
Note: Creating an array filled with zeros is as simple as calling the np.zeros function. Here, we are simply creating an array using that method, without giving an data type, due to which the default data type, i.e. float has been used to store the numbers in the array.

- Example 2
```
arr2 = np.zeros((3,4), dtype=int)
arr2
```
  - Output
  ```
  array([[0, 0, 0, 0],
         [0, 0, 0, 0],
         [0, 0, 0, 0]])
  ```
Note: Creating a zero file array, with given dimensions (3 x 4), and providing data type as int so numbers are stored as 0 instead of 0..

- Example 3 - breaking
```
arr3 = np.zeros(3,4)
```
  - Output
    ```
    ---------------------------------------------------------------------------
    TypeError                                 Traceback (most recent call last)
    <ipython-input-27-11fc22649e4d> in <module>()
          1 #Example 3 - breaking
    ----> 2 arr3 = np.zeros(3,4)

    TypeError: data type not understood
    ```
Note: It is breaking because the comma separted values are being interpreted as parameters. To fix, add the shape inside (), as shown in example #2.

### When to use this function?
This function should be called when,
- you need a zero filled array
- you need to initialize an array whose values will be filled later on
