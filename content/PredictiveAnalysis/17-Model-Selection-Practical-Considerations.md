---
title: Model Selection - Practical Considerations
description: which model to apply and when
date: "2021-10-18"
image: "model-selection.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

<!-- vim-markdown-toc GFM -->

* [Business Case](#business-case)
    * [Identifying the consumers of an e-commerce website](#identifying-the-consumers-of-an-e-commerce-website)
        * [Based on Gender](#based-on-gender)
        * [Based on Age](#based-on-age)
    * [Benefits of Identifying the right consumer](#benefits-of-identifying-the-right-consumer)
* [Behavioral KPIs - Key Performance Indicators](#behavioral-kpis---key-performance-indicators)
    * [Filter](#filter)
* [Question](#question)
* [Pros](#pros)
    * [Logistic regression](#logistic-regression)
    * [Decision trees](#decision-trees)
    * [Support vector machines](#support-vector-machines)
* [Cons](#cons)
    * [Logistic regression](#logistic-regression-1)
    * [Decision trees](#decision-trees-1)
    * [Support vector machines](#support-vector-machines-1)
* [Questions](#questions)
* [Suggested Approach](#suggested-approach)
* [CART vs CHAID](#cart-vs-chaid)
* [Random Forest vs Decision Trees](#random-forest-vs-decision-trees)
    * [Random Forests](#random-forests)
    * [Disadvantage of Decision Tree](#disadvantage-of-decision-tree)
    * [Advantages of Random Forest](#advantages-of-random-forest)
    * [Limitations of Random Forests](#limitations-of-random-forests)
* [Summary](#summary)
* [Question](#question-1)
* [References](#references)

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

# CART vs CHAID

| CART                                                                                                                                                                                                                                              | CHAID                                                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Classification and Regression Trees                                                                                                                                                                                                               | Chi-Square Automatic Interaction Detection                                                                                                                                                                  |
|                                                                                                                                                                                                                                                   | A chi-square test is a statistical hypothesis test where the test statistic is chi-squared distribution. This test is used to compare the interaction of independent variables with the dependent variable. |
| creates a binary tree-a tree with a maximum of two child nodes for any node in the tree                                                                                                                                                           | CHAID can create non-binary trees which tend to be shallower than the binary trees                                                                                                                          |
| Sometimes CART is not appropriate to visualise the important features in a dataset because binary trees tend to be much deeper and more complex than a non-binary tree- a tree which can have more than two child nodes for any node in the tree. | This makes CHAID trees easier to look at and understand the important drivers (features) in a business problem. The process of finding out important features is also referred to as driver analysis.       |
| Works on both regression and classification problems                                                                                                                                                                                              | Intended to work with categorical/discretized targets                                                                                                                                                       |
| uses Pruning                                                                                                                                                                                                                                      | uses truncation by making a node split only if a significance criterion is fulfilled                                                                                                                        |
| works on small dataset as well                                                                                                                                                                                                                    | usually works on large dataset unless bonferroni correction is used                                                                                                                                         |
| can overfit                                                                                                                                                                                                                                       | tries to prevent overfitting right from the start                                                                                                                                                           |
| preferred for prediction                                                                                                                                                                                                                          | preferred for driver analysis (interpreting model, understanding driving factors)                                                                                                                           |

# Random Forest vs Decision Trees

## Random Forests
- Ensemble of Decision Trees
- A different subset of the training data is used to train each tree
- Predicting Output
    - Classification: Number of votes from all trees
    - Regression: Average result from all trees
- A randomly selected subset of variables is used to split each node
    - The number of variables used is decided by setting the parameter mtry in R (max_features in Python)
    - Smaller subset of variables produces less correlation (lower error rate) but lower predictive power (high error rate)
    - Optimum range of values of mtry is quite wide

## Disadvantage of Decision Tree
- Trees have a tendency to overfit the training data.
- Splitting with multiple linear decision boundaries that are perpendicular to the feature space is not always efficient.
- It is not possible to predict beyond the range of the response variable in the training data in a regression problem. Suppose you want to predict house prices using a decision tree and the range of the the house price (response variable) is $5000 to $35000. While predicting, the output of the decision tree will always be within that range.

## Advantages of Random Forest
- No need to prune the trees of a forest.
- The OOB error can be calculated from the training data itself which gives a good estimate of the model performance on unseen data.
- It is hard for a random forest to overfit the training data.
- A random forest is not affected by outliers as much because of the aggregation strategy.

## Limitations of Random Forests
- Owing to their origin to decision trees, random forests have the same problem of not predicting beyond the range of the response variable in the training set.
- The extreme values are often not predicted because of the aggregation strategy. 
    - To illustrate this, let’s take the house prices example, where the response variable is the price of a house. 
    - Suppose the range of the price variable is between $5000 and $35000.
    - You train the random forest and then make predictions.
    - While making predictions for an expensive house, there will be some trees in the forest which predict the price of the house as $35000, but there will be other trees in the same forest with values close to $35000 but not exactly $35000.
    - In the end, when the final price is decided by aggregating using the mean of all the predictions of the trees of the forest, the predicted value will be close to the extreme value of $35000 but not exactly $35000.
    - Unless all the trees of the forest predict the house price to be $35000, this extreme value will not be predicted.

# Summary
To summarise, you should start with a logistic regression model. Then, build a decision tree model. While building a decision tree, you should choose the appropriate method: CART for predicting and CHAID for driver analysis. If you are not satisfied with the model performance mentioned so far, and you have sufficient time and resources in hand, then go ahead and build more complex models like random forests and support vector machines.

# Question
**On a binary classification task, a logistic regression model gives 67% accuracy on the training set, a decision tree model gives 82% accuracy and an SVM model with a linear kernel gives 69% accuracy. What is NOT a likely reason for the superior results of the tree model?**

| Statement                                            | True / False |
|------------------------------------------------------|--------------|
| The dataset is nonlinear.                            | False        |
| The tree maybe overfitting.                          | False        |
| The dataset contains lots of categorical attributes. | False        |
| The dataset contains only continuous attributes      | True         |
 
A decision tree generally does not perform well on a dataset with a lot of continuous variables. Since the tree is performing well on the dataset, it is highly unlikely that the data has only continuous attributes.

# References
[Tree Based Algorithms: A Complete Tutorial from Scratch](https://www.analyticsvidhya.com/blog/2016/04/tree-based-algorithms-complete-tutorial-scratch-in-python/)
