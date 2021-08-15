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
Naive Bayes is a probabilistic classifier which returns the probability of a test point belonging to a class, using Bayes' theorem.

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
- The simplest form of Bayes’s rule is in odds form:
    - Posterior odds = Prior odds x Likelihood ratio
    - where the posterior odds are the odds (the ratio of probabilities) for two competing hypotheses.

## Note
- Sample Space for Joint Probability remains same while it changes for Conditional probability


# Takeaways
- Conditional Probability: It is the probability of an event occurring given some other event has already occurred
- Joint Probability: It is the probability that event A and event B both have occurred
- Bayes Theorem: P(A|B) = P(A)*P(B|A)/P(B) can be derived using a two-way contingency matrix
- Sample Space for Joint Probability remains same while it changes for Conditional probability

# Principles from Bayes Thinking
1. Remember your priors
2. Imagine your theory's wrong. Would the world look different?
3. Update incrementally (snowflakes of evidence)

# MAP - Maximum Aposteriori Classification
- If $P(C_{1}/X) > P(C_{2}/X)$
- X is classified as $C_1$

# Naive Bayes Assumption
- Variables are independent given class 
- or, variables are conditionally independent
- decreases computation time of the algorithm

# Terms used in Naive Bayes Classification
$P(C_i|X = \frac{P(X|C_i)P(C_i)}{P(X)}$

## Prior Probability
- $P(C_{i})$
- It is the probability of occurrence of an event before collection of new data or features.
- heavy influence on Bayesian Classification

## Likelihood Function
- $P(X|C_i)$
- Maximises probability of observing data
- tells us the likelihood of a data point occurring in a particular class

## Denominator
- The effect of the denominator P(x) is not incorporated while calculating probabilities as it is the same for both the classes and hence, can be ignored without affecting the final outcome.# Reference

## Posterior Probability
- $P(C_i|X)$
- The probability of event occurring after incorporating new evidence in the data

# Takeaways
- For classification, we don't need to compute the denominator, we can just compare the numerators for both cases (as the denominator will anyways cancel out) and choose which class the test point belongs to.
- We assume that variables are conditionally independent when implementing Naive Bayes classification
- Prior probability can have large impact on New (Posterior) probability while likelihood function helps in classifying where the test points lies (i.e. in which class)

# References

- http://www.malinc.se/math/latex/basiccodeen.php
- https://stats.stackexchange.com/questions/74082/what-is-the-difference-in-bayesian-estimate-and-maximum-likelihood-estimate
- https://tex.stackexchange.com/questions/595/how-can-i-get-bold-math-symbols
- https://cdn.upgrad.com/UpGrad/temp/e3ff7cbe-4892-467f-8869-5eb56b889fda/Worldly%20Wisdom%20in%20an%20Equation.pdf
- https://stackoverflow.com/questions/10059594/a-simple-explanation-of-naive-bayes-classification
- https://math.stackexchange.com/questions/23093/could-someone-explain-conditional-independence
