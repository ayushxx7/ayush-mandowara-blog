---
title: EDA - Exploratory Data Analysis
description: how to perform EDA, and why
date: "2021-06-27"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas", "data-visualization"]
---

# Purpose
Companies usually collect a lot of data over time. Once they have enough data, they realize, they can't do much with it.  
They come in contact with a Data Scientist, and say:  
Here's some data, we don't know how to use it. Do something with it. 
In other words, here's some data, please perform your magic. you are a data scientist, right?

# What is EDA
Exploratory Data Analysis, or EDA in short, is a process of understanding data and identifying insights and patterns from it.

# Types of Analysis
## Univariate analysis
## Bivariate analysis

### Question: Which Industry would you like to explore? Why? Where would get the data from?
I would like to analyze the Gaming Industry (both PC & Mobile). The reason is I am currently working in the gaming industry itself. 
The data I can collect from Steam, Discord, Android App Store, iOS App Store. 
- steam will give me ratings + reviews + prices
- discord can potentially give me how active the community is
- twitch could also be a valid source for finding which games are relevant
- I will also look for publicly available datasets through web search, and scanning github for datasets

## Words of Wisdom
To come up with any relevant insight, a person who has more understanding of the business domain will have a better answer than someone who doesn't. So, it is important to understand the industry.  
Not everyone who has data will know what to do with it. Hence, it is important for the data scientist to perform some EDA to understand the data at hand before proceeding with business requirements.   
There is a host of public data available, and one must practice their skills on these datasets from time to time. Not only will it sharpen the axe, but also help us know what kind of data is available to use.  

# What is Big Data?
Big Data - Mess which I don't understand. 
In other words, there is so much data, that it can't be used directly. We need to identifying important features, do some slicing & dicing operations, select the relevant subset of data and then analyze it to get some meaningful insights from it.

---

# Univariate Analysis
Understand a particular column to see patterns and how the numbers are spread out

## Categorical Data

Categorical variables can be of two types 
- ordered categorical data
- unordered categorical data

| Order Categorical Data                                                                               | Unordered Categorical Data                                                                                                        |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| it is not possible to say that a certain category is 'more or less' or 'higher or lower' than others | have a notion of 'higher-lower', 'before-after', 'more-less' etc                                                                  |
| Ex: color is such a variable (red is not greater or more than green etc.)                            | Ex: the age-group variable having three values - child, adult and senior because an senior citizens are older than adults who are older than children

Note:  
It is possible to extract meaningful insights from unordered categorical variables using rank-frequency plots.  
Moreover, Rank-Frequency plots of unordered categorical variables, when plotted on a log-log scale, typically result in a `power law distribution`

### Plots
- Plots are immensely helpful in identifying hidden patterns in the data   
- Plot histograms & bar plots for identifying patterns / trends in ordered categorical data  
- Distribution Plots reveal interesting insights about the data. You can observe various visible patterns in the plots and try to understand how they came to be.

### Usage of Mean & Median 
| Mean                                                          | Median                                                                                |
|---------------------------------------------------------------|---------------------------------------------------------------------------------------|
| great measure for looking at how things should be distributed | Representative of data set                                                            |
| cannot be used if data has outliers                           | Useful if there are outliers in the data set as it is unaffected by those data points |
| gives an average of all the values                            | gives a typical value that could be used to represent the entire group                |

As a simple rule of thumb,   
- always question someone if someone uses the mean, since median is almost always a better measure of ‘representativeness’.

#### Question: Why do you think there is a huge difference between the mean and median of most datasets? Which of these metrics is more representative of the data?
#### Answer:  
Mean takes into account the extreme values when performing calculations. Hence, when there are outliers, mean will consider that as well and the value will therefore be skewed.   
Median on the other hand does not take into the outliers, and simply focuses on the representative middle of the data set.  
This is why there is a difference between mean and median values.   
Median is a more representative middle of any dataset.   

### Calculating Spread of Data
Standard Deviation is a common approach to identify the spread of a dataset. However, it is not useful when there are outliers in the dataset. It's better to use percentile values for communicating spread, such as 75th percentile - 25th percentile or 90th percentile - 10th percentile  


#### Metadata description 
- describes the data in a structured way. 
- one should make it a habit of creating a metadata description for whatever data set they are working on
- it will serve as a reference point for the creator of the data
- it will help other people understand the data better and save time

#### Summary metrics 
- mean, median, mode, total count, percentile values etc.
- used to obtain a quantitative summary of the data
- Not all metrics can be used everywhere
- It is important to understand the data and then choose what metric to use to summarise the data.

### Takeaways
- Median is more representative of the typical middle of values in a reasonable large dataset
- For conveying the spread of the data, the Inter Quartile Range (IQR) is a much better when compared with standard deviation, since standard deviation is affected by the outliers while IQR ignores those values. 
  - IQR = value at 75th percentile - value at 25th percentile
- One can extract meaningful insight from unordered categorical data by generating a rank-frequency plot. When plotting log-log rank-frequency graph, power law is observed on most data sets.

