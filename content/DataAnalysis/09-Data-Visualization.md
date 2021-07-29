---
title: Data Visualization and EDA
description: How to visualize data
date: "2021-06-20"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas", "data-visualization"]
---

# Purpose
Understanding various types of Plots available for analyzing data

## Prologue
Data visualisation is an important skill to possess for anyone trying to extract and communicate insights from data. Great business narratives and presentations often stem from brilliant visualisations that convey the key ideas in a concise and aesthetic manner. In the field of machine learning, visualisation plays a key role throughout the entire process of analysis - to obtain relationships, observe trends and portray the final results as well. 

Summary statistics can be misleading and hence data should be visualized as well. Both kinds of analysis go hand in hand. Visual analysis is easier to understand, but may require some extra annotations when compared to normal text.

## Seaborn
1. Built on top of matplotlib
1. Closely integrated with pandas
1. Create stats graphs easily
1. automatic estimation and plotting linear regression models
1. Color pallete
1. Concise control over style

## Tips
- Sanity Checks should be performed after cleaning up data
- Use `pd.qcut` is for cutting buckets (can pass in np.quartile for specifying bucket sizes)

## Plots

#### Box Plot
- to understand spread of data
- gives insight about median, and inter quartile range (IQR)
- to identify outliers
  >Remove these data points if they don't serve any purpose or will hamper analysis.
- Cateogy wise box plot is good approach

#### Histogram
- which ranges are the most frequent
- number of bins should be carefully selected

#### Line Plot
- for time series data 
- - used in forecasting models

#### Heatmaps
- predominantly utilised for analysing Correlation Matrix
  > A high positive correlation (values near 1) means a good positive trend - if one increases, then the other also increases.  
  > A negative correlation on the other hand(values near -1) indicate good negative trend - if one increases, then the other decreases.  
  > A value near 0 indicates no correlation, as in one variable doesn’t affect the other. 
- When understanding relationship between 3 variables

#### Scatter Plot
- When understanding relationship between two variables 
- outlier analysis
- clustering

#### Bar Plot
- Useful for analyzing Categorical values
- Better than pie chart in terms of representing which segment is larger than the other

#### Joint Plot - Seaborn
- scatter plot + histogram
- kernel density estimate (kind = 'kde')
- regression (kind = 'reg')

#### Pair Plot - Seaborn
- pairwise association - scatter plot between all numeric columns
- Since every left diagonal element in the pairplot matrix will compare one variable with itself, instead of a scatterplot, we have a histogram which shows the univariate distribution of that numeric variable.

## References
- https://en.wikipedia.org/wiki/Anscombe%27s_quartet

## Takeaways / Summary
- `Box Plots` are useful in understanding the spread of the data. It also helps in identifying clusters and outliers
- `Heatmaps` are useful for understanding correlation between variables. A number is assigned between the range -1 to 1. 1 means positive correlation, -1 means negative correlation, 0 means no correlation
- `Pair Plots` are useful in quickly analyzing trends between various numerical values in the dataframe
- To cut data into mutiple buckets, on can use `pd.qcut`
- Applying `lambda functions` is easy & convenient when doing data analysis
