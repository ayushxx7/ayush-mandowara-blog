---
title: Naive Bayes Classification
description: Fundamentals of Naive Base Model
date: "2021-08-15"
image: "naive_bayes.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

# Purpose
Notes on Naive Bayes Classifier

# About
Naive Bayes is a probabilistic classifier which returns the probability of a test point belonging to a class rather than the label of the test point.

# Uses
It is used for text classification such as when identifying whether an email is spam or ham.

# Conditional Probability

$Probability = \frac{\text{Number of favorable outcomes}}{\text{Total Number of Outcomes}}$

`Prior`: Independent probability of an event happening
- Ex: P(Play) = 66% [or P(A)]

`Posterior`: Probability of an event happening, given some other event has also occurred 
- Ex: P(Play|Rain) = 10% [or P(A given B)]

## Need for Conditional Probability
Conditional probability is needed to understand relative probabilities, which is more often the case in the real world scenarios instead of looking into the absolute probability of events in isolation.

# Bayes Theorem

## Two Way Contingency Matrix

| B\A            | A = Win | A = Loss | Total |
|----------------|---------|----------|-------|
| B = Century    | 10      | 2        | 12    |
| B = No Century | 50      | 38       | 88    |
| Total          | 60      | 40       | 100   |

Here: A means India Win and B means Sachin's Century

$\text{P(A)} = \frac{60}{100}$

$\text{P(B)} = \frac{12}{100}$

## Joint Probability
- P(A,B) = Indian Win and Sachin's Century
- $P(A \cap B) = \frac{10}{100} = 10\% = P(B\cap A)$
- $P(A \cap B) = P(A|B).P(B) = P(B|A).P(B)$
- Sample Space Remains Same

## Conditional Probability
- India wins, given that Sachin has scored a century
- $\text{P(A|B)} = \frac{10}{12} = 83.3\%$ 
- $P(A|B) = \frac{10}{12} = \frac{\frac{10}{12}}{\frac{12}{100}} = \frac{P(A \cap B)}{{P{(B)}}}$
- Sample space gets reduced to the number of times the event we are conditioning on occurs


## Bayes Theorem
Since, $P(A \cap B) = P(A|B).P(B) = P(B|A).P(B)$
- $\boldsymbol{P(A|B) = \frac{P(B|A).P(A)}{P(B)}}$
- $\boldsymbol{P(B|A) = \frac{P(A|B).P(B)}{P(A)}}$

## Note
- Sample Space for Joint Probability remains same while it changes for Conditional probability


# Takeaways
- Conditional Probability: It is the probability of an event occurring given some other event has already occurred
- Joint Probability: It is the probability that event A and event B both have occurred
- Bayes Theorem: P(A|B) = P(A)*P(B|A)/P(B) can be derived using a two-way contingency matrix
- Sample Space for Joint Probability remains same while it changes for Conditional probability

# Reference
- http://www.malinc.se/math/latex/basiccodeen.php
- https://stats.stackexchange.com/questions/74082/what-is-the-difference-in-bayesian-estimate-and-maximum-likelihood-estimate
