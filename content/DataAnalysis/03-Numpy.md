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
