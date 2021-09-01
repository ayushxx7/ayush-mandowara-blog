---
title: Linear Regression in the Industry
description: Real life examples of using Linear Regression in the Industry
date: "2021-08-13"
image: "linear_vs_logistic_regression.jpg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

# Purpose
Understanding the use of Linear Regression in the Industry / Real World

# Uses
1. Forecasting
2. Prediction

Linear Regression 
- can show interpolation but not extrapolation
- Shows correlation, not causation
- Parametric Regression

| Parametric                                                                                                                                                                                | Non Parametric                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Data follows fixed parameters                                                                                                                                                             | Data does not follow fixed parameters                                       |
|                                                                                                                                                                                           | Dynamic in nature                                                           |
| a parametric model can be described using a finite number of parameters.                                                                                                                  | do not have a finite set of parameters which completely describe the model. |
| Ex: a linear regression model built using n independent variables will have exactly n ‘parameters’ (i.e. the n coefficients). The entire model can be described using these n parameters. | Ex: decision trees                                                          | 

| Interpolation                                                                                                                          | Extrapolation                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| using the model to predict the value of a dependent variable on independent values that lie within the range of data you already have. | predicting the dependent variable on the independent values that lie outside the range of the data the model was built on |

![InterpolationExtrapolation](interpolation_extrapolation.png)
Here, $Y_{1p}$ in interpolation while $Y_{2p}$ is extrapolation

# Question

| Statement                                                                                                                                                                                                     | Linear Regression Applicable |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| An organisation's revenue assurance and business planning team wants to prepare weekly revenue forecast based on previous week/month/year's performance.                                                      | Yes                          |
| A media company launcedh a new show which had > 1 million views every day. They expected higher view during weekend, but the views decreased. Why?                                                            | Yes                          |
| A company has a set marketing budget, and various marketing channels - TV, social media, newsprints, radio, other digital platforms. What is the ROI from each channel? How to allocate the budget optimally? | Yes                          |
| A telecom company realises that 30% of the current active customer base has significantly reduced its internet usage on mobile data. Who else may follow the same behavior?                                   | No                           |
| An e-commerce platform is launching a new technology driven product line. How to identify the target customers to send email notficants to visit this new product page?                                       | No                           |
| Emaar wants to forecast how many low-income, mid-income, high-come and ultra-luxury income housing they should plan for King Abdulla Economic city.                                                           | No                           |

| Purpose                     | Prediction                                                                                   | Projection                                   |
|-----------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------|
| Importance of Outcome       | Focus: Identifying the driver variables and measuring their impact of on dependent variables | Final projected result/forecasted value      |
| Assumption                  | No specific assumption is considered                                                         | Assumes everything remains the same as today |
| Complexity/Accuracy of model | Simple models are better than complex models                                                 | Choose accuracy over explanation             |

# Error Terms
If the errors (the differences between the actual views and the views predicted by the model) are randomly distributed, it confirms that there are no variables that could have helped explain the model better. 

A non-random error pattern, on the other hand, would mean that the errors are capturing some patterns, thus indicating that the model could have been better. A non-random error pattern indicates that there are certain systematic unexplained aspects in the outcomes that are being captured in the error. This pattern in the errors could probably have been explained by some explanatory variable which is missing from the model. So, the idea is that a model should explain everything that is possible, such that only the random errors are left.

# Assessing stability of Model
1. Data set is small
- not advisable to separate testing and training sets

2. Use bootstrapping
- Choose 10-20% of sample randomly
- Opt for multiple iterations with replacement
- Train model on "in-sample" group
- Test on "out-sample" group

3. Model is stable when $R^2$ is similar

# Tip
- A good model tells a good story. 
- It is not important that you base your story entirely on a single model. 

# Summary
- It is important to understand if a linear regression modelling will be applicable to the problem you are trying to solve. E.g. linear regression can’t help you decide if a customer will opt out of a subscription, as this is a classification problem.
- Linear regression guarantees interpolation but not extrapolation.
- While linear regression can be used for both projection and prediction, there is a difference between the two. In prediction, the goal is to identify the most important variables that explain the outcome in a simpler way. In projection, the goal is to accurately forecast the outcome, no matter how complex the model gets.
- The business goal is crucial and will decide what path the modelling process should take.
- In the industry, variables that are actionable are valued over others. E.g. given two quite similar variables, “Views to the platform” and “Visitors to the platform”, the latter is more actionable, as it is easier to get viewers to the platform than forcing anybody to watch the shows.
- You don’t end the modelling process until you are sure that no more significant variables could be added to explain the outcome. Thus, you check for randomness of errors, which could indicate if any KPI that could have helped explain the outcome was left out.

# Takeaways
1. We should perform some EDA to understand the data trends
2. We can start building model with the first most important variable and then keep on adding one varaible after the other (forward selection).
3. R^2 value of 60% is good when it comes to the industry, but we should investigate all data that we have. 
4. We can get inference from multiple models and not just one. 

# References
- https://stats.stackexchange.com/questions/268638/confusion-about-parametric-and-non-parametric-model
- http://machinelearningmastery.com/parametric-and-nonparametric-machine-learning-algorithms/
- http://rstudio-pubs-static.s3.amazonaws.com/24365_2803ab8299934e888a60e7b16113f619.html
