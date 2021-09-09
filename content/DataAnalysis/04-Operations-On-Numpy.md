---
title: Operations on Numpy Arrays
description: Basic operations that can be performed on numpy arrays
date: "2021-06-15"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "numpy"]
---

## Reshape the array to a desired size
```py heading="Using numpy to reshape array"
import numpy as np
arr_3d = np.arange(24).reshape(2, 3, 4)
print(arr_3d)

arr_auto_reshape = np.arange(24).reshape(4, 2, -1)
print(arr_auto_reshape)
print(arr_auto_reshape.shape)
```

Note: We can use '-1' as the last dimension during reshape and numpy will figure out the required dimension automatically.

## Stacking arrays horizontally and vertically
```py heading="Using numpy to stack arrays"
import numpy as np
arr_1 = np.arange(25).reshape(5, -1)
arr_2 = np.arange(15).reshape(5, -1)
arr_3 = np.arange(15).reshape(-1, 3)
print(arr_1)
print(arr_2)
print(arr_3)
hstack = np.hstack([arr_1, arr_2])
vstack = np.vstack([arr_2, arr_3])
print(hstack)
print(vstack)
```

## Mathematical Operations on arrays
```py heading="Using numpy to perform operations on each element of array"
import numpy as np

arr_1 = np.arange(10)
print(arr_1)

sin_arr = np.sin(arr_1)
print(sin_arr)

cos_arr = np.cos(arr_1)
print(cos_arr)

# Custom vectorized function
fn = np.vectorize(lambda x: x/5)
print(fn(arr_1))
```

Note: If you want to apply a customized function on arrays, make sure to vectorize the function and apply it like inbuilt functions. If you use for loops the power of numpy is lost.

## Linear Algebra - Inverse, Determinant, Eigen Values, Dot Product
```py heading="Using numpy to perform linear algebra operations"
import numpy as np

matrix_1 = np.array([[1, 2, 3], [0, 1, 4], [5, 1, 0]])
matrix_2 = np.arange(12).reshape(3, 4)

inverse = np.linalg.inv(matrix_1)
determinant = np.linalg.det(matrix_1)
eigen = np.linalg.eig(matrix_1)
dot_product = np.dot(matrix_1, matrix_2)

print('inverse:', inverse)
print('determinant:', inverse)
print('eigen:', eigen)
print('dot product:', dot_product)
```

## Swapping elements of numpy array
```py heading="Swap elements of array"
import numpy as np
m = 0
n = 2
a = np.arange(11*12).reshape(11, 12) + 1
print(a)
a[[m,n]] = a[[n,m]]
print(a)
```

## Print Matrix such that borders are filled with ones, and rest of elements are filled with zero

```py heading='Slicing and setting value of np matrix'
import numpy as np

n = 5

# Method One
a = np.ones(n*n, dtype=int).reshape(n,n)
a[1:a.shape[0]-1, 1:a.shape[1]-1] = 0
print(a)

# Method Two
border_array = np.ones((n, n), dtype = int)
border_array[1:-1, 1:-1] = 0
print(border_array)
```

## Transpose of Matrix

If we have a set of data points $x_1, x_2, x_3$ upto $x_n$, stored in array, we can create a design matrix using vstack and transpose.
```py heading="Transpose Matrix for Simple Linear Regression"
import numpy as np

X = [5, 6, 7]
print(np.vstack((np.ones(len(X)), X)).T)
```
