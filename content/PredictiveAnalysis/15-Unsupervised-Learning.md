---
title: Unsupervised Learning
description: Clustering and intro to Unsupervised Learning
date: "2021-10-12"
image: "unsupervised_learning.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "unsupervised-learning"]
---


<!-- vim-markdown-toc GFM -->

* [Types of Learning](#types-of-learning)
* [Unsupervised Learning](#unsupervised-learning)
    * [Practical applications of Clustering](#practical-applications-of-clustering)
* [Clustering vs Segmentation](#clustering-vs-segmentation)
* [Segmentation Stability](#segmentation-stability)
    * [Inter and Intra cluster homogeneity](#inter-and-intra-cluster-homogeneity)
    * [Behavioral Segmenatation](#behavioral-segmenatation)
    * [Attitudinal Segmentation](#attitudinal-segmentation)
    * [Demographic Segmenetation](#demographic-segmenetation)
* [Questions](#questions)
* [K-Means Clustering](#k-means-clustering)
    * [Euclidean Distance Measure](#euclidean-distance-measure)
    * [Centroid](#centroid)
    * [Algorithm](#algorithm)
        * [Steps](#steps)
            * [Inner Loop](#inner-loop)
            * [Cost Function](#cost-function)
            * [Assigning clusters](#assigning-clusters)
            * [Optimisation](#optimisation)
        * [K-Means++ algorithm](#k-means-algorithm)
            * [Steps](#steps-1)
    * [Practical Considerations](#practical-considerations)
        * [Silhoutte Coefficient](#silhoutte-coefficient)
    * [Cluster Tendency](#cluster-tendency)
* [Summary](#summary)
* [References](#references)

<!-- vim-markdown-toc -->

# Types of Learning

| Supervised Learning                                         | Unsupervised Learning                                                                                                                     |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Labels are known                                            | Labels are not known                                                                                                                      |
| Email - Spam, Ham                                           | grouping news articles into different categories (categories not known)                                                                   |
| Has distinction between independent and dependent variables | Group the data points into different categories based on the given set of attributes. There are no dependent and independent variables |

# Unsupervised Learning

## Practical applications of Clustering

- Customer Insight: Say, a retail chain with so many stores across locations wants to manage stores at best and increase the sales and performance. Cluster analysis can help the retail chain to get desired insights on customer demographics, purchase behaviour and demand patterns across locations. This will help the retail chain for assortment planning, planning promotional activities and store benchmarking for better performance and higher returns.
- Marketing: Cluster Analysis can help with In the field of marketing, Cluster Analysis can help in market segmentation and positioning, and to identify test markets for new product development.
- Social Media: In the areas of social networking and social media, Cluster Analysis is used to identify similar communities within larger groups.
- Medical: Cluster Analysis has also been widely used in the field of biology and medical science like human genetic clustering, sequencing into gene families, building groups of genes, and clustering of organisms at species. 
- Customer segmentation for targeted marketing is one of the most vital applications of the clustering algorithm. Here, as a manager of the online store, you would want to group the customers into different clusters, so that you can make a customised marketing campaign for each of the group. You do not have any label in mind, such as good customer or bad customer. You want to just look at patterns in customer data and then try and find segments. This is where clustering techniques can help you with segmenting the customers. Clustering techniques use the raw data to form clusters based on common factors among various data points. This is exactly what will also be done in segmentation, where various people or products will be grouped together on the basis of similarities and differences between them. As a manager, you would have to decide what the important business criteria are on which you would want to segregate the customers. So, you would need a method or an algorithm that itself decides which customers to group together based on this criteria.

# Clustering vs Segmentation
| Clustering          | Segmentation                  |
|---------------------|-------------------------------|
| Analytics Technique | Business Problem              |
|                     | Ex: People, Products, Markets |

# Segmentation Stability
- even if you run clustering exercise in quick peridocity, the people falling in same bucket should remain in that bucket
- there should be a time limit till which we can say segment will stay

## Inter and Intra cluster homogeneity
- Inter segment - there should be lot of difference between individuals
- Intra Segment - there should be almost no difference between individuals

## Behavioral Segmenatation
- what the person, market exhibited through action
- data comes from internal CRM system
- ex: youtube recommendatations

## Attitudinal Segmentation
- what you want to behave like
- intent to purchase not actual purchase
- in survey person says they purchase branded clothes (attitudinal), while they actually end up purchasing discounted clothes (behavioural)

## Demographic Segmenetation
- Gender
- Age
- Location
- Income
- Family Members

# Questions
**A telecom company classifies its prepaid mobile customers into three types mainly based on the number of times they recharge per month. What kind of segmentation this is?**
- Behavioral segmentation: Recharge is a behaviour which can be observed, opposed to attitude which resides in the mindset of the customer.

**An international foods and beverages company wants to look at what products it should launch in India. For that, it has first tried to segment the market. It is known that people living in the same area and having similar salaries will have similar eating habits. Then which of the following can be segmented in 1 group?**
A. High Earning Individual from Bengaluru  
B. Low Earning Individual from Rural Uttar Pradesh  
C. Mid Earning Individual from Mumbai  
D. High Earning Individual from Hyderabad  

- Segment can be formed like so: (A,D) - (B) - (C)

**You are an analyst at a global laptop manufacturer and are given the task of deciding whether the company should enter the Indian Market. You try to estimate the market size by first breaking the market by different types of people who use a laptop such as students, working professionals and their paying capacity to get an estimate of the total market size and the characteristics of each segment. In essence, you are doing?**
- Demographic Segmentation: Since you are looking at the income and the profession of people. Notice how this is much simpler than finding data about actual laptop purchasing history of customers and then trying to estimate the market size based on that.

# K-Means Clustering

## Euclidean Distance Measure
The algorithm needs to find data points whose values are similar to each other and therefore these points would then belong to the same cluster. The method in which any clustering algorithm goes about doing that is through the method of finding something called a “distance measure”. The distance measure that is used in K-means clustering is called the Euclidean Distance measure.

- $X = (X_1, X_2, \ldots, X_n)$
- $Y = (Y_1, Y_2, \ldots, Y_n)$

- It is the length of the straight line joining 2 points
- Formula: $D = \sqrt{(X_1-Y_1)^2 + (X_2-Y_2)^2 + \ldots + (X_n - Y_n)^2}$

- The idea of distance measure is quite intuitive. Essentially, the observations which are closer or more similar to each other would have a low Euclidean distance and the observations which are farther or less similar to each other would have a higher Euclidean distance. 

```py heading="Euclidean Distance in Python"
from math import sqrt

x = (7, 50)
y = (23, 34)
c = (12, 12)

squared_sum = 0
for i, j in zip(x, c):
    squared_sum += (i-j)**2

print(sqrt(squared_sum)) # x - c distance


squared_sum = 0
for i, j in zip(y, c):
    squared_sum += (i-j)**2

print(sqrt(squared_sum)) # y - c distance

# the point (among x, y) which has lower distance is closer to c
```

## Centroid
- If you remember your high school geometry, centroids are essentially the centre points of triangles. Similarly, in the case of clustering, centroids are the centre points of the clusters that are being formed.
- The cluster centers for a particular cluster that we compute in K-means Algorithm is given by the Centroid Value for those cluster points

```py heading='Centroid in Python'
x = [12, 31, 17, 19, 13]
y = [23, 31, 15, 27, 11]
z = [45, 31, 25, 45, 27]

centroid = (sum(x)/len(x),
            sum(y)/len(y),
            sum(z)/len(z))

print(centroid)
```

## Algorithm
- Maximizes the tightness/closeness of cluster
- Maximizes the distance between the clusters
- Each time the clusters are made, the centroid is updated. The updated centroid is the centre of all the points which fall in the cluster associated with the centroid. This process continues till the centroid no longer changes, i.e. the solution converges.
- K-means algorithm is a clustering algorithm that takes N data points and groups them into K clusters. 

### Steps
1. Start by choosing k initial centroids
2. Assign based on euclidean distance
3. Optimize centroid based on the grouping in step 2
4. Assign based on new distance
5. Repeat steps 3 and 4 until centroid no longer changes

#### Inner Loop
- Assign each observation $X_{i}$ to the closest cluster centroid $μ_k$
- Update each centroid to the mean of the points assigned to it.

#### Cost Function

$\displaystyle J = \sum_{i=1}^{N}||x_{i}-\mu_{k(i)}||^2 = \sum_{k=1}^{K}\sum_{i\in c_k}||x_{i}-\mu_{k}||^2$

#### Assigning clusters
$\displaystyle Z_{i} \leftarrow \text{argmin}||x_{i}-\mu_k||^2$
- compute distance from each cluster and assign the cluster which is the closest

#### Optimisation
$\boxed{ \displaystyle \mu_k = \frac{1}{n_k}\sum_{i:z_i=k}X_{i}}$

### K-Means++ algorithm
- K-means++ is just an initialisation procedure for K-means. 
- In K-means++ you pick the initial centroids using an algorithm that tries to initialise centroids that are far apart from each other.

#### Steps
- We choose one center as one of the data points at random.
- For each data point $X_{i}$, We compute the distance between $X_i$ and the nearest center that had already been chosen.
- Now, we choose the next cluster center using the weighted probability distribution where a point X is chosen with probability proportional to $d(X)^2$.
- Repeat Steps 2 and 3 until K centers have been chosen.

## Practical Considerations
- The number of clusters that you want to divide your data points into, i.e. the value of K has to be pre-determined.
    - try different choices and then see which makes business sense
- The choice of the initial cluster centres can have an impact on the final cluster formation.
    - can be solved by iterating multiple times
    - Since each run of K-means is independent, multiple runs can find different local optima, and this can help in choosing the global optimum value.
- The clustering process is very sensitive to the presence of outliers in the data.
    - treat outliers to resolve issues
- Since the distance metric used in the clustering process is the Euclidean distance. 
    - You need to bring all your attributes on the same scale. This can be achieved through standardisation.
    - business problem decides type of scaling
- The K-Means algorithm does not work with categorical data.
    - can be resolved via k-mode clustering
- The process may not converge in the given number of iterations. 
    - You should always check for convergence.

### Silhoutte Coefficient
- Silhouette coefficient is a measure of how similar a data point is to its own cluster (cohesion) compared to other clusters (separation). 
- to compute silhouette metric, we need to compute two measures i.e. 
$a(i)$ and $b(i)$ where,
- $a(i)$ is the average distance from own cluster(Cohesion).
- $b(i)$ is the average distance from the nearest neighbour cluster(Separation). 
- $\displaystyle S(i) = \frac{b(i) - a(i)}{\max(b(i), a(i))}$
- $a(i) \ll b(i)$
- For every k, Average Silhouette Measure can be calculated as mean of S(i)

## Cluster Tendency
- Before we apply any clustering algorithm to the given data, it's important to check whether the given data has some meaningful clusters or not? which in general means the given data is not random. 
- The process to evaluate the data to check if the data is feasible for clustering or not is know as the clustering tendency.
- To check cluster tendency, we use Hopkins test. Hopkins test examines whether data points differ significantly from uniformly distributed data in the multidimensional space.

# Summary
- K-means is a popular algorithm for clustering which uses euclidean distance to group data points together. it finds out cluster centers, assigns data points and finds clusters again on new grouping until centroids converge
- We should first check whether the data is cluster-able and then consider the practical points such as whether the data is categorical, if there are any outliers, if the data requires any scaling
- Initial points can be found out using k-mean++ algorithm which uses a measure proportional to distance squared for finding out cluster centers

# References
- [10 interesting uses of k-means clustering](https://dzone.com/articles/10-interesting-use-cases-for-the-k-means-algorithm)
- [Euclidean Distance - Sentdex](https://www.youtube.com/watch?v=hl3bQySs8sM)
- [Centroid - Wikipedia](https://en.wikipedia.org/wiki/Centroid)
- [Clustering - Visualization](https://www.naftaliharris.com/blog/visualizing-k-means-clustering/)
- [K-Mode Clustering](https://shapeofdata.wordpress.com/2014/03/04/k-modes/)
- [Local Minima - Wikipedia](https://en.wikipedia.org/wiki/Local_optimum)
- [Hopkins Test](https://stats.stackexchange.com/questions/332651/validating-cluster-tendency-using-hopkins-statistic)
- [Methods for assessing clustering tendency](http://www.sthda.com/english/articles/29-cluster-validation-essentials/95-assessing-clustering-tendency-essentials/#methods-for-assessing-clustering-tendency)
