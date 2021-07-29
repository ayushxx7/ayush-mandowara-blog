---
title: EDA - Exploratory Data Analysis
description: how to perform EDA, and why
date: "2021-06-28"
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

---

# Segmented Univariate Analysis
- Performing Univariate Analysis on a subset of the data

## Question: How to group data into smaller buckets? 
- business driven decision
- data can be grouped by categorical variables

## Process of Segmenting data
- Take raw data
- Group by dimensions
- Summarise using a relevant metric such as mean, median, etc.
- Compare the aggregated metric across groups/categories

## Comparision of Averages
- Don’t blindly believe in the averages of the buckets — you need to observe the distribution of each bucket closely and ask yourself if the difference in means is significant enough to draw a conclusion. If the difference in means is small, you may not be able to draw inferences. In such cases, a technique called hypothesis testing is used to ascertain whether the difference in means is significant or due to randomness. 
- Potential is not a guarantee
- A metric can be an `enabler` yet not be a `driver` 
  - Ex: education of parents impacting marks of students
- Other variables such as Median, Quartiles, Upper Fence & Lower Fence should also be considered
  - Box Plots are a powerful way to do this

### Note:
- Besides finding the segments and comparing the metrics, your primary focus should be on understanding the results arising from the segments.

---

# Bivariate Analysis
- Analyse pairs of continuous variables at a time
- Correlation Analysis
  - If one increases as the other increases, the correlation is positive
  - If one decreases as the other increases, the correlation is negative
  - If one stays constant as the other varies, the correlation is zero

### Categorical vs Continous Values

| Continuous Values                                                      | Categorical Values                                                  |
|------------------------------------------------------------------------|---------------------------------------------------------------------|
| can take a range of values                                             | only handful of distinct values                                     |
| operations such as mean, median, mode can be performed on these easily |                                                                     |
| ex: marks obtained in a test (range of 0-100)                          | gender: male / female                                               |
| correlation can be easily identified                                   | difficult to find correlation, no concept of higher or lower values |

### What is Bivariate Analysis?
1. Firstly, there are two types of variables
    - Continous: numeric values, a range of possible numbers which have inherent order 
    - Categorical: labeled values, no inherent order, a small number of distinct values, useful for grouping data
1. For Continous variables, 
   - we try to analyze pairs of continous varaibles at a time. 
   - One way to do that is by performing correlation analysis. 
     - Correlation Analysis:
        - positive correlation - one value increases, other increases as well
        - negative correlation - one value increases, other decreases
        - no correlation - no impact of increasing one value on the other value
1. For Categorical variables, 
    - the data can be divided into smaller groups (based on the categories), and correlation can be applied over those categories. 

Example:
Suppose we have data regarding the marks obtained by students, the number of hours the play games, and the gender of the students
- first, we can calculate the average score in Mathematics vs the number of hours all students play video games
- then, we can drill down further into categories such as girls and boys. 
- So we can ask questions such as what is the impact of girls playing games on maths score, vs boys playing games on maths score. 


# Summarizing
- `Univariate Analysis` - understand a particular column to see patterns and how the numbers are spread out
- `Segmented Univariate Analysis` - how values are different across segments
- `Bivariate Analysis` - impact of one variable on the others
- Only conducting segmented univariate analysis may deceive you into thinking that a certain phenomenon is true without asking the question — is it true for all sub-populations or is it true only when you aggregate information across the entire population?

---

# Derived Metrics

creating new data points (columns) from existing ones
- one motivation for creating new derived metrics is business requirement / understandin

### Types of derived metrics
- Type Driven
  - Steven's typology
    - categorical variables
    - ordinal variable
    - interval variable
    - Ratio variable
  - Latitude and longitude (wrappable, hour/min etc.)
  - Email Address
  - URL
- Business Driven 
  - created specifically for a purpose
- Data Driven
  - reduce correlation by taking ratio
  - any analysis on data has potential to create one or more new columns

- Each attribute can be a new dimension in itself
- Numerical columns can be binned together to create categories which can then be used for derived metric (eg age = teens, adults, children)
- New column can be derived from min, max, 10th percentile etc.

## Steven’s typology classifies variables into four types — nominal, ordinal, interval and ratio:

Nominal variables: Categorical variables, where the categories differ only by their names; there is no order among categories, e.g. colour (red, blue, green), gender (male, female), department (HR, analytics, sales)

These are the most basic form of categorical variables

Ordinal variables: Categories follow a certain order, but the mathematical difference between categories is not meaningful, e.g. education level (primary school, high school, college), height (high, medium, low), performance (bad, good, excellent), etc.

Ordinal variables are nominal as well

Interval variables: Categories follow a certain order, and the mathematical difference between categories is meaningful but division or multiplication is not, e.g. temperature in degrees celsius ( the difference between 40 and 30 degrees C is meaningful, but 30 degrees x 40 degrees is not), dates (the difference between two dates is the number of days between them, but 25th May / 5th June is meaningless), etc.

Interval variables are both nominal and ordinal

Ratio variables: Apart from the mathematical difference, the ratio (division/multiplication) is possible, e.g. sales in dollars ($100 is twice $50), marks of students (50 is half of 100), etc.

Ratio variables are nominal, ordinal and interval type

Nominal variables are categorical variables where the categories differ only by their names, and there is no order among the categories. E.g. education degrees such as M.tech, M.com, MBA are names of master degrees after the bachelor degree, which can be differentiated by degree names. Thus, educational degree is a nominal variable whereas “Ratings” such as “Very_Satisfied”, “Satisfied” and “Not_satisfied” are distinguished by labels, but these can be ordered. But “Length” is a continuous variable. It can be expressed in ratio, for which you can perform the mathematical operation on it. On the other hand, “Date of birth” can be shown in intervals. It follows a particular order, for which the measurable difference between categories is meaningful.

## Summarise
- derived metrics are most powerful way of enhancing EDA
- there is a process / science
  - type -> attributes | date => day of week, hour of day
  - business -> if person has fullfilled criteria
  - purely based on data
- just because you can create new columns doesn't mean you should. 
  - prioritize based on business logic

Question: Explain Derived Metrics to colleague who understands EDA

Answer: 
Derived metrics are data points you can extract from existing data set. They help in providing more relevant insights. 
There are 3 kinds of derived metics,
- Type driven: these depend on the type of the data. 
ex: Date - can be used to extrac information such as Day of Week, Season etc.
- Business Driven: applying domain knowledge to create more columns
ex: If you have a dataset for Cricket with Run scored, Player Name & Balls Played, you can extract the number of centuries, and the strike rate based on general cricket rules
- Data Driven: if you perform any analysis on the data, that can potentially provide new columns as well
ex: you have score of students in maths, science, english. you can create new column with total marks.

All these methods plan to achieve the same goal, which is to generate relevant insights from the data.
One can continue performing univariate, bivariate and segmented univariate analysis on these derived metrics as well.

---

# EDA Module Summary

Understanding domain

Understanding data and preparing it for analysis

Univariate analysis and segmented univariate analysis

Bivariate analysis

Deriving new metrics from the existing data

# References
[Power Law Distribution](https://en.wikipedia.org/wiki/Power_law)
