---
title: Maximum Likelihood Estimation
description: Maximum Likelihood Estimation or MLE 
date: "2021-08-29"
image: "regression.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "maximum-likelihood-estimate", "classification", "regression"]
---

<!-- vim-markdown-toc GFM -->

* [Purpose](#purpose)
* [Cost Function](#cost-function)
* [Closed Form](#closed-form)
* [Iterative Method](#iterative-method)
* [Random Variables](#random-variables)
* [Maximum Likelihood Cost Function](#maximum-likelihood-cost-function)
  * [What is MLE](#what-is-mle)
* [Finding Parameters of Gaussian Distribution through MLE](#finding-parameters-of-gaussian-distribution-through-mle)
  * [Note](#note)
* [Maximum Likelihood Estimate for Discrete Distributions](#maximum-likelihood-estimate-for-discrete-distributions)
  * [Bernoulli Distribution](#bernoulli-distribution)
  * [Logistic Regression](#logistic-regression)
* [Obtaining Parameters using Newton Raphson Method](#obtaining-parameters-using-newton-raphson-method)
  * [Elements of Hessian Matrix](#elements-of-hessian-matrix)
* [Application of MLE: Naive Bayes Classifier](#application-of-mle-naive-bayes-classifier)
  * [Assumptions](#assumptions)
* [References](#references)

<!-- vim-markdown-toc -->

# Purpose
Notes about Maximum Likelihood Cost Function

# Cost Function
$\displaystyle J(m, c) = \sum_{i=1}^N(y_i - yp_i)^2 = \sum_{i=1}^N(y_i - (mx_i+c))^2$

# Closed Form
- Take partial derivate and equate to 0 
- $\displaystyle \frac{\partial j}{\partial m} = 0$

- $\displaystyle \frac{\partial j}{\partial c} = 0$
- Solve for Two equations, Two unknowns

# Iterative Method
- Assume a starting point for m, c and update them by taking negative gradient values iteratively till the values of m & c don't change much.
- $
\begin{bmatrix}
m \\ 
\\
c
\end{bmatrix}^{new}
$=$
\begin{bmatrix} 
m
\\
\\
c
\end{bmatrix}^{old}
$
$-\eta 
\begin{bmatrix}
\frac{\partial J}{\partial m}
\\ 
\\
\frac{\partial J}{\partial c} \\ 
\end{bmatrix}_{\begin{bmatrix}m\\c\end{bmatrix}^{old}}
$

# Random Variables
A random variable is a variable whose possible values are numerical outcomes of a random phenomenon or event.

There are two types of random variables 
- Discrete like numbers on a dice
- Continuous like length of hair

# Maximum Likelihood Cost Function
Suppose we have n samples from independent and identically distributed observations, coming from an unknown probability density function f(x|theta), where theta is unknown.

So, how to arrive at the log-likelihood function? Here are the steps to sum it up:

1. Making a Joint Density Function.

    $\displaystyle J(\theta) = P(x_1, x_2, \ldots, x_n; \theta)$

2. Finding the Likelihood function, x samples are fixed “parameters” and theta will be the function’s variable.

    $\displaystyle L(\theta) = \prod_{i=1}^{N}P(x_1;\theta) \bigg|$ Independence Assumption

3. For further simplification, we make it Log-Likelihood function, as it's easier to deal with log.

    $\displaystyle l(\theta) = log(L(\theta)) = \sum_{i=1}^NlogP(x_i;\theta) \bigg|$ taking log

We can take log because log is a monotonic function. We observe that the max/min values obtained through log is also applicable to the product form. Moreover, it helps in simplifying the equation.

## What is MLE
MLE is basically a technique to find the parameters that maximise the likelihood of observing the data points assuming they were generated through a given distribution.

# Finding Parameters of Gaussian Distribution through MLE
- Parameters for Gaussian Distribution are $\mu$ and $\sigma$
- PDF for Normal Distribution:  
$\displaystyle f(x)  = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

$\displaystyle P(x_i;\theta) = p(x_i; \mu, \sigma) = \frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

$\displaystyle l(\theta) = \ln(p(x_i;\theta)) = J(\mu, \sigma) = \sum_{i=1}^N\bigg[\ln\frac{1}{\sqrt{2\pi}\sigma} - \frac{(x_i-\mu)^2}{2\sigma^2}\bigg]$

Now we have a cost function, we can use iterative or closed form method to solve the equation.

- $\displaystyle J(\mu, \sigma) = \sum_{i=1}^N\bigg[\ln\frac{1}{\sqrt{2\pi}\sigma} - \frac{(x_i-\mu)^2}{2\sigma^2}\bigg]$

    $\displaystyle =-\sum_{i=1}^{N}ln(\sigma\sqrt{2\pi}) - \frac{(x_i-\mu)^2}{2\sigma^2}$

- $\displaystyle \frac{\partial J}{\partial \mu} = 0 \implies \frac{\partial J}{\partial \mu}(-\sum_{i=1}^N\frac{(x_i-\mu)^2}{2\sigma^2}) = 0$

    $\displaystyle = \frac{-1}{2\sigma^2}\sum_{i=1}^{N}2(x_i-\mu)(-1) = 0$

- $\displaystyle \sum_{i=1}^{N}x_i = \sum_{i=1}^{N}\hat \mu \implies \boxed{\hat \mu = \frac{\sum x_i}{N}}$

Similarly, we can find out the value for standard deviation ($\sigma$)
- $\boxed{\displaystyle \hat \sigma = \sqrt{\frac{\sum_{i=1}^{N}(x_i-\hat \mu)^2}{N}}}$

## Note
Ordinary Least Squares is the Maximum Likelihood for a Linear Model.

# Maximum Likelihood Estimate for Discrete Distributions
## Bernoulli Distribution
The Bernoulli distribution models events with two possible outcomes: either success or failure.

- PMF of Bernoulli Distribution
    - p, if x = 1
    - 1-p, if x = 0
    - 0, if x does not belong in $R_x$ (Support)

The likelihood for p based on X is defined as the joint probability distribution of X1, X2, . . . , Xn. Since X1, X2, . . . , Xn are i.i.d random variables, the joint distribution is

$\displaystyle L(p;x) \approx f(x;p) = \prod_{i=1}^{n}f(x_i;p) = \prod_{i=1}^{n}p^x(1-p)^{1-x}$

Taking log,

$\displaystyle \ln f = \sum xi \ln p + (n - \sum x_i)\ln(1-p)$

Differentiating the log of L(p; x) with respect to p and setting the derivative to zero shows that this function achieves a maximum at

$\displaystyle \hat p = \sum_{i=1}^{N}\frac{x_i}{n}$

## Logistic Regression

**1. Starting with log form of MLE**
- $\displaystyle p(y;p) = \prod_{i=1}^{N}(y_i;\underline p)$
- $l(p) = \sum[y_i \ln \underline p + (1-y_i)\ln (1-\underline p)]$


**2. Sigmoid Function**
- $\displaystyle P(y_{i}|x_{i}) = \sigma(\beta_0 + \beta_1x_{i,1})$
  - Here $x_{i,j}: i \implies i^{th}\text{ sample and } j^{th} \text{feature}$
-  $\displaystyle \sigma(\beta_0+\beta_1x_{i,1})$ can be written as $\sigma \beta^{T}x_{i}$

- $\displaystyle \sigma(\beta^{T}x_{i}) = \frac{1}{1+e^{-\beta^{T}x_{i}}} = \frac{e^{\beta^{T}x_{i}}}{1+e^{\beta^{T}x_{i}}}$
- $\displaystyle P(1-y_{i}|x_{i}) = 1-\frac{e^{\beta^{T}x_{i}}}{1+e^{\beta^{T}x_{i}}} = \frac{1}{1+e^{\beta^{T}x_{i}}}$

- Note that we found out: 

  - $\displaystyle \Large \boxed {P(y_{i}|x_{i}) = \frac{e^{\beta^{T}x_{i}}}{1+e^{\beta^{T}x_{i}}}}$

  - $\displaystyle \Large \boxed {P(1-y_{i}|x_{i}) = \frac{1}{1+e^{\beta^{T}x_{i}}}}$

**3. Substituting the values in $\log$ expression**
- $\displaystyle l(\beta) = - \sum_{i=1}^{N}\ln(1+e^{\beta^{T}x_{i}}) + \sum_{i=1}^{N}(y_{i}\beta^{T}x_{i})$


**4. We can take partial derivate w.r.t $\beta_0 \;\& \beta_1$ and solve the equations using gradient descent**

- $\displaystyle \frac{\partial l(\beta)}{\partial \beta_1} = -\sum_{i=1}^{N}\frac{e^{\beta^{T}x_{i}}}{1+e^{\beta^{T}x_{i}}}x_{i,1} + \sum_{i=1}^{N}y_{i}x_{i,1}$

- $\large \displaystyle \frac{\partial l(\beta)}{\partial \beta_j} = \sum_{i=1}^{N}(y_{i} - p(y_{i}|x_{i}))x_{i,1}$
  - $y_{i}$ - actual value
  - $p(y_{i}|x_{i})$ - predicted value
  - $y_{i} - p(y_{i}|x_{i})$ - error term
- After simplification, it will turn into simple matrix multiplication, where we will take transpose of the $\beta$ matrix and multiply it with the error matrix.
- $\begin{bmatrix}e_1, e_2,\ldots,e_n\end{bmatrix}
    \begin{bmatrix}x_1\\x_2\\\ldots\\xn\end{bmatrix}
 $
- $\begin{bmatrix}x_1,x_2,\ldots,xn\end{bmatrix}\begin {bmatrix}e_1\\ e_2\\\ldots\\e_n\end{bmatrix}
$
- $\large \triangledown_{\beta}l(\beta) = 
\begin{bmatrix}\frac{\partial l(\beta)}{\partial \beta_0}
\\
\\
\frac{\partial l(\beta)}{\partial \beta_1}
\end{bmatrix} =
\begin{bmatrix}x_{1,0}, x_{2,0},\ldots,x_{n,0}
\\
x_{1,1}, x_{2,1},\ldots,x_{n,1}
\end{bmatrix}
\begin{bmatrix}e_1\\e_2\\\ldots\\e_n\end{bmatrix}
=X^{T}e
 $
- The matrix multiplication can be carried by `np.matmul` in python
- Shape of X will be $N \times (d+1)$ where 
  - d is the number of features
  - N is the number of observations
- Shape of $X^{T}$ (X-Transpose) will be $(d+1) \times N$ where d is the number of features
  - d is the number of features
  - N is the number of observations

# Obtaining Parameters using Newton Raphson Method
- It is a second order method
- Gradient Descent: $\displaystyle \beta_j^{new} = \beta_j^{old} - \eta \frac{\partial l(\beta)}{\partial \beta_j}$
- Newton Raphson: $\displaystyle \beta_j^{new} = \beta_j^{old} - H^{-1} \frac{\partial l(\beta)}{\partial \beta_j}$

## Elements of Hessian Matrix

- $\displaystyle \large \frac{\partial l(\beta)}{\partial \beta_k \partial \beta_j}$
- $\large \displaystyle \frac{\partial l(\beta)}{\partial \beta_j} = \sum_{i=1}^{N}(y_{i} - p(y_{i}|x_{i}))x_{i,1}$
- $\displaystyle \large \frac{\partial l(\beta)}{\partial \beta_k \partial \beta_j} = \sum_{i=1}^{N}\frac{(1+e^{\beta^{T}x_{i}})e^{\beta^{T}x_{i}} x_{i,k} - e^{\beta^{T}x_{i}}e^{\beta^{T}x_{i}}x_{i,k}}{(1+e^{\beta^{T}x_{i}})^2}x_{i,j}$
- $\displaystyle \sum_{i=1}^{N}P(y_{i}|x_{i}) + (P(y_{i}|x_{i}))^2x_{i,k}.x_{i,j}$
- $\displaystyle -\sum_{i=1}^{N}(P(y_{i}|x_{i})(1-P(y_{i}|x_{i})))$

# Application of MLE: Naive Bayes Classifier
Two class classifier:
- $\displaystyle P(C=C_1|x)$
- $\displaystyle P(C=C_2|x)$
- $\displaystyle P(C=C_1|x) + P(C=C_2|x) = 1$

---

$\displaystyle \text{posterior probability} = \frac{\text{conditional probability.prior probability}}{evidence}$
- The posterior probability, in the context of a classification problem, can be interpreted, “given the feature vector $x_i$ what is the probability of sample "$i$" belonging to class "$c_j$”?

- $\displaystyle P(\text{Female}|x) = \frac{P(x|\text{Female}).P(\text{Female})}{P(x)}$

- $\displaystyle P(\text{Male}|x) = \frac{P(x|\text{Male}).P(\text{Male})}{P(x)}$
- If $P(\text{Female}|x) > P(\text{Male}|x)$, we say that the person is female
- We don't need to care about P(x) when doing comparison

- Learning: from the data, we can find out $\mu_m, \mu_f, \sigma_m, \sigma_f$ by fitting Gaussian distributions over each class

## Assumptions
- Distribution is Gaussian
  - if the distribution is not Gaussian, then the predictions will be bad
- Naive Assumption 
  - features are conditionally independent
  - $\displaystyle  P(X|Y,Z) = P(X|Z)$
  - lets us break down features into products
  - $\displaystyle P(x_1,x_2|c) = P(x_1|c).P(x_2|c)$ 

# References
- [Why choose Iterative Method over Closed Form method](https://stats.stackexchange.com/questions/23128/solving-for-regression-parameters-in-closed-form-vs-gradient-descent)
- [Closed form expressions Wiki](https://en.wikipedia.org/wiki/Closed-form_expression)
- [Understanding Random Variables](https://math.stackexchange.com/questions/1584450/understanding-random-variables)
- [Difference between likelihood and probability](https://stats.stackexchange.com/questions/2641/what-is-the-difference-between-likelihood-and-probability)
- [Maximum Likelihood Estimate in Layman Terms](https://stats.stackexchange.com/questions/112451/maximum-likelihood-estimation-mle-in-layman-terms)
- [Maximum Likelihood estimation of normal distribution](https://daijiang.name/en/2014/10/08/mle-normal-distribution/)
- [Bernoulli Distribution](https://www.statlect.com/probability-distributions/Bernoulli-distribution)
- [MLE of Logistic Regression](https://czep.net/stat/mlelr.pdf)
- [Gradient Descent for Logistic Regression - Simplified](http://ucanalytics.com/blogs/gradient-descent-logistic-regression-simplified-step-step-visual-guide/)
- https://katex.org/docs/supported.html
- [Logistic Regression and Newton Raphson](https://statacumen.com/teach/SC1/SC1_11_LogisticRegression.pdf)
- [Hessian of a Logistic function](https://stats.stackexchange.com/questions/68391/hessian-of-logistic-function)
- [Logistic classification model - Maximum Likelihood Estimate](https://www.statlect.com/fundamentals-of-statistics/logistic-model-maximum-likelihood)
- [Maximum Likelihood Estimation](https://faculty.washington.edu/ezivot/econ583/mleLectures.pdf)
- [MLE, Bayesian Classifier](http://www.cs.cmu.edu/~tom/10601_sp08/slides/NBayes-1-28-2008-plus.pdf)
- [Naive Bayes and Gaussian Bayes Classifier](https://www.cs.toronto.edu/~urtasun/courses/CSC411/tutorial4.pdf)
