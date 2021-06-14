---
title: Numpy Basics
description: Beginner's gold mine to understand the power of Numpy
date: "2021-06-13"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "numpy"]
---

# Why Numpy over Lists?
1. Speed of computation is faster
1. Designed for data analysis
1. Vector operations can be performed
1. Concise and easy to read/write


# Learn By Examples

## Create a 3*3 array using predefined lists

```py heading='Create 3x3 Array'
import numpy as np

list_1 = [1,2,3] 
list_2 = [4,5,6] 
list_3 = [7,8,9]

out = np.array([list_1, list_2, list_3])

print(out)
```

## Element Wise Multiplication

```py heading="Element wise multiplication"
import numpy as np

list_1 = [1,2,3] 
list_2 = [4,5,6] 

arr1 = np.array(list_1)
arr2 = np.array(list_2)

mul = arr1 * arr2
print(mul)

list_mul = list(mul)
print(list_mul)
```

## Create array of given dimension filled with given integer value

```py heading="Creating numpy array filled with given data"
import numpy as np

rows = 5
columns = 3
value = 15

# using np.full

arr = np.full((rows, columns), value)
print(arr)

# using np.tile
arr = np.tile(value, (rows, columns))
print(arr)

# using np.ones + multiplicationm
# note that here we need to specify dtype=int as float is default for this function
arr = np.ones((rows, columns), dtype=int)*value
print(arr)
```

## Create array filled with multiples of given number

```py heading="Creating a numpy array filled with multiples of 5"
import numpy as np

start = 5
stop = 51
step = 5

arr = np.arange(start, stop, step)
print(arr)
```

## Create a checkerboard matrix of size n*n

```py heading="Creating a Checkerboard matrix using numpy"
import numpy as np

board_size = 5
out = np.tile([[0, 1], [1, 0]], (board_size//2, board_size//2))
print(out)
```

#### Explanation
- `np.tile` can be used to repeat an array any number of times across any number of dimensions 
- Checkerboard's smallest unit is 
  ```
  [0, 1], 
  [1, 0]
  ```
- Since smallest unit is already 2x2, whatever is this required board_size, we will divide it by 2

#### Reference
- https://stackoverflow.com/a/56887785/7048915

## Reshape the array to a desired size
```py heading="Using numpy to reshape array"
import numpy as np
arr_3d = np.arange(24).reshape(2, 3, 4)
print(arr_3d)
```

## Print the shape and dimension of an array
```py heading="Get the shape and dimension of a numpy array"
import numpy as np
list_1 = [10,11,12,13]
list_2 = [15,12,13,14]

arr = np.array([list_1, list_2])

print(arr)
print('shape:', np.shape(arr))
print('dimension:', np.ndim(arr))
print('data type:', arr.dtype)
print('length of one array element (bytes):', arr.itemsize)
```

## Extract all elements of 2nd column in 2D array
```py heading="Use list slicing to get elements of the second column of a 2d array"
arr = np.arange(24).reshape(6, 4)
print(arr)
print(arr[:, 1])
```

## Extract border row, column of numpy array
```py heading="First, Last Row and Column of Numpy Array"
import numpy as np
array_2d = np.arange(24).reshape(6, 4)
col_first = array_2d[:, 0]
row_first = array_2d[0, :]
col_last = array_2d[:, array_2d.shape[1]-1]
row_last = array_2d[array_2d.shape[0]-1, :]

print(col_first)
print(row_first)
print(col_last)
print(row_last)
```

## Conclusion
1. Numpy arrays are significantly faster than lists when it comes to mathematical operations
2. Numpy operations are concise, and easy to read & write.
3. Numpy arrays are built for vector mathematics so that element wise calculations can be easily carried out. 
4. While in lists, one would have to write a for-loop or list comprehension for basic things like squaring all numbers in the list, the equivalent on a numpy array will simply be "array_name * 2". 
