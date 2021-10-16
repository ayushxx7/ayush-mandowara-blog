---
title: Principal Component Analysis
description: dimensionality reduction using PCA
date: "2021-10-15"
image: "principal_component_analysis.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "unsupervised-learning"]
---

# Principal Component Analysis
- Principal component analysis (PCA) is one of the most commonly used dimensionality reduction techniques in the industry. 
- By converting large data sets into smaller ones containing fewer variables, it helps in improving model performance, visualising complex data sets, and in many more areas.
- It is an unsupervised learning algorithm

# Problem with having a lot of features
- The predictive model setup: Having a lot of correlated features lead to the multicollinearity problem. Iteratively removing features is time-consuming and also leads to some information loss.
- Data visualisation: It is not possible to visualise more than two variables at the same time using any 2-D plot. Therefore, finding relationships between the observations in a data set having several variables through visualisation is quite difficult. 

# Applications of PCA
- Dimensionality Reduction: convert m x n data to m x k columns where k &lt; n
- Data Visualization: High dimension data can be converted to 2 dimension data using PCA
- EDA
- Building Predictive Models
    - no multicollinearity (stable and robust model)
    - faster models (due to reduced dimensions)
- Finding Latent Themes: useful in Recommendation Systems
- Noise Reduction

# Dimensionality Reduction
- PCA is fundamentally a dimensionality reduction technique
- In simple terms, dimensionality reduction is the exercise of dropping the unnecessary variables, i.e., the ones that add no useful information. In EDA, we dropped columns that had a lot of nulls or duplicate values, and so on. 
- In linear and logistic regression, we dropped columns based on their p-values and VIF scores in the feature elimination step.
- Similarly, what PCA does is that it converts the data by creating new features from old ones, where it becomes easier to decide which features to consider and which not to. 

# PCA Definition
PCA is a statistical procedure to convert observations of possibly correlated variables to ‘principal components’ such that:
- They are uncorrelated with each other.
- They are linear combinations of the original variables.
- They help in capturing maximum information in the data set.
