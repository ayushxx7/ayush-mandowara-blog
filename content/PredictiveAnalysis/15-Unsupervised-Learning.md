---
title: Unsupervised Learning
description: Clustering and intro to Unsupervised Learning
date: "2021-10-05"
image: "unsupervised_learning.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "unsupervised-learning"]
---

# Types of Learning

| Supervised Learning                                         | Unsupervised Learning                                                                                                                     |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Labels are known                                            | Labels are not known                                                                                                                      |
| Email - Spam, Ham                                           | grouping news articles into different categories (categories not known)                                                                   |
| Has distinction between independent and dependent variables | Group the data points into different categories based on the given set of attributes. There are no dependent and independent variables |

# Unsupervised Learning

## Practical applications of Clustering

- Customer Insight: Say, a retail chain with so many stores across locations wants to manage stores at best and increase the sales and performance. Cluster analysis can help the retail chain to get desired insights on customer demographics, purchase behaviour and demand patterns across locations. This will help the retail chain for assortment planning, planning promotional activities and store benchmarking for better performance and higher returns.
- Marketing: Cluster Analysis can help with In the field of marketing, Cluster Analysis can help in market segmentation and positioning, and to identify test markets for new product development.
- Social Media: In the areas of social networking and social media, Cluster Analysis is used to identify similar communities within larger groups.
- Medical: Cluster Analysis has also been widely used in the field of biology and medical science like human genetic clustering, sequencing into gene families, building groups of genes, and clustering of organisms at species. 
- Customer segmentation for targeted marketing is one of the most vital applications of the clustering algorithm. Here, as a manager of the online store, you would want to group the customers into different clusters, so that you can make a customised marketing campaign for each of the group. You do not have any label in mind, such as good customer or bad customer. You want to just look at patterns in customer data and then try and find segments. This is where clustering techniques can help you with segmenting the customers. Clustering techniques use the raw data to form clusters based on common factors among various data points. This is exactly what will also be done in segmentation, where various people or products will be grouped together on the basis of similarities and differences between them. As a manager, you would have to decide what the important business criteria are on which you would want to segregate the customers. So, you would need a method or an algorithm that itself decides which customers to group together based on this criteria.

# Clustering vs Segmentation
| Clustering          | Segmentation                  |
|---------------------|-------------------------------|
| Analytics Technique | Business Problem              |
|                     | Ex: People, Products, Markets |

# Segmentation Stability
- even if you run clustering exercise in quick peridocity, the people falling in same bucket should remain in that bucket
- there should be a time limit till which we can say segment will stay

## Inter and Intra cluster homogeneity
- Inter segment - there should be lot of difference between individuals
- Intra Segment - there should be almost no difference between individuals

## Behavioral Segmenatation
- what the person, market exhibited through action
- data comes from internal CRM system
- ex: youtube recommendatations

## Attitudinal Segmentation
- what you want to behave like
- intent to purchase not actual purchase
- in survey person says they purchase branded clothes (attitudinal), while they actually end up purchasing discounted clothes (behavioural)

## Demographic Segmenetation
- Gender
- Age
- Location
- Income
- Family Members

# Questions
**A telecom company classifies its prepaid mobile customers into three types mainly based on the number of times they recharge per month. What kind of segmentation this is?**
- Behavioral segmentation: Recharge is a behaviour which can be observed, opposed to attitude which resides in the mindset of the customer.

**An international foods and beverages company wants to look at what products it should launch in India. For that, it has first tried to segment the market. It is known that people living in the same area and having similar salaries will have similar eating habits. Then which of the following can be segmented in 1 group?**
A. High Earning Individual from Bengaluru  
B. Low Earning Individual from Rural Uttar Pradesh  
C. Mid Earning Individual from Mumbai  
D. High Earning Individual from Hyderabad  

- Segment can be formed like so: (A,D) - (B) - (C)

**You are an analyst at a global laptop manufacturer and are given the task of deciding whether the company should enter the Indian Market. You try to estimate the market size by first breaking the market by different types of people who use a laptop such as students, working professionals and their paying capacity to get an estimate of the total market size and the characteristics of each segment. In essence, you are doing?**
- Demographic Segmentation: Since you are looking at the income and the profession of people. Notice how this is much simpler than finding data about actual laptop purchasing history of customers and then trying to estimate the market size based on that.

# K-Means Clustering

## Euclidean Distance Measure
The algorithm needs to find data points whose values are similar to each other and therefore these points would then belong to the same cluster. The method in which any clustering algorithm goes about doing that is through the method of finding something called a “distance measure”. The distance measure that is used in K-means clustering is called the Euclidean Distance measure.

- $X = (X_1, X_2, \ldots, X_n)$
- $Y = (Y_1, Y_2, \ldots, Y_n)$

- It is the length of the straight line joining 2 points
- Formula: $D = \sqrt{(X_1-Y_1)^2 + (X_2-Y_2)^2 + \ldots + (X_n - Y_n)^2}$

- The idea of distance measure is quite intuitive. Essentially, the observations which are closer or more similar to each other would have a low Euclidean distance and the observations which are farther or less similar to each other would have a higher Euclidean distance. 

```py heading="Euclidean Distance in Python"
from math import sqrt

x = (7, 50)
y = (23, 34)
c = (12, 12)

squared_sum = 0
for i, j in zip(x, c):
    squared_sum += (i-j)**2

print(sqrt(squared_sum)) # x - c distance


squared_sum = 0
for i, j in zip(y, c):
    squared_sum += (i-j)**2

print(sqrt(squared_sum)) # y - c distance

# the point (among x, y) which has lower distance is closer to c
```

# References
- [10 interesting uses of k-means clustering](https://dzone.com/articles/10-interesting-use-cases-for-the-k-means-algorithm)
