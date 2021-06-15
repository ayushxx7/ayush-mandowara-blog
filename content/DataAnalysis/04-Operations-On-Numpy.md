---
title: Operations on Numpy Arrays
description: Basic operations that can be performed on numpy arrays
date: "2021-06-14"
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
