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

# PCA - Change of Basis
- We change the basis such that it is easy to identify key features
- Simply put you have the flexibility of choosing a different set of basis vectors apart from the standard basis vectors that are provided to you to represent your information. The information won't change, just the numbers representing the information would change.
- Mainly when we're moving between multiple basis vectors, it's important to know that the point's position in space doesn't change. The point's representation might be different in different basis vectors but it would be representing the same point.
- PCA finds new basis vectors for us. These new basis vectors are also known as Principal Components.
- We represent the data using these new Principal Components by performing the change of basis calculations.
- After doing the change of basis, we can perform dimensionality reduction. In fact, PCA finds new basis vectors in such a way that it becomes easier for us to discard a few of the features.

### Standard Basis
- It is the identify matrix for a particular dimension

$\begin{bmatrix}
1 && 0 \\
0 && 1
\end{bmatrix}$

### Non-Standard Basis
- Anything other than standard basis (filled with 1s and 0s) is not standard basis vector

$\begin{bmatrix}
3 & 0.5 \\
2 & 1
\end{bmatrix}$

# Variance
- $\displaystyle \sigma^2 = \frac{\sum(x-\mu)^2}{N}$
- High Variance $\implies$ More Information and vice-versa

![PCA_Height-Weigth](.\pca-height-weight.jfif)

- The red line on the Height and Weight axes show the spread of the projections of the vectors on those axes. 
- As you can see here, the spread of the line is quite good on the Weight axis as compared to the Height axis. 
- Hence you can say that Weight has more variance than Height. 
- This idea of the spread of the data being equivalent to the variance is quite an elegant way to distinguish the important directions from the non-important ones.

# PCA Steps
- First, it finds the basis vector which is along the best- fit line that maximises the variance. This is our first principal component or PC1.
- The second principal component is perpendicular to the first principal component and contains the next highest amount of variance in the dataset.
- This process continues iteratively, i.e. each new principal component is perpendicular to all the previous principal components and should explain the next highest amount of variance.
- If the dataset contains n independent features, then PCA will create n Principal components.
- Once the Principal Components are found out, PCA assigns a %age variance to each PC. Essentially it's the fraction of the total variance of the dataset explained by a particular PC. This helps in understanding which Principal Component is more important than the other and by how much. 

