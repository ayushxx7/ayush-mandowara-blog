---
title: Pandas Basics
description: Series and DataFrames
date: "2021-08-22"
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
    * [Dropping duplicate rows](#dropping-duplicate-rows)
    * [Selecting values of a particular quantile in Pandas DataFrame](#selecting-values-of-a-particular-quantile-in-pandas-dataframe)
    * [Create Day column from Date Time column in Pandas](#create-day-column-from-date-time-column-in-pandas)
    * [Percentage Wise column distribution](#percentage-wise-column-distribution)
* [Frequency Table using pd.crosstab](#frequency-table-using-pd.crosstab)
* [References](#references)

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

## Dropping duplicate rows
```py heading="Drop duplicate rows from dataset using Pandas"
import pandas as pd
rating = pd.read_csv('https://query.data.world/s/EX0EpmqwfA2UYGz1Xtd_zi4R0dQpog')

rating_update = rating.drop_duplicates()

print(rating.shape)
print(rating_update.shape)
```

## Selecting values of a particular quantile in Pandas DataFrame
```py heading="Quantile based segmentation of DataFrame in Pandas"
import pandas as pd

df = pd.read_csv('https://query.data.world/s/vbdcsohcytuslkklvq851k2b8jockf')
print(df.shape)
cols = ['X']
quantile_95th_percentile = df[cols].quantile(0.95)
df = df[~(df[cols] > quantile_95th_percentile).any(axis=1)]
print(df.shape)
```

## Create Day column from Date Time column in Pandas
```py heading="Create Day column from Date Time column in Pandas"
import pandas as pd
order = pd.read_csv('https://query.data.world/s/3hIAtsCE7vYkPEL-O5DyWJAeS5Af-7')
order['Order_Date'] = pd.to_datetime(order['Order_Date'])

order['day'] = pd.DatetimeIndex(order['Order_Date']).day

print(order.head(10))
```

## Percentage Wise column distribution

```py heading="Using normalize with value_counts in Pandas"
import pandas as pd

df = pd.read_csv('https://query.data.world/s/vbdcsohcytuslkklvq851k2b8jockf')
print(round(df.X.value_counts(normalize=True)*100,2))
```

# Frequency Table using pd.crosstab
```py heading='Frequency using pd.crosstab'
import pandas as pd
df = pd.DataFrame({'Role': ['HR', 'HR', 'SDE'], 'Gender': ['Male', 'Female', 'Female']})
pd.crosstab(df.Role, df.Gender)
```
# References
- [Selecting Subsets using loc & iloc](https://medium.com/dunder-data/selecting-subsets-of-data-in-pandas-6fcd0170be9c)
