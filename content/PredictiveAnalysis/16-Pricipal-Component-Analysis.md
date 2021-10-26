---
title: Principal Component Analysis
description: dimensionality reduction using PCA
date: "2021-10-18"
image: "principal_component_analysis.jpeg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "unsupervised-learning"]
---

<!-- vim-markdown-toc GFM -->

* [Principal Component Analysis](#principal-component-analysis)
* [Problem with having a lot of features](#problem-with-having-a-lot-of-features)
* [Applications of PCA](#applications-of-pca)
* [Dimensionality Reduction](#dimensionality-reduction)
* [PCA Definition](#pca-definition)
* [PCA - Change of Basis](#pca---change-of-basis)
        * [Standard Basis](#standard-basis)
        * [Non-Standard Basis](#non-standard-basis)
* [Variance](#variance)
* [PCA Steps](#pca-steps)
* [PCA Usage](#pca-usage)
    * [Steps](#steps)
    * [Role](#role)
    * [Problems Solved via PCA](#problems-solved-via-pca)
    * [Practical Considerations](#practical-considerations)
    * [Shortcomings of PCA](#shortcomings-of-pca)
* [References](#references)

<!-- vim-markdown-toc -->

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

![PCA_Height-Weigth](pca-height-weight.jfif)

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

# PCA Usage
## Steps
The steps  of PCA as summarised in the above video are as follows:
- Find n new features - Choose a different set of n basis vectors (non-standard). These basis vectors are essentially the directions of maximum variance and are called Principal Components
- Express the original dataset using these new features
- Transform the dataset from the original basis to this PCA basis.
- Perform dimensionality reduction - Choose only a certain k (where k &lt; n) number of the PCs to represent the data.  Remove those PCs which have fewer variance (explain less information) than others.

## Role
- PCA's role in the ML pipeline almost solely exists as a dimensionality reduction tool. 
- Basically, you choose a fixed number of PCs that explained a certain threshold of variance that you have chosen and then uses only that many columns to represent the original dataset.
- This modified dataset is then passed on to the ML pipeline for further prediction algorithms to take place.
- PCA helps us in improving the model performance significantly and helps us in visualising higher-dimensional datasets as well.

```py heading='PCA in Python'
from sklearn.decomposition import PCA
pca = PCA(random_state=42)
pca.fit(x)
pca.components_
pca.explained_variance_ratio_

# using numpy we can get cumulative probability of explained variance
# scree plot
import numpy as np
import matplotlib as plt

var_cumu = np.cumsum(pca.explained_variance_ratio_)
plt.plot(range(1, len(var_cumu)+1), var_cumu)


# 2 components
pc = PCA(n_components, random_state=42)
newdata = pc.fit_transform(x) # find components, get inverse and apply on data
newdata.shape
```

## Problems Solved via PCA
- Multicollinearity among a large number of variables, which is not totally avoided even after reducing variables using RFE (or a similar technique)
- Need to use a lengthy iterative procedure, i.e. identifying collinear variables, using variable selection techniques, dropping insignificant ones etc.
- A potential loss of information due to dropping variables
- Model instability due to multicollinearity
- Speed of Model Building

## Practical Considerations
- Most software packages use SVD to compute the principal components and assume that the data is scaled and centred, so it is important to do standardisation/normalisation.
- PCA is a linear transformation method and works well in tandem with linear models such as linear regression, logistic regression, etc., though it can be used for computational efficiency with non-linear models as well.
- It should not be used forcefully to reduce dimensionality (when the features are not correlated).

## Shortcomings of PCA
- PCA is limited to linearity, though we can use non-linear techniques such as t-SNE as well. 
- PCA needs the components to be perpendicular, though in some cases, that may not be the best solution. The alternative technique is to use Independent Components Analysis. 
- PCA assumes that columns with low variance are not useful, which might not be true in prediction setups (especially classification problem with a high class imbalance).

---

# References
- [Essence of Linear Algebra - 3Blue1Brown](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
- [Laurens van der Maaten's (creator of t-SNE) website](https://lvdmaaten.github.io/tsne/)
- [Visualising data using t-SNE: Journal of Machine Learning Research](http://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf)
- [How to use t-SNE effectively](https://distill.pub/2016/misread-tsne/)
- [Independent Components Analysis](https://sgfin.github.io/files/notes/CS229_Lecture_Notes.pdf)
