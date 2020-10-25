---
title: Five Powerful and Easy to Learn Numpy Operations
description: Beginner's gold mine to understand the power of Numpy
date: "2020-10-24"
image: "data-analysis.png"
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


## Function 2 - np.asmatrix
#### Interprets the input numbers and generated a corresponding matrix

- Example 1
```
mat1 = np.asmatrix([[1,2],[3,4],[5,6]])
print(mat1)
type(mat1)
for key in mat1:
  print(key)
  print(type(key))
```
  - Output
    ```
    [[1 2]
     [3 4]
     [5 6]]
    [[1 2]]
    <class 'numpy.matrix'>
    [[3 4]]
    <class 'numpy.matrix'>
    [[5 6]]
    <class 'numpy.matrix'>
    ```

  Note: The function asmatrix simply takes the input values and converts them to equivalent matrices. The type of the output is np.matrix.

- Example 2
```
mat2 = np.asmatrix([[1,2,3],[4,5,6],[7,8,9,10]])
print(mat2)
```
  - Output
    ```
    [[list([1, 2, 3]) list([4, 5, 6]) list([7, 8, 9, 10])]]
    ```

  Note: When using uneven number of elements in the columns, the output will be a 1-d matrix, with each set of numbers interpreted as a list

- Example 3 - breaking
```
mat3 = np.asmatrix(1,2)
```
  - Output
      ```

      ---------------------------------------------------------------------------
      TypeError                                 Traceback (most recent call last)
      <ipython-input-62-ade2d1f66754> in <module>()
            1 # Example 3 - breaking
      ----> 2 mat3 = np.asmatrix(1,2)

      /usr/local/lib/python3.6/dist-packages/numpy/matrixlib/defmatrix.py in asmatrix(data, dtype)
           69
           70     """
      ---> 71     return matrix(data, dtype=dtype, copy=False)
           72
           73

      /usr/local/lib/python3.6/dist-packages/numpy/matrixlib/defmatrix.py in __new__(subtype, data, dtype, copy)
          145
          146         # now convert data to an array
      --> 147         arr = N.array(data, dtype=dtype, copy=copy)
          148         ndim = arr.ndim
          149         shape = arr.shape

      TypeError: data type not understood

      ```

  Note: Again, when setting the values, it is important that you pass them as a single paramter either as a list or a tuple, otherwise the function will break.

### When to use this function?
Matrices are a fundamental unit of data science. They are an easy to use and visualize. This function should be used whenever you need to convert a set of values into a np.matrix object. Further Reading: Try the np.diag, np.tri, np.tril and np.triu functions.



## Function 3 - np.fromfunction
#### To generate np arrays where the values are generated via some function, np.fromfunction can be used

- Example 1
```
f1 = np.fromfunction(lambda i,j: i==j, (3,3))
f1
```
  - Output
      ```
      array([[ True, False, False],
             [False,  True, False],
             [False, False,  True]])
      ```

  Note: i,j represent the coordinates in the matrix, and the values are generated based on whether the value of i matches j or not, i.e. the diagonal values will be returned as True while rest of the values will be returned as False

- Example 2
```
f2 = np.fromfunction(lambda i,j: i*(j+1), (3,3), dtype=int)
f2
```
  - Output
    ```
    array([[0, 0, 0],
           [1, 2, 3],
           [2, 4, 6]])
    ```

  Note: Using the lamba construct, we generate values of the form i*(j+1), and force the data type to be int

- Example 3 - breaking
```
f2 = np.fromfunction(lambda i,j: i/j, (3,3), dtype=int)
f2
```
  - Output
      ```

      /usr/local/lib/python3.6/dist-packages/ipykernel_launcher.py:2: RuntimeWarning: divide by zero encountered in true_divide

      /usr/local/lib/python3.6/dist-packages/ipykernel_launcher.py:2: RuntimeWarning: invalid value encountered in true_divide


    array([[nan, 0. , 0. ],
           [inf, 1. , 0.5],
           [inf, 2. , 1. ]])
      ```

  Note: Even though the code executes successful, this would still be considered breaking logic. The reason is simple, when performing the operation, when dividing by 0, an exception will be thrown (as you cannot divide something by 0). Numpy handles the exception and puts in the 'nan' and 'inf' values in their place. nan: Not a Number, inf: Infinity

### When to use this function?
The function should be used whenever there is a requirement of generating values in the array based on some function rather than some predefined values
