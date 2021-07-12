---
title: Linear Regression
description: Fundamentals of Linear Regression
date: "2021-07-22"
image: "regression.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

# Purpose
An Introduction to Machine Learning, especially focusing on Linear Regression

## What are some examples of Machine Learning?
- You speak to your phone, and your phone understands the command. This is called speech recognition. The underlying technique used for this is Machine Learning.
- Recognizing objects from image / video data
- Predicting requirement of emergency service
- Find out which customer can default - credit risk modelling

## Model
Modeling uses machine learning algorithms, in which the machine learns from the data just like humans learn from their experiences.

### Types of Models:
- Regression
    - What score will student get in 12th if we know their marks in 10th
    - Output variable to be predicted is a continuous/numeric variable
- Classification
    - Email is Spam or Ham
    - Output is categories
- Clustering
    - Segment customers into different categories and give discount
    - No predefined notion of a label is allocated to groups/clusters formed

| Classification        | Clustering                                                                            |
|-----------------------|---------------------------------------------------------------------------------------|
| Labels are predefined | We discover what clusters will form, IT is not known what clusters will form a priori |


## Supervised vs Unsupervised Learning
| Supervised                                           | Unsupervised                                    |
|------------------------------------------------------|-------------------------------------------------|
| Regression - Continuous label                         | Clustering                                      |
| Classification - Categorical Label                   |                                                 |
| Past data with labels is used for building the model | No pre-defined labels are assigned to past data |

### Which learning method will you use (Supervised / Unsupervised)
Q1: You have the past data of two cricket teams on the performance of the teams based on different parameters and the match results. You have to predict which team will win.

A1: You have the data of the past few years to train your model on. Since you know the results of different games based on different performance parameters, it would be a supervised learning problem — more specifically, a classification problem since your output variable (i.e. the name of the team) is categorical.

Q2: You feed a large collection of spam emails to the learning model to identify the different sub-groups of these spam mails. No labels are presents in the data set.

A2: This can be addressed using unsupervised learning as there are no labels assigned to your data set and they need to be identified.

Q3: Consider a large data set of the medical profiles of cancer patients. This data contains no labels for the medical profiles of the cancer patients. The model has to learn whether there might be different groups of such patients for which separate treatments might be tailored.

A3: This can be addressed using an unsupervised learning algorithm, in which you group patients into different clusters.

## Training Data vs Testing Data
Model is built using training data and predictions are mode on the test data

---

# Regression Line
x-axis - Independent Variable - Predictor Variable  
y-axis - Dependent Variable - Output Variable

### Types
1. Simple Lienar Regression - Model with only 1 independent variable
2. Multiple Linear Regression - Model with more than 1 independent variable

## Simple Linear Regression
- Fit a straight line on the data
- Equation of Straight Line: `y = mx + c`
    - Slope: How much will y increase if x increases 
        - m = tan(theta)
    - Intercept: Value of y when x is 0
        - c = intercept
- The slope (m) of any straight line can be calculated by (y₂ - y₁)/(x₂ - x₁), where (x₁, y₁) and (x₂, y₂) are any two points through which the given line passes.

## Best Fit Line
### Least Squares Regression Line

#### Residual
- Residuals are defined as the difference between the y-coordinates of actual data and the y-coordinates of predicted data.
- Measured Value - Predicted Value
- `ei = yi - ypred`

#### Ordinary Least Squares Method:
- The coefficients of the least squares regression line are determined by the Ordinary Least Squares method — which basically means minimising the sum of the squares of the y-coordinates of actual data - y-coordinates of predicted data.  
- The Ordinary Least Squares method has the criterion of the minimisation of the sum of squares of residuals. 
- Residual sum of all squares (e1^2 + e2^2 + ... + en^2)

Q: What is the main criterion used to determine the best-fitting regression line?  
A: The line that minimises the sum of squares of distances of points from the regression line

# References
- https://www.mathsisfun.com/equation_of_line.html
