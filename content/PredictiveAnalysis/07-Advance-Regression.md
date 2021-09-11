---
title: Advance Regression - Ridge, Lasso, Gradient Descent
description: constrained and unconstrained minimisation
date: "2021-09-09"
image: "regression.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "linear-regression"]
---

<!-- vim-markdown-toc GFM -->

* [Constrained Minimization](#constrained-minimization)
* [Ridge and Lasso Regression](#ridge-and-lasso-regression)
    * [Signature of overfitting in Polynomial Regression](#signature-of-overfitting-in-polynomial-regression)
    * [Ridge](#ridge)
    * [Lasso](#lasso)
* [Unconstrained Minimization](#unconstrained-minimization)
* [Closed form](#closed-form)
* [Gradient Descent](#gradient-descent)
    * [1D Gradient Descent](#1d-gradient-descent)
    * [2D Gradient Descent](#2d-gradient-descent)
* [Metrics](#metrics)
    * [RSS](#rss)
    * [Mean Square Error](#mean-square-error)
    * [Root Mean Square Error](#root-mean-square-error)
* [SLR](#slr)
* [Benefits of Using Matrices](#benefits-of-using-matrices)
    * [SLR Equation in Matrix Form](#slr-equation-in-matrix-form)
* [MLR](#mlr)
* [Question](#question)
* [References](#references)
    * [- https://online.stat.psu.edu/stat462/node/132/](#--httpsonlinestatpsuedustat462node132)

<!-- vim-markdown-toc -->

# Constrained Minimization
Constrained minimisation is a process in which we try to optimise an objective function with respect to some variables in the presence of the constraints on the variables or the function. In our case, the objective function is a cost function.
- Ridge/Lasso Regression and SVM use Constrained Minimization
- The solution to the overall minimisation problem is the point where the error is minimum while satisfying the additional constraint.

# Ridge and Lasso Regression
- Adding constraints over the weights is called regularization and ridge and lasso are two common techniques used for this purpose.

## Signature of overfitting in Polynomial Regression
- The weights of the coefficients are very large
- In regularization, we combat overfitting by controlling the model's complexity, i.e. by introducing an additional term in our cost function in-order to penalize large weights. This biases our model to be simpler, where simpler is weights of smaller magnitude (or even zero). We want to make the weights smaller because complex models and overfitting are characterized by large weights.
- Adding constraints over the weights / coefficients is called regularization and it helps in resolving overfitting issue because having large weights is one of the signs off overfitting so if we put a constraint over weights, that will make sure large weights are not assigned and hence model does not overfit. 

## Ridge
- Constraint over sum of squared weights ($\sum w_i^2$ &lt; $r^2$)
- represents a region bounded by a circle in 2D space
- Ordinary least squares with L2 regularisation is known as Ridge Regression.
- In L2 regularisation, large weights are being penalized much more
- Ex: $\displaystyle \sum_{i=1}^{9}w_i^2 \leq 1000$

## Lasso
- Constraint over sum of absolute weights ($\sum |w_i|$ &lt; $r^k$)
- represents a region bounded by a square in 2D space
- Gives sparse solution
- In L1 regularization the model's parameters become sparse during optimization, i.e. it promotes a larger number of parameters w to be zero. This is because smaller weights are equally penalized as larger weights
- This sparse property is often quite useful. For example, it might help us identify which features are more important for making predictions, or it might help us reduce the size of a model (the zero values don't need to be stored).
- Ex: $\displaystyle \sum_{i=1}^{9}|w_i| \leq 100$


# Unconstrained Minimization
Unconstrained minimisation, on the other hand, is a process in which we try to optimise the objective function with respect to some variables without any constraints on those variables.
- Linear Regression and Logistic Regression use Unconstrained Minimization
- There is no explicit condition on the parameters but they are in turn calculated with the condition that the cost function needs to be minimized.
- Gradient Descent is one way of solving unconstrained minimisation

$J(\theta) = 1.2(\theta - 2)^2 + 3.2$

# Closed form
$J'(\theta) = 0 \implies 2.4(\theta - 2) \implies \theta_{opt} = 2$

# Gradient Descent
## 1D Gradient Descent

$\displaystyle \theta_{new} = \theta_{old} - \eta\frac{\partial J}{\partial \theta}|_{\theta = \theta_{old}}$

$\displaystyle \theta_{new} = \theta_{old} - \eta(2.4){(\theta_{old}-2)}$

Let's assume the following starting conditions:
- $\theta = 1$
- $\eta = 0.1$

Substituting,

- $\theta_{new} = 1 - 0.1(2.4)(-1) = 1.24$
- $\theta_{new} = 1.24 - 0.1(2.4)(-0.76) = 1.42$

In gradient descent, you start with some initial value and then gradually approach the optimal solution.

Steps of Gradient Descent
1. We try to find the optimal minima by using Gradient Descent algorithm
2. Choose the values of eta (learning rate) and initial theta (optimal value to be obtained)
3. Use the formula
    - $\displaystyle \theta_{new} = \theta_{old} - \text{learning rate}*(\text{partial derivative of cost function over } \theta_{old})$
4. Continue substituting new value to old value till the value becomes similar over several iterations

In other words,

1. Choose a starting point $X_0$ 
2. Beginning at $X_0$, generate a sequence of iterates $X^{inf}_{k=o}$ with respect to a cost function (f) value which has to be minimized until a solution with sufficient accuracy is found or until no further progress can be made.(inf=infinity)

## 2D Gradient Descent

$\displaystyle \triangledown J(\theta_{1}, \theta_2) = 0$

$\displaystyle \triangledown J = 
\begin{bmatrix}
\frac{\partial J}{\partial \theta_1} \\ 
\\
\frac{\partial J}{\partial \theta_2} \\
\end{bmatrix}
\begin{matrix}
= 0 \\
\\
= 0
\end{matrix} \implies
\begin{bmatrix}
\theta_1^{new} \\ 
\\
\theta_2^{new}
\end{bmatrix}
$=$
\begin{bmatrix} 
\theta_1^{old}
\\
\\
\theta_2^{old}
\end{bmatrix}
$
$-\eta 
\begin{bmatrix}
\frac{\partial J}{\partial \theta_1}
\\ 
\\
\frac{\partial J}{\partial \theta_2} \\ 
\end{bmatrix}_{\theta=\theta^{old}}
$

**For the case of Linear Regression**

$\displaystyle J(m,c) = \sum_{i=1}^{n}(y_i-(mx_i+c))^2$

$
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

$\displaystyle \frac{\partial J}{\partial m} = 2\sum_{i=1}^{n}(y_i-(mx_i+c))(-x_i)$

$\displaystyle \frac{\partial J}{\partial c} = 2\sum_{i=1}^{n}(y_i-(mx_i+c))(-1)$

# Metrics
- Overall sense of error of the model
- Smaller the RSS, closer is the model fit

## RSS
$\displaystyle y_i = \beta_0 + \beta_1x_{i} + \epsilon_i$

$\displaystyle \hat y_i = \beta_0 + \beta_1x_{i}$

$RSS = \displaystyle \sum_{i=1}^{N}\epsilon_i^2 = \sum_{i=1}^{N}(y_i - \hat y_i)^2 = \sum_{i=1}^{N}(y_i - bo - b_1x_i)^2$

```py heading="RSS in Python"
import numpy as np
rss = np.sum(np.square(y-y_pred))
print(rss)
```

$\displaystyle \frac{\partial (RSS)}{\partial \beta_0} \implies \beta_0 = \bar y - \beta_1 \bar x$

$\displaystyle \frac{\partial (RSS)}{\partial \beta_1} \implies \beta_1 = \frac{\sum_{i=1}^{N}(x-\bar x)(y - \bar y)}{\sum_{i=1}^{N}(x-\bar x)^2}$

## Mean Square Error
$\displaystyle MSE = \frac{RSS}{n}$

```py heading="MSE in Python"
from sklearn.metrics import mean_squared_error as mse

print(mse(y_actual, y_true))
```

## Root Mean Square Error
$\displaystyle RMSE = \sqrt{MSE}$

```py heading="RMSE in Python"
print(mse**0.5)
```

# SLR
for i = i to n,
$\displaystyle y_{i} = \beta_0 + \beta_1x_{i} + \epsilon_i$ 

for n observations, equations can be written as:
- $y_{1} = \beta_0 + \beta_1x_{1}$
- $y_{2} = \beta_0 + \beta_1x_{2}$
- $\ldots$
- $y_{n} = \beta_0 + \beta_1x_{n}$

This can be written more efficient in matrix notation:

$\displaystyle \begin{bmatrix}y_1\\y_2\\\ldots\\y_{n}\end{bmatrix} = 
\begin{bmatrix}1&x_1\\1&x_2\\\ldots&\ldots\\1&x_{n}\end{bmatrix}
\begin{bmatrix}\beta_0\\\beta_1\end{bmatrix} +
\begin{bmatrix}\epsilon_1\\\epsilon_2\\\ldots\\\epsilon_n\end{bmatrix}
$

In more concise form:

$\displaystyle Y = X\beta + \epsilon$

here,
- Y: Response Vector
- X: Design matrix
- $\beta$: Coeffient Vector
- $\epsilon$: Error Vector

# Benefits of Using Matrices
- Formulae become simpler, and more compact and readable.
- Code using matrices runs much faster than explicit ‘for’ loops. 
- Python libraries, such as NumPy, help us build n-dimensional arrays, which occupy less memory than Python lists and computation is also faster.

## SLR Equation in Matrix Form
$\displaystyle \widehat{\beta}=(X^{T}.X)^{-1}.X^{T}.Y$

```py heading="Implementing equation in Python"
beta_hat = np.linalg.inv(X_mat.T.dot(X_mat)).dot(X_mat.T).dot(Y)
```

# MLR
for i = i to n,
- $\displaystyle y_{i} = \beta_0 + \beta_1x_{i,1} + \beta_2x_{i,2} + \ldots + \beta_kx_{i,k} + \epsilon_i$,  
- where k is the number of variables in the model

Matrix Notation:

$\displaystyle \begin{bmatrix}y_1\\y_2\\\ldots\\y_{n}\end{bmatrix} = 
\begin{bmatrix}1&x_{1,1} & x_{1, 2}\ldots&x_{1,k}\\1
&x_{2,1} & x_{2, 2}\ldots&x_{2,k}\\ 
\ldots&\ldots\\1&
x_{n,1} & x_{n, 2}\ldots&x_{n,k}\\ 
\end{bmatrix}
\begin{bmatrix}\beta_0\\\beta_1\\\beta_2\\\ldots\\\beta_k\end{bmatrix} +
\begin{bmatrix}\epsilon_1\\\epsilon_2\\\ldots\\\epsilon_n\end{bmatrix}
$

Dimension: $\displaystyle Y(n,1) = X(n, k+1).\beta(k+1) + \epsilon(n,1)$

It can still be written as:

$\displaystyle Y = X\beta + \epsilon$

here,
- Y: Response Vector
- X: Design matrix
- $\beta$: Coeffient Vector
- $\epsilon$: Error Vector

Residual: $\displaystyle \Large \epsilon = \normalsize Y - X\beta$

# Questions
**How will you identify the presence of heteroscedasticity in the residuals?**
- Plot residuals vs the predicted values and see of there is a consistent change in the residuals as we move from left of the x axis to the right.

---

**How would you check for the assumptions of Linear Regression?**
- Scatter Plot of residuals vs y_pred
- Histogram Plot of residuals

---

# References
- [Plot best fit line - Libre Office](https://www.youtube.com/watch?v=f4_GwWdUNqI)
- https://mat.gsia.cmu.edu/classes/QUANT/NOTES/chap4.pdf
- https://towardsdatascience.com/understanding-the-ols-method-for-simple-linear-regression-e0a4e8f692cc
- https://online.stat.psu.edu/stat462/node/132/
-
