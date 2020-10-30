---
title: Five Powerful and Easy to Learn Numpy Operations
description: Beginner's gold mine to understand the power of Numpy
date: "2020-10-24"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "numpy"]
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
  ```py heading="Example 1: Array filled with zeros"
  import numpy as np
  arr1 = np.zeros(5)
  print(arr1)
  ```

  `Note`: Creating an array filled with zeros is as simple as calling the np.zeros function. Here, we are simply creating an array using that method, without giving an data type, due to which the default data type, i.e. float has been used to store the numbers in the array.

- Example 2
  ```py heading="Example 2: Multidimensional Array filled with (int) zeros"
  import numpy as np
  arr2 = np.zeros((3,4), dtype=int)
  print(arr2)
  ```

  `Note`: Creating a zero file array, with given dimensions (3 x 4), and providing data type as int so numbers are stored as 0 instead of 0..

- Example 3 - breaking
  ```py heading="Example 3: Breaking"
  import numpy as np
  arr3 = np.zeros(3,4)
  ```

  `Note`: It is breaking because the comma separted values are being interpreted as parameters. To fix, add the shape inside (), as shown in example #2.

### When to use this function?
This function should be called when,
- you need a zero filled array
- you need to initialize an array whose values will be filled later on


## Function 2 - np.asmatrix
#### Interprets the input numbers and generated a corresponding matrix

  ```py heading="Example 1: Interpet input to generate matrix"
  import numpy as np
  mat1 = np.asmatrix([[1,2],[3,4],[5,6]])
  print(mat1)
  print(type(mat1))

  for key in mat1:
      print(key)
      print(type(key))

  ```

  `Note`: The function asmatrix simply takes the input values and converts them to equivalent matrices. The type of the output is np.matrix.

  ```py heading="Example 2: Uneven number of elements"
  import numpy as np
  mat2 = np.asmatrix([[1,2,3],[4,5,6],[7,8,9,10]])
  print(mat2)
  ```

  `Note`: When using uneven number of elements in the columns, the output will be a 1-d matrix, with each set of numbers interpreted as a list

  ```py heading="Example 3: Breaking"
  import numpy as np
  mat3 = np.asmatrix(1,2)
  ```

  `Note`: Again, when setting the values, it is important that you pass them as a single paramter either as a list or a tuple, otherwise the function will break.

### When to use this function?
Matrices are a fundamental unit of data science. They are an easy to use and visualize. This function should be used whenever you need to convert a set of values into a np.matrix object. Further Reading: Try the np.diag, np.tri, np.tril and np.triu functions.



## Function 3 - np.fromfunction
#### To generate np arrays where the values are generated via some function, np.fromfunction can be used

  ```py heading="Example 1: Generate array with numbers generated via function"
  import numpy as np
  f1 = np.fromfunction(lambda i,j: i==j, (3,3))
  print(f1)
  ```

  `Note`: i,j represent the coordinates in the matrix, and the values are generated based on whether the value of i matches j or not, i.e. the diagonal values will be returned as True while rest of the values will be returned as False

  ```py heading="Example 2: Generate Numpy array from a function with integer values"
  import numpy as np
  f2 = np.fromfunction(lambda i,j: i*(j+1), (3,3), dtype=int)
  print(f2)
  ```

  `Note`: Using the lamba construct, we generate values of the form i*(j+1), and force the data type to be int

  ```py heading="Example 3: Breaking"
  import numpy as np
  f2 = np.fromfunction(lambda i,j: i/j, (3,3), dtype=int)
  print(f2)
  ```

  `Note`: Even though the code executes successful, this would still be considered breaking logic. The reason is simple, when performing the operation, when dividing by 0, an exception will be thrown (as you cannot divide something by 0). Numpy handles the exception and puts in the 'nan' and 'inf' values in their place. nan: Not a Number, inf: Infinity

### When to use this function?
The function should be used whenever there is a requirement of generating values in the array based on some function rather than some predefined values



## Function 4 - np.mean
#### This calculates the arithmetic mean over the array. It is the sum of the elements along the axis divided by the number of elements.

  ```py heading="Example 1: Calculating Mean of matrix input"
  import numpy as np
  mat1 = np.asmatrix([[1,2],[3,4],[5,6]])
  print(mat1)
  mean1 = np.mean(mat1)
  print(mean1)
  ```

  `Note`: Calculates sum of all value in the matrix (21) and divides them by the total number of values (6). 21/6 = 3.5 When axis is not specfied, mean is calculated over the flattened array.

  ```py heading="Example 2: Calculate Mean of a particular axis of a matrix"
  import numpy as np
  mat1 = np.asmatrix([[1,2],[3,4],[5,6]])
  mean2 = np.mean(mat1, axis=0)
  print(mean2)
  ```

  `Note`: Here we calculate mean over axis 0. The mean is calculated over each column individually. i.e. in our example, over (1,3,5) & (2,4,6).

  ```py heading="Example 3: Breaking"
  import numpy as np
  mat1 = np.asmatrix([[1,2],[3,4],[5,6]])
  mean3 = np.mean(mat1, axis=2)
  print(mean3)
  ```

  `Note`: It is breaking because the axis value is more than the number of axes present in the input array. To fix, use the correct axis number.
          Note that the axises are indexed starting from 0

### When to use this function?
This function should be used whenever mean is required to be calculated over a given input array. Further Reading: Try calculating average, standard deviation and variance.


## Function 5 - np.sin
![Sine Table](./sine_table.png)
### np.sin is a function that simply transforms input values to corresponding sine values

  ```py heading='Example 1: Calculte the Sine value of π/2'
  import numpy as np
  print(np.sin(np.pi/2))
  ```

  `Note`: The sine function takes input in the form of Radians i.e. π*(somenumber) to generate angles. Hence, np.pi is used to calculate sin(90 degree) = 1.
          Note that π = 180 degrees.

  ```py heading='Example 2: Sine Curve from -π to π' artifact='output.png'
  import numpy as np
  import matplotlib.pylab as plt
  x = np.linspace(-np.pi, np.pi, 201)
  plt.plot(x, np.sin(x))
  plt.xlabel('Angle [rad]')
  plt.ylabel('sin(x)')
  plt.axis('tight')
  plt.show()
  plt.savefig('output.png')
  ```

  `Note`:
  - To plot a graph we use the standard matplotlib library
  - `np.linspace` returns evenly spaced numbers over the specified interval. Here we are getting 201 numbers within the range of -pi to +pi (-180 to 180 degrees)
  - We calculate sines over the specified range and plot them in the graph.

  ```py heading='Example 3: Breaking'
  import numpy as np
  np.sin('180')
  ```

  `Note`:
  - A mandatory input is requrired. Plus, the input should be a number (angle) that would be converted to the sine form.
  - Similar to sine functions there are other trigonometry functions that can also be invoked using Numpy.
  - One interesting article that I found was a worth a read, [Neural Networks with Sine Basis Function](https://towardsdatascience.com/neural-networks-with-sine-basis-function-c5c13fd63513)

### When to use this function?
This function should be called whenever you want to plot a sine graph
