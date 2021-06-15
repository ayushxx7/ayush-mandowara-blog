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

Note: we can use '-1' as the last dimension during reshape and numpy will figure out the required dimension automatically.

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
vstack = np.hstack([arr_2, arr_3])
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
