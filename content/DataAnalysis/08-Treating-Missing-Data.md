---
title: Treating Missing values in DataFrame
description: how to clean up a dataset, preprocessing
date: "2021-06-16"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

## Identify missing values
```py heading="Identify missing values in DataFrame using df.isnull"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/Hfu_PsEuD1Z_yJHmGaxWTxvkz7W_b0')
# how many values are missing in each column
print(df.isnull().sum())
# percentage wise missing values per column
print(df.isnull().sum()/len(df.index)*100)
num_rows_completely_empty = df.isnull().all(axis=1).sum()
print(num_rows_completely_empty)
```
Note: If there were any rows missing all values, we would simply drop them.

## Treating missing Values
There are broadly two ways to treat missing values
1. Delete the values
2. Impute the values
    - Use statistics such as mean, median, mode to fill values
    - Use predictive models (k-NN, SVM) to fill missing values
