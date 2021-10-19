---
title: Model Selection - Practical Considerations
description: which model to apply and when
date: "2021-10-18"
image: "principal_component_analysis.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---


<!-- vim-markdown-toc -->

# Business Case

## Identifying the consumers of an e-commerce website

### Based on Gender
- Males
- Females

### Based on Age
- First Jobbers / Young Adults
- Family Person
- Middle Aged
- Senior People

## Benefits of Identifying the right consumer
- Provide better recommendations to customers
- Higher conversion rate of products from cart to billing counter
- Provide better consumer experience

# Behavioral KPIs - Key Performance Indicators
- Time of shopping
- Ratio of number of products added to cart over number of products finally bought

## Filter
- Consider only those people who have made at least 5 successful purchases earlier

# Question

| Statement                                                                                                                                | True / False |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| A logistic regression model calculates the class probabilities of all the classes of the outcome variable, while predicting a test case. | True         |
| The decision boundary of an LR model is a straight line.                                                                                 | True         |

- Logistic regression calculates the class probabilities of all the classes present in the outcome variable, using the logistic function. The final class is predicted by providing a cutoff value.
- The logistic regression model separates two different classes using a line linearly. The sigmoid curve is only used to calculate class probabilities. The final classes are predicted based on the cutoff chosen after building the model.

# Pros
## Logistic regression
- It is convenient for generating probability scores.
- Efficient implementation is available across different tools.
- The issue of multicollinearity can be countered with regularisation.
- It has widespread industry use.

## Decision trees
- Intuitive decision rules make it easy to interpret.
- Trees handle nonlinear features well.
- The variable interaction is taken into account.

## Support vector machines
- SVMs can handle large feature space.
- These can handle nonlinear feature interaction.
- They do not rely on the entire dimensionality of the data for the transformation.

# Cons
## Logistic regression
- It does not perform well when the features space is too large.
- It does not perform well when there are a lot of categorical variables in the data.
- The nonlinear features have to be transformed to linear features in order to efficiently use them for a logistic model.
- It relies on entire data i.e. if there is even a small change in the data, the logistic model can change significantly.

## Decision trees
- Trees are highly biased towards the training set and overfit it more often than not.
- There is no meaningful probability score as the output.

## Support vector machines
- SVMs are not efficient in terms of computational cost when the number of observations is large.
- It is tricky and time-consuming to find the appropriate kernel for a given data.

# Questions

**Which algorithms will not perform well when the relationship between the dependent and independent variable in a data set is nonlinear?**
- Logistic Regression: Since logistic regression separates the different classes of the dependent variable using a line, there should be linear dependence between the dependent and independent variable for it to work well.

**Which algorithm's result is easiest to explain to someone who does not possess any knowledge of machine learning?**
- Decision Tree.

**Among logistic regression, decision trees and support vector machines, which one is best suited for a dataset having lots of categorical variables?**
- Decision trees are best suited for a dataset with a lot of categorical data because of the way in which node splitting is performed. 
- Decision trees do not need the categorical features to be converted into numeric features.

# Suggested Approach
-Start with logistic regression. 
    - It acts as a baseline (benchmark) model. 
    - It gives you an idea about the important variables.
- Then, go for decision trees and compare their performance with the logistic regression model. 
    - If there is no significant improvement in their performance, then just use the important variables drawn from the logistic regression model.
- Finally, if you still do not meet the performance requirements, use support vector machines. 
    - But, keep in mind the time and resource constraints, because it takes time to find an appropriate kernel for SVM. 
    - Also, they are computationally expensive.

