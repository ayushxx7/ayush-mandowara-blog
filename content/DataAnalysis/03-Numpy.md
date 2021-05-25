---
title: Numpy Basics
description: Beginner's gold mine to understand the power of Numpy
date: "2021-06-13"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "numpy"]
---

1. Create a 3*3 array using predefined lists

```py heading='Create 3x3 Array'
import numpy as np

list_1 = [1,2,3] 
list_2 = [4,5,6] 
list_3 = [7,8,9]

out = np.array([list_1, list_2, list_3])

print(out)
```
