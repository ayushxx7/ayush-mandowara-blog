---
title: Pandas Basics
description: Series and DataFrames
date: "2021-06-15"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

## What is Pandas
1. Pandas is a library specifically aimed at simplifying the process of Data Analysis.
1. It provides a number of functions that come in handy whenever working with a data set.
1. There are two types of data structures in Pandas
  - Series: similar to a 1d numpy array except it is indexed and can store values other than numbers
  - DataFrame: The Pandas way of representing a table. Consists of Series (columns) stored as objects (rows)

## Apply lambda functions to Pandas Series
```py heading="Using Pandas apply method on Series object"
import pandas as pd

series_1 = pd.Series([1, 2, 3, 4, 5])
series_2 = series_1.apply(lambda x: x**2)

print(series_1)
print(series_2)
```
