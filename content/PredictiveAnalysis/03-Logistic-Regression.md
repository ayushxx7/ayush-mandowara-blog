---
title: Logistic Regression
description: Fundamentals of Logistic Regression
date: "2021-07-31"
image: "linear_vs_logistic_regression.jpg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

# Purpose
My notes on Logistic Regression

# Exponential Functions
## Laws of Exponents
- $x^a.x^b = x^{a+b}$
- $(xy)^a=x^a.y^a$
- $\frac{x^a}{x^b}=x^{a−b}; x \neq 0$
- $(\frac{x}{y})^a=\frac{x^a}{y^a}; y \neq 0$
- $x^0 = 1; x \neq 0$
- $\frac{1}{x^a}=x^{-a}; x \neq 0$
- $(x^a)^b = x^{a*b}$

# Logarithm Property

Logarithm helps us redefine exponents.
$\log_{b}a$ means what power does b have to be raised to, to get a.

$log_{b}(a) = c \Leftrightarrow b^c = a;$ where 
- b is base
- c is exponent 
- a is argument

![Rules](./constraints_of_log.png)

#### Note
When rewriting an exponential equation in log form or a log equation in exponential form, it is helpful to remember that the base of the logarithm is the same as the base of the exponent.

Read more about logarithms [here](https://www.mathplanet.com/education/algebra-2/exponential-and-logarithmic-functions/logarithm-and-logarithm-functions) and [here](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-intro/v/logarithms?modal=1)

## Solving Equations containing exponents
#### Q: $6^x = 20$
- $6 = 10^{log6}$
- $20 = 10^{log20}$
- $(10^{log6})^x = 10^{log20}$
- $10^{log6.x} = 10^{log20}$
- $x.\log6 = \log20$
- $x=\frac{log20}{log6} \approx 1.67$

## Properties of Logarithms
#### Product Property
##### $\log_{b}ac = \log_{b}a + log_{b}c;$ 
where a,b,c are positive numbers, $b \neq 1$

#### Quotient Property
##### $\log_{b}\frac{a}{c} = \log_{b}a - log_{b}c;$ 
where a,b,c are positive numbers, $b \neq 1$

#### Power Property
##### $\log_{b}a^c = c.\log_{b}a$
where c is a real number, a and b are positive numbers, $b \neq 1$

# References
- https://www.mathplanet.com/education/algebra-1/exponents-and-exponential-functions/properties-of-exponents
- https://www.mathplanet.com/education/algebra-2/exponential-and-logarithmic-functions/logarithm-property
- https://www.rapidtables.com/math/algebra/Logarithm.html
- https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:log-intro/v/logarithms?modal=1
