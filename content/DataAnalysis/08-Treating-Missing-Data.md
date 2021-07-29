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
fraction = df.isnull().sum()/len(df.index)
print(round(fraction*100, 2))
num_rows_completely_empty = df.isnull().all(axis=1).sum()
print(num_rows_completely_empty)

# rows missing more than 5 values
num_rows = len(df[df.isnull().sum(axis=1) > 5].index)
print(num_rows)

# dropping these rows
df = df[df.isnull().sum(axis=1) <= 5]
print(df)
num_rows = len(df[df.isnull().sum(axis=1) > 5].index)
print(num_rows)
print(df.isnull().sum())

# fill the missing values using mean
df.Product_Base_Margin.fillna(df.Product_Base_Margin.mean(), inplace=True)

# Since the total number of rows missing values is quite low, we can just drop them. Another approach could be to fill with mean but this seems simpler and cleaner.
df3 = df.dropna()
print(df3.isnull().sum())
```
Note: If there were any rows missing all values, we would simply drop them.

## Treating missing Values
There are broadly two ways to treat missing values
1. Delete the values
2. Impute the values
    - Use statistics such as mean, median, mode to fill values
    - Use predictive models (k-NN, SVM) to fill missing values


## Conclusion
1. One can generate data from various sources such as text files, web scraping, APIs, databases, PDF files etc. Using requests, beautifulsoup, selenium, PyPDF2 one can extract relevant data, and convert it to desired format.
1. In any large enough dataset, there are bound to be missing values
1. The missing values found in a dataset can be treated in two ways,
    - delete the row/column which has missing values. If some column has too many missing values we can simply drop that column to avoid bias.
    - impute missing values statistics (mean, mode etc.) can be employed to 
