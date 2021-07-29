---
title: Operations on Pandas DataFrames
description: operations that can be performed on pd.DataFrame such as merge, concat, groupby
date: "2021-06-16"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

## Merging DataFrames
```py heading="Merge dataframes using pd.merge"
import pandas as pd
df_1 = pd.read_csv('https://query.data.world/s/vv3snq28bp0TJq2ggCdxGOghEQKPZo')
df_2 = pd.read_csv('https://query.data.world/s/9wVKjNT0yiRc3YbVJaiI8a6HGl2d74')
df_3 = pd.merge(df_1, df_2, how = "inner", on = "unique_id")
print(df_3.head(20))
```
Note: 
- `how` can be set to left / right / inner / outer and it is similar to SQL
- `on` is the column on which merge can occur

## Concatenating DataFrames
```py heading="Concatenating dataframes using pd.concat"
import warnings
warnings.filterwarnings('ignore')
import pandas as pd

df_1 = pd.read_csv('https://query.data.world/s/vv3snq28bp0TJq2ggCdxGOghEQKPZo')
df_2 = pd.read_csv('https://query.data.world/s/9wVKjNT0yiRc3YbVJaiI8a6HGl2d74')
df_3 = pd.concat([df_1, df_2])
print(df_3.head())
```

## Operations on Multiple DataFrames
```py heading="Order countries by total medals"
import pandas as pd

gold = pd.DataFrame({'Country': ['USA', 'France', 'Russia'],
                         'Medals': [15, 13, 9]}
                    )
silver = pd.DataFrame({'Country': ['USA', 'Germany', 'Russia'],
                        'Medals': [29, 20, 16]}
                    )
bronze = pd.DataFrame({'Country': ['France', 'USA', 'UK'],
                        'Medals': [40, 28, 27]}
                    )
                    
gold.set_index('Country', inplace=True)
silver.set_index('Country', inplace=True)
bronze.set_index('Country', inplace=True)

total = gold.add(silver, fill_value=0)
total = total.add(bronze, fill_value=0)


print(total.sort_values(by='Medals', ascending=False))
```

## Grouping data
```py heading="Use groupby method on Pandas DataFrame"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
#Type your groupby command here
df_1 = df.groupby(['month', 'day'])['rain', 'wind'].mean()
print(df_1.head(20))
```

## Creating new columns using existing columns
```py heading="Create new Series (column) using existing ones"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
df['XY'] = df['X'] * df['Y']
print(df.head(20))
```

## Pivot Table
- dataframe
- index --> groupby this column
- column --> distinct values to individual columns
- value --> aggregation will be performed on this
- aggregate function --> mean, min, sum etc.

```py heading="Use Pivot table to groupby and calculate mean"
import pandas as pd
df = pd.read_csv('https://query.data.world/s/vBDCsoHCytUSLKkLvq851k2b8JOCkF')
df_1 = df.pivot_table(
        index=["month", "day"],
        aggfunc = "mean",
        values = ["rain", "wind"]
    )
print(df_1.head(20))
```

## Conclusion
1. There are two data structures in Pandas, Series (Columns) & DataFrames (Tables [objects i.e. rows over the series]). The Pandas DataFrame can be obtained from csv,  dictionaries, json etc.
1. Selecting parts of dataframe [Slicing and Dicing] operations can be performed on DataFrames using df.loc (label based) & df.iloc (index based)
1. Pandas is a very powerful library which simplifies many of the common operations that need to be performed on data. Operations such as mean, sum, groupby can be performed on dataframes.  Lambda functions can be used to create a new columns easily.

## Additional Resources
- [Data Warehouse Design - Star Schema](https://www.geeksforgeeks.org/star-schema-in-data-warehouse-modeling/)
