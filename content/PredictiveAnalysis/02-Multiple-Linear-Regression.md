---
title: Multiple Linear Regression
description: Fundamentals of Multiple Linear Regression
date: "2021-07-30"
image: "regression.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---


<!-- vim-markdown-toc GFM -->

* [Purpose](#purpose)
* [Effect of adding more variables on $R^2$](#effect-of-adding-more-variables-on-r2)
* [Formulation of Multiple Linear Regression](#formulation-of-multiple-linear-regression)
* [Interpretation of the coefficients](#interpretation-of-the-coefficients)
* [Some aspects of MLR are similar to Simple Linear Regression](#some-aspects-of-mlr-are-similar-to-simple-linear-regression)
* [New considerations when moving from SLR to MLR](#new-considerations-when-moving-from-slr-to-mlr)
* [Bias vs Variance - Infographic](#bias-vs-variance---infographic)
* [Multicollinearity](#multicollinearity)
    * [Multicollinearity affects](#multicollinearity-affects)
    * [Multicollinearity does not affect](#multicollinearity-does-not-affect)
* [How to detect Multicollinearity](#how-to-detect-multicollinearity)
    * [Detecting Multicollinearity = Detecting association in predictors](#detecting-multicollinearity--detecting-association-in-predictors)
    * [Variance Inflation Factor (VIF)](#variance-inflation-factor-vif)
    * [Dealing with multicollinearity](#dealing-with-multicollinearity)
* [Dealing with Categorical Variables](#dealing-with-categorical-variables)
* [Feature Scaling](#feature-scaling)
    * [Effect of scaling](#effect-of-scaling)
    * [MinMaxScaling](#minmaxscaling)
    * [Standardization](#standardization)
    * [Scaling Categorical Variables](#scaling-categorical-variables)
* [Model Assessment and Comparison](#model-assessment-and-comparison)
    * [Key Idea: Penalize modesl for using higher number of predictors](#key-idea-penalize-modesl-for-using-higher-number-of-predictors)
    * [Adjusted $R^2$ vs $R^2$](#adjusted-r2-vs-r2)
* [References](#references)

<!-- vim-markdown-toc -->

# Purpose
Notes on Multiple Linear Regression

# Effect of adding more variables on $R^2$
The R-squared will always either increase or remain the same when you add more variables. Because you already have the predictive power of the previous variable so the R-squared value can definitely not go down. And a new variable, no matter how insignificant it might be, cannot decrease the value of R-squared.

# Formulation of Multiple Linear Regression
$Y = \beta_{0} + \beta_{1}X_{1} + \beta_{2}X_{2} + ... + \beta_{p}X_{p}$

# Interpretation of the coefficients
Change in mean response, E(Y), per unit change in the variable when other predictors are held constant

# Some aspects of MLR are similar to Simple Linear Regression
- The model now fits a `hyperplane` instead of a line
- Coefficients are still obtained by minimising the sum of squared errors, the least squares criteria
- For inference, the assumptions from simple linear regression still hold - zero-mean, independent and normally distributed error terms with constant variance

# New considerations when moving from SLR to MLR
1. Overfitting
    - As you keep adding the variables, the model may become far too complex
    - It may end up memorising the training data and will fail to generalise
    - A model is generally said to overfit when the training accuracy is high while the test accuracy is very low
    - Refert [this article](https://elitedatascience.com/overfitting-in-machine-learning) for more details.
2. Multicollinearity
    - Associations between predictor variables
3. Feature selection
    - Selecting the optimal set from a pool of given features, many of which might be redundant becomes an important task

# Bias vs Variance - Infographic
![BiasVsVariance](./bias_vs_variance.png)
Source: https://elitedatascience.com/bias-variance-tradeoff

# Multicollinearity
Multicollinearity refers to the phenomenon of having related predictor variables in the input dataset. In simple terms, in a model which has been built using several independent variables, some of these variables might be interrelated, due to which the presence of that variable in the model is redundant. You drop some of these related independent variables as a way of dealing with multicollinearity.

## Multicollinearity affects
1. Interpretation:
    - Does “change in Y, when all others are held constant” apply?
2. Inference: 
    - Coefficients swing wildly, signs can invert
    - p-values are, therefore, not reliable

## Multicollinearity does not affect
1. the predictions, precisions of the predictions
2. goodness-of-fit statistics

# How to detect Multicollinearity
## Detecting Multicollinearity = Detecting association in predictors
- Scatter plots to visually inspect
- Correlations to quantify the linear association

## Variance Inflation Factor (VIF)
- Pairwise correlations may not be enough: A variable could be associated with multiple variables together
- Idea: Build a model to explain the `predictor` using the `other predictors`
- How well a predictor variable is correlated with all the other variables, excluding the target variable
- Formula: $VIF_{i} = \frac{1}{1-R_{i}^2}$ where 'i' refers to the i-th variable which is being represented as a linear combination of rest of the independent variables.
- Common heuristic: 
    - &gt; 10:  Definitely high VIF value and the variable should be eliminated.
    - &gt; 5:  Can be okay, but it is worth inspecting.
    - &lt; 5: Good VIF value. No need to eliminate this variable.

## Dealing with multicollinearity

- Dropping variables
    - Drop the variable that is highly correlated with others
    - Pick the business interpetable variable (if interpretation and explicability important)

- Create new variable using the interactions of the older variables
    - Add interaction features, drop original features
- Variable transformations:
    - PCA: Principal Component Analysis
    - PLS: Partial Least Squares

# Dealing with Categorical Variables
- Few Levels: Create 'dummy'/indicator variables
- Good for interpretation (effect of state vs base state)
- When you have a categorical variable with say 'n' levels, the idea of dummy variable creation is to build 'n-1' variables, indicating the levels. 


    | Value  | Indicator Variable |
    |--------|--------------------|
    | Gender | **Female**         |
    | Male   | 0                  |
    | Female | 1                  |


    | Value             | Indicator Variable |                    |
    |-------------------|--------------------|--------------------|
    | Furnishing Status | **furninshed**     | **semi-furnished** |
    | furnished         | 0                  | 0                  |
    | semi-furnished    | 1                  | 0                  |
    | unfurnished       | 0                  | 0                  |

# Feature Scaling
1. Ease of interpretation
2. Faster convergence for gradient descent methods

## Effect of scaling
| Statistic      | Change |
|----------------|--------|
| p-values       | No     |
| Model Accuracy | No     |
| F-statistic    | No     |
| R-squared      | No     |
| Coefficients   | Yes    |

## MinMaxScaling
- get the values between 0 and 1
- $X_{changed} = \frac{X-X_{min}}{X_{max}-X_{min}}$

## Standardization
- also called Z-score Normalization
- subtracting the mean and dividing by standard deviation such that the variable is centered at zero and the standard deviation is 1
- Formula: $X_{changed} = \frac{X-\mu}{\sigma}$

## Scaling Categorical Variables 
For categorical variables, in general, it is better to not perform any scaling especially if we want to interpret the data since the values are already between 0 and 1.

# Model Assessment and Comparison
Sleecting the best model: Trade off between explaining highest variable and keeping it simple
- bias vs variance trade-off 

## Key Idea: Penalize modesl for using higher number of predictors

- $Adjusted\;R^2 = 1 - \frac{(1-R^2)(N-1)}{N-p-1}$
- $Akaike\;Information\;Criterion = AIC = n*\log(\frac{RSS}{n})+2p$
- $BIC = Bayesian\;Information\;Criterion$
- $Mallow's\;Cp$

where n is the sample size (number of rows in the dataset) and p is the number of predictor variables

## Adjusted $R^2$ vs $R^2$
The major difference between R-squared and Adjusted R-squared is that R-squared doesn't penalise the model for having more number of variables. Thus, if you keep on adding variables to the model, the R-squared will always increase (or remain the same in the case when the value of correlation between that variable and the dependent variable is zero). Thus, R-squared assumes that any variable added to the model will increase the predictive power.

Adjusted R-squared on the other hand, penalises models based on the number of variables present in it. So if you add a variable and the Adjusted R-squared drops, you can be certain that that variable is insignificant to the model and shouldn't be used. So in the case of multiple linear regression, you should always look at the adjusted R-squared value in order to keep redundant variables out from your regression model.

# References
- https://elitedatascience.com/overfitting-in-machine-learning
- https://elitedatascience.com/bias-variance-tradeoff
- https://simple.wikipedia.org/wiki/Occam%27s_razor
- https://www.stevesque.com/symbols/
- https://support.minitab.com/en-us/minitab/18/help-and-how-to/modeling-statistics/regression/supporting-topics/partial-least-squares-regression/what-is-partial-least-squares-regression/
- https://stats.idre.ucla.edu/other/mult-pkg/faq/general/faqwhat-is-dummy-coding/
- https://stats.stackexchange.com/questions/89533/convert-a-categorical-variable-to-a-numerical-variable-prior-to-regression
- https://stackoverflow.com/questions/32108179/linear-regression-normalization-vs-standardization
- https://en.wikipedia.org/wiki/Feature_scaling
- https://stats.idre.ucla.edu/other/mult-pkg/faq/general/faqwhat-is-effect-coding/
- https://en.wikipedia.org/wiki/Akaike_information_criterion
- https://en.wikipedia.org/wiki/Bayesian_information_criterion
- https://en.wikipedia.org/wiki/Mallows%27s_Cp
