---
title: Model Selection
description: which model to use for which scenario 
date: "2021-08-18"
image: "model_selection.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

# Purpose
The central issue in all of machine learning is how do we extrapolate learnings from a finite amount of available data to all possible inputs ‘of the same kind’? Training data is always finite, and yet, the model is supposed to learn all about the task at hand from it and perform well on unseen data. 

# Choice of Model Selection
- Trial and Error
- Domain Knowledge

## Practical Issues
1. Type of Data
2. Data Quality
3. Dimensionality of data

## Domain Knowledge
Knowledge about the particular business domain of which you are trying to solve a particular problem. 

It influences 
- model selection
- model evaluation
- model comparison

## Class of Models
Different Models can have properties to deal with the following different kinds of data:

1. High dimensional data
2. Noisy Data
3. Real time data
4. Large amount data
5. Missing data

# Occam’s Razor 
- Making your model is as simple as possible but no simpler than that or, in other words, a model should be as simple as possible but robust.
- When in doubt, choose a simpler model
- Occam’s razor does not suggest that a model should be unjustly simplified until no further simplification is possible. It suggests that when faced with a trade-off between a complex and a simple model, with all other things being roughly equal, you are better off choosing the simpler one.

# Which model should be picked
We must never use training data for evaluation
## Example
Learning to Drive

## Question
Which of these is the simplest regression model

| Model                  | Simplicity Level |
|------------------------|------------------|
| $Y = 3x + 0.005z + w$  | 2                |
| $Y = x = 58z + \log w$ | 3                |
| $Y = x + 3w$           | 0                |
| $Y = 2x + e^2$         | 1                |


# System
- Existing way of doing things 
## Example
- Manual selection of spam emails by a team of technicians

# Model
- Input => Model => Output
- tries to mimic the system, such that it is no longer required
## Example
- Naive Bayes classifier to identify Spam and Ham emails

## Relation between learning algorithm and model
- A learning algorithm learns from training data and produces a model.


# Hypothesis Class
Class of models that a learning algorithm with produce.

## Example 
- Random Forest will always produce Decision Tress 
- SVM will always produce Linear Model.

# Model complexity
1. Simpler models are usually more 'generic'
    - Simple models can work on unseen data
    - Example: Studying for exams vs Understanding principles

2. Simpler models require fewer training samples
    - Example: Studying for exams vs Understanding principles
    - usually data available is limited 

3. Simpler models are more robust
    - Example: Change of exam pattern
    - small changes in training data will not make too much difference

4. Simpler models make more errors in training
    - Example: Competitive Exams
    - simpler model will outperform on test set because of overfitting

# Advantages of Simplicity
- generalisability
- robustness
- requirement of fewer assumptions
- less data required for learning

## Ways of measuring simplicity
- choice of simpler functions
- fewer model parameters
- usage of lower degree polynomials


# Overfitting
- Model does very well on training data but fails or performs poorly on testing data
- Memorizing the training data completely instead of generating an abstract pattern. Essentially, it is learning from the noise in the data as well.
- It is a consequence of high model complexity

## Example
- Studying for exams (pattern specific, complex) vs Understanding principles (first principle, simple)
- $R^2$ value will be $0.8$ on training but $0.3$ on test set.

# Bias vs Variance Tradeoff
![BiasVsVariance](./bias_vs_variance.png)

## Variance
- How sensitive is the model to input data
- High Complexity => High Variance
- Consistency of Mode
- Variance refers to changes in the model as a whole when trained on a different data set rather than the variance in the predicted values of a single model
- Variance measures how flexible the model is with respect to changes in the training data.

## Bias 
- How much error the model is likely to make on (future) test data
- Low Complexity => High Bias (or Simple Model => High Bias)
- Correctness of Model
- Bias measures how accurately a model can describe the actual task at hand.

A balance is required between Bias and Variance
- Model should be simple enough to be generalizable
- Model should be complex enough to make fewer errors
- Correctness vs Consistency trade-off
- We want both Bias and Variance to be low, however, decreasing bias increases variance and vice-versa.
## Example
- Cracking competitive exam
    - you need to know the fundamentals, but you also require some level of memorization

# Regularization
- Steps to reduce model complexity
- It is part of the learning algorithm
- Regularization is the process of deliberately simplifying models to achieve the correct balance between keeping the model simple and not too naive.
- Performed when the learning algorithm uses the training data to produce a model

# Takeaways
1. `Occam’s Razor` concept should be used when selecting a model. When everything else is the same, a simpler model should be preferred. However, we should make model so simple that it fails to make any worthwhile predictions.
2. `Bias Vs Variance`: The aim is to have low bias as well as low variance, however, decreasing bias leads to increasing variance. Hence, a trade-off is required. Low Bias leads to correctness, while low variance leads to consistency.
3. `Regularization` techniques are part of the learning algorithms and they have the objective to simplify model to achieve the optimal point where model is simple but not too naive.
4. `Overfitting` is a problem where model does well on training data but performs poorly on test data. This happens because model has learned from signal as well as noise i.e. model is too complex. Hence, we should prefer simpler models to avoid this problem.
