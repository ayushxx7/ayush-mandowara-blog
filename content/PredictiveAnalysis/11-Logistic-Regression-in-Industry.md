---
title: Logistic Regression in the Industry
description: Real life examples of using Logistic Regression in the Industry
date: "2021-09-04"
image: "linear_vs_logistic_regression.jpg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

<!-- vim-markdown-toc GFM -->

* [Purpose of Logistic Regression](#purpose-of-logistic-regression)
* [Difference between Linear Regression and Logistic Regression](#difference-between-linear-regression-and-logistic-regression)
* [Why is Logistic Regression so common](#why-is-logistic-regression-so-common)
* [Confusion Matrix](#confusion-matrix)
* [Sum of Squared Errors](#sum-of-squared-errors)
* [Cross Entropy](#cross-entropy)
* [Z-Score and p-value](#z-score-and-p-value)
* [Nuances of Logistic Regression](#nuances-of-logistic-regression)
    * [Sample Selection: sample should be selected properly](#sample-selection-sample-should-be-selected-properly)
    * [Segmentation: building multiple models for different segments and then combining them together to build final model](#segmentation-building-multiple-models-for-different-segments-and-then-combining-them-together-to-build-final-model)
    * [Variable Transformation](#variable-transformation)
    * [Weight of Evidence (WOE)](#weight-of-evidence-woe)
    * [Information Value](#information-value)
    * [Continuous Transformation](#continuous-transformation)
    * [Interaction Variables](#interaction-variables)
    * [Splines](#splines)
    * [Mathematical Transformation](#mathematical-transformation)
    * [Principal Component Transformation](#principal-component-transformation)
* [Takeaways](#takeaways)
* [References](#references)

<!-- vim-markdown-toc -->

# Purpose of Logistic Regression
In general, logistic regression by definition tries to predict what state a particular individual or system will be in the future. There are two types of logistic regression:
- Binary logit: It involves two levels of the dependent variable. For example, the telecom churn example you learnt in earlier sessions is a binary logistic regression problem, as it classifies customers into two levels, churns and non-churns.
- Multinomial logit: It involves more than 2 levels of dependent variables, such as whether a customer will purchase product A, product B or not purchase anything.

# Difference between Linear Regression and Logistic Regression
1. Dependent/response variable in linear regression is continuous whereas, in logistic regression, it is the discrete type.
2. Cost function in linear regression minimise the error term Sum(Actual(Y)-Predicted(Y))^2 but logistic regression uses maximum likelihood method for maximising probabilities.

# Why is Logistic Regression so common
1. Easy to understand and intuitive variable explanation
2. The output (i.e. the probabilities) has a linear relationship with the log of odds, which can be very useful for explaining results to managers

# Confusion Matrix

$\displaystyle Accuracy = \frac{\text{Correcty Predicted}}{\text{Total Data Points}}$

$\displaystyle Recall = \frac{\text{Corretly Predicted Positive}}{\text{Total Actual Positive}}$

$\displaystyle Precision = \frac{\text{Corretly Predicted Positive}}{\text{Total Predicted Positive}}$

$\displaystyle Specificity = \frac{\text{Correctly Predicted Negative}}{\text{Total Actual Negative}}$

# Sum of Squared Errors
$\displaystyle TSS = y_{actual} - \bar y$

$\displaystyle MSS = y_{predicted} - \bar y$

$\displaystyle RSS = y_{actual} - y_{predicted}$

# Cross Entropy
- Loss Function used for classfication models
    - Masures the difference between two probability distributions for a given set of random variables

# Z-Score and p-value
- Z score represents deviation of any value from mean
- $\displaystyle Z = \frac{X- \bar X}{\sigma}$
- If the deviation is negative, $X-\bar X$ will be negative or mean value will be greater than X
- p-value represents the cumulative area till the `Zc` point

# Nuances of Logistic Regression
## Sample Selection: sample should be selected properly
- Seasonal or cyclical fluctuations population
    - ex: yearly sales of electronic goods
- Representative Population
    - Machine learning prediction assumes that the future is going to look like the past
    - ex: credit card data for students
- Rare incidence population
    - stratified sampling
    - sample should be balanced
    - ex: fraud detection
## Segmentation: building multiple models for different segments and then combining them together to build final model
- Higher predictive power of segment than overall
- ex: Student Credit Card (marks important), Salaried Credit Card (marks not important)
    - For students and salaried people, different variables may be important. 
    - While students' defaulting and not defaulting will depend on factors such as program enrolled for, the prestige of the university attended, parents' income, etc., 
    - the probability of salaried people will depend on factors such as marital status, income, etc. 
    - So, the predictive pattern across these two segments is very different, and hence, it would make more sense to make different child models for both of them, than to make one parent model.
    - A segmentation that divides your population into male and female may not be that effective, as the predictive pattern would not be that different for these two segments. 
## Variable Transformation
- Dummy variable transformation
    - Continuous: binning, ex: income dummy
    - Categorical: encoding, ex: salaried or self-employed
    - small variations in the variables would not have a very big impact on a model that was made using dummies, but they would still have a sizeable impact on a model built using continuous variables as is.

    - all the data will be compressed into very few categories and that might result in data clumping

    | Disadvantage             | Advantage                 |
    |--------------------------|---------------------------|
    | loss of predictive power | variables are very stable |
    | score clumping           |                           |

## Weight of Evidence (WOE)
- $\displaystyle WOE = \ln(\frac{\text{good in the bucket}}{\text{Total Good}}) - \ln(\frac{\text{bad in the bucket}}{\text{total bad}}) = \ln(\frac{\text{Percentage of Good}}{\text{Percentage of Bad}})$
- It is also important to note that they should follow an increasing or decreasing trend across bins. 
- If the trend is not monotonic, 
    - then you would need to compress the buckets/ bins (coarse buckets) of that variable and 
    - then calculate the WOE values again.
- WOE reflects group identity: 
    - This means it captures the general trend of distribution of good and bad customers. 
    - E.g. 
        - the difference between customers with 30% credit card utilisation and 45% credit card utilisation is not the same as the difference between customers with 45% credit card utilisation and customers with 60% credit card utilisation. 
        - This is captured by transforming the variable credit card utilisation using WOE.
- WOE helps you in treating missing values logically for both types of variables — categorical and continuous. 
- E.g. in the credit card case, 
    - if you replace the continuous variable credit card utilisation with WOE values, 
    - you would replace all categories mentioned above (0%-45%, 45% - 60%, etc.) with certain specific values, and 
    - that would include the category "missing" as well, 
    - which would also be replaced with a WOE value.

    | Disadvantage             | Advantage                              |
    |--------------------------|----------------------------------------|
    | loss of predictive power | variables are very stable              |
    | score clumping           | put in logic trend - easier to explain |

- When you are using WOE values in your model, you are doing something similar to creating dummy variables 
    - you are replacing a range of values with an indicative variable. 
- It is just that, instead of replacing it with a simple 1 or 0, which was not thought out at all, 
    - you are replacing it with a well thought out WOE value. 
- Hence, the chances of undesired score clumping will be a lot less
- The woe is expressed by ln (percentage of non-churns in bucket/ percentage of churns in the bucket). If the woe is negative, it means the percentage of churns in that bucket is greater than the percentage of non-churns in that bucket.

## Information Value
- IV = WOE * (Percentage of good in the bucket - Percentage of bad in the bucket)
- It is an important indicator of predictive power.
- It helps you understand how the binning of variables should be done. The binning should be done such that the WOE trend across bins is monotonic — either increasing all the time or decreasing all the time. But one more thing that needs to be taken care of is that IV (information value) should be high. 

## Continuous Transformation
- keep continuous variable as it is
- treat missing values
- treat outliers
- it has higher information value / predictive power
- it does not have clumping issues
- not stable, slight change in values will cause change in model

## Interaction Variables
- combining variables together
    - A judgement call based on a deep understanding of your business.
    - decision trees

## Splines
- A spline is basically obtained by fitting a polynomial over the WOE values. 
- offers high predictive power
- may result unstable models

## Mathematical Transformation
- $x^2$
- $x^3$
- logarithms - explored in real world
- some transformations are not easily explainable
    - ex: $(income)^2$ is not difficult to explain

## Principal Component Transformation
- takes all variables and creates components which are orthogonal to one another (i.e. they have 0 multicollinearity)
- the variables are grouped and modified and put into a few "bunches" such that each "bunch" is not correlated with the other.
- the components do not offer a very intuitive or easily explainable interpretation — the model's inner workings would be hard to communicate to a business manager.

# Takeaways
1. Logistic Regression is used to predict what which class a value will belong two. It can be binary logistic regression (2 classes) or multinomial logit (more than 2 classes).
2. Sample selection is important when it comes to logistic regression. For instance, class imbalance can cause problems while building model. So we have to do stratified sampling to resolve that problem. 
3. WOE (Weight of Evidence) is a good technique for grouped variables as it maintains the logical reasoning. It is important that WOE be monotic. If it is not, the groups are not created correctly.

# References
- https://www.analyticsvidhya.com/blog/2016/02/guide-build-predictive-models-segmentation/
