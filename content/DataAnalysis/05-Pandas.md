---
title: Pandas Basics
description: Series and DataFrames
date: "2021-06-16"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

# Table of Contents
<!-- vim-markdown-toc Marked -->

* [What is Pandas](#what-is-pandas)
* [Apply lambda functions to Pandas Series](#apply-lambda-functions-to-pandas-series)
* [Converting CSV to DataFrame and getting metadata information](#converting-csv-to-dataframe-and-getting-metadata-information)
* [Create a Series with custom indexing using Pandas](#create-a-series-with-custom-indexing-using-pandas)
* [Custom Index for Pandas DataFrame](#custom-index-for-pandas-dataframe)
* [Sorting DataFrame](#sorting-dataframe)
* [Selecting Even Rows of Pandas DataFrame](#selecting-even-rows-of-pandas-dataframe)
* [Accessing parts of the dataframes](#accessing-parts-of-the-dataframes)
        * [Difference between iloc & loc](#difference-between-iloc-&-loc)
* [Selecting DataFrame based on conditions applied over the columns](#selecting-dataframe-based-on-conditions-applied-over-the-columns)

<!-- vim-markdown-toc -->

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

## Converting CSV to DataFrame and getting metadata information

```py heading="Creating and Describing dataframe from CSV using Pandas"
import pandas as pd

df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
print(df.describe()) # gives mean, standard deviation, max, min of numeric values
print(df.columns) # lists all column names of dataframe
print(df.shape) # lists rows x columns
```

Note: Use `df.describe()` to get general information mean, std, max, min values of a dataframe

## Create a Series with custom indexing using Pandas
```py heading="pd.Series using custom indexing"
import numpy as np
import pandas as pd

n = 10
series = pd.Series(np.arange(1, n+1)**2, index=range(1, n+1))
print(series)
```

## Custom Index for Pandas DataFrame
```py heading="Change index of Pandas DataFrame"
import pandas as pd

df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
print(df)
df2 = df.set_index('X')
print(df2)
```
Note: If you want to overwrite the original dataframe:  
```
df.set_index('X', inplace=True)
```

## Sorting DataFrame 
```py heading="Sorting Pandas DataFrame based on Month and Day"
import pandas as pd

df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
df_2 = df.sort_values(by=['month', 'day'])
print(df_2.head(20))
```
Note: If you want to sort in descending order:  
```
df_2 = df.sort_values(by=['month', 'day'], ascending=False)
```

## Selecting Even Rows of Pandas DataFrame
```py heading='Selecting Even Rows of pd.DataFrame excluding the 0th row'
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vbdcsohcytuslkklvq851k2b8jockf')
df_2 = df[2::2]
print(df_2.head(20))
```

## Accessing parts of the dataframes
```py heading="Access DataFrame via Positions (Index) using df.iloc"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')

# print the columns 3, 4, 5 of dataframe
df_2 = df.iloc[:, [3, 4, 5]]
print(df_2.head(20))

# print value at 3rd row, 4th column
print(df.iloc[3:4])

# print row range + column range based selection
print(df.iloc[2:5, 3:6])
```
Note: We can use `df.iloc[x, y]` to get indexed based selection on dataframe. `x` represents rows & `y` represents columns. Standard indexing and slicing techniques apply.

```py heading="Label based indexing on Pandas DataFrame using df.loc"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')

# print the 2nd to 20th rows in dataframe via label
df_2 = df.loc[2:20]
print(df_2)
```
Note: `df.loc` is similar to df.iloc except that it works on labels instead of indexes

#### Difference between iloc & loc

| iloc                                                                            | loc                                                                         |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Position-based indexing.                                                        | Label-based indexing.                                                       |
| __Upper bounds__ for row and columns are __not included__ if we specify by some number. | __Upper bounds__ for row and columns are __included__ if we specify by some number. |

## Selecting DataFrame based on conditions applied over the columns
```py heading="Selecting specific rows of dataframe by applying boolean operations on the columns"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
df_2 = df.loc[(df.area > 0) & (df.wind > 1) & (df.temp > 15)]
print(df_2.head(20))

allowed_months = ['jul', 'aug']
print(df.loc[df['month'].isin(allowed_months), :].head(10))
```
