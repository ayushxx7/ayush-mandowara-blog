---
title: Decision Trees
description: Introduction to tree based models
date: "2021-09-24"
image: "decision_trees.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

<!-- vim-markdown-toc GFM -->

* [Purpose](#purpose)
* [About Decision Trees](#about-decision-trees)
* [Building Decision Trees](#building-decision-trees)
    * [Top Down](#top-down)
    * [Greedy](#greedy)
* [Question](#question)
* [Hyperparmaeters](#hyperparmaeters)
  * [Hyperparameter Tuning](#hyperparameter-tuning)
  * [Difference between Parameter and Hyperparameter](#difference-between-parameter-and-hyperparameter)
* [Advantages of Decision Trees](#advantages-of-decision-trees)
* [Disadvantages of Decision Trees](#disadvantages-of-decision-trees)
  * [Regression using Decision Trees](#regression-using-decision-trees)
* [Questions](#questions)
* [Summary](#summary)
* [Takeaways](#takeaways)
* [Splitting and Homogeneity](#splitting-and-homogeneity)
  * [CART Algorithm](#cart-algorithm)
  * [Discretization](#discretization)
* [Question](#question-1)
* [Impurity Measures](#impurity-measures)
  * [Classification Error](#classification-error)
  * [Gini Impurity](#gini-impurity)
  * [Entropy](#entropy)
    * [Note](#note)
* [References](#references)

<!-- vim-markdown-toc -->

# Purpose
Notes on Tree based models

# About Decision Trees
- With high interpretability and an intuitive algorithm, decision trees mimic the human decision-making process and are efficient in dealing with categorical data. Unlike other algorithms, such as logistic regression and support vector machines (SVMs), decision trees do not help in finding a linear relationship between the independent variable and the target variable. However, they can be used to model highly non-linear data.
- A decision tree, as the term suggests, uses a tree-like model to make predictions. It resembles an upside-down tree and uses a similar process that you do to make decisions in real life, i.e., by asking a series of questions to arrive at a decision.
- A decision tree splits data into multiple sets of data. Each of these sets is then further split into subsets to arrive at a decision.
- It forms the base for Random Forest Classification Algorithm.
- A decision tree uses a natural decision-making process, i.e., it asks a series of questions in a nested if-then-else structure. On each node, you ask a question to further split the data that is held by the node. If the test passes, you move to the left; otherwise, you move to the right.
- The first and top node of a decision tree is called the root node. The arrows in a decision tree always point away from this node.
- The node that cannot be further classified or split is called the leaf node. The arrows in a decision tree always point towards this node.
- The intermediate nodes between the root and the leaf nodes are called the internal nodes.
- it is easy to interpret a decision tree, and you can almost always identify the various factors that lead to a particular decision. In fact, trees are often underestimated in their ability to relate the predictor variables to their predictions. As a rule of thumb, if interpretability by layman is what you are looking for in a model, then decision trees should be at the top of your list.
- In a decision tree, you start from the top (root node) and traverse left/right according to the result of the condition. Each new condition adds to the previous condition with a logical ‘and’, and you may continue to traverse further until you reach the final condition’s leaf node. A decision is the value (class/quantity) that is assigned to the leaf node.

# Building Decision Trees
1. Recursive binary splitting/partitioning the data into smaller subsets
1. Select the best variable for the split
1. Apply the split
1. Repeat the process for the subsets obtained
1. Continue process until stopping criterion is reached
1. Assigning the majority class/average value as the prediction

```py heading="Creating a Decision Tree in Python"
from sklearn.tree import DecisionTeeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, accuracy_score
from IPython.display import Image
from six import StringIO
from sklearn.tree import export_graphviz
import pydotplus, graphviz

X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.7, random_state=42)

dt = DecisionTreeClassifier(max_depth=3)
dt.fit(X_train, y_train)

dot_data = StringIO()
export_graphviz(dt, out_file=dot_data, filled=True, rounded=True,
                feature_names=X.columns, 
                class_names=['No Disease', "Disease"])

graph = pydotplus.graph_from_dot_data(dot_data.getvalue())
Image(graph.create_png())

y_train_pred = dt.predict(X_train)
y_test_pred = dt.predict(X_test)

print(accuracy_score(y_train, y_train_pred))
confusion_matrix(y_train, y_train_pred)

print(accuracy_score(y_test, y_test_pred))
confusion_matrix(y_test, y_test_pred)
```

### Top Down
- starting from top with larger data and keep splitting

### Greedy
- tries to maximize the immediate effect at a node while splitting
- A small variation in the data can result in a significant change in the decision tree leading to different decisions and results altogether.
- due to this decision tree is called a high variance model i.e. smaller changes in data can significantly change what the tree looks like
- The reason we call the process greedy is because it does not take into account what will happen in the next two or three steps. The entire structure of the tree changes with small variations in the input data. This, in turn, changes the way you split and the final decisions altogether. This means that the process is not holistic in nature, as it only aims to gain an immediate result that is derived after splitting the data at a particular node based on a certain rule of the attribute.

# Question

**The order of attributes in each side of a decision tree is exactly the same.**
- No. The order of attributes in each side of the decision tree does not matter in the process of decision making.

# Hyperparmaeters
- Hyperparameter tuning can improve the performance of decision trees to a great extent.
- Hyperparameters are simply the parameters that we pass on to the learning algorithm to control the training of the model i.e. these are the parameters that the user provides and not something that the algorithm learns on its own during the training process. 
- Hyperparameters are choices that the algorithm designer makes to ‘tune’ the behaviour of the learning algorithm. 
- The choice of hyperparameters, therefore, has a lot of bearing on the final model produced by the learning algorithm.
- The values of hyper-parameters are pre-set. The values of hyper-parameters are independent of the dataset. These values do not change during training.
- Hyper-parameter is not a part of the trained or the final model. The values of model parameters estimated during training are saved with the trained model.
- The hyper-parameter values are used during training to estimate the value of model parameters.

## Hyperparameter Tuning
Since hyperparameters can take many values, it is essential for us to determine the optimal values where the model will perform the best. This process of optimising hyperparameters is called hyperparameter tuning. 

## Difference between Parameter and Hyperparameter

| Parameter                                                | Hyperparameter                                                     |
|----------------------------------------------------------|--------------------------------------------------------------------|
| Estimated during the training with historical data       | Values are set before hand                                         |
| It is a part of the model                                | External to the model                                              |
| The estimated value is saved with the trained model      | Not a part of the trained model and hence the values are not saved |
| Dependent on the dataset that the system is trained with | Independent of the dataset                                         |

# Advantages of Decision Trees
- Interpretable
  - Trees can be visualised.
  - Uses a white box model. If a given situation is observable in a model, the explanation for the condition is easily explained by boolean logic. By constrast, in a black box model (e.g., in an artificial neural network), results may be more difficult to interpret.
- Versatile
  - can handle classification as well regression
  - It does not assume anything specific about the nature of the attributes in a data set. 
  - It can seamlessly handle all kinds of data such as numeric, categorical, strings, Boolean, etc.
  - Requires little data preparation. 
- Fast
  - conditionally partitioning data
  - The cost of using the tree (i.e., predicting data) is logarithmic in the number of data points used to train the tree.
- Handle Multicollinearity better: doesn't have distribution assumptions
- Scale Invariant
    -  It does not require normalisation, as it only has to compare the values within an attribute.
- Identifying complex relationships
    - subsets can be created which have different predictions
    - work well in certain cases where you cannot fit a single linear relationship between the target and feature variables. 
- give us an idea of the relative importance of the explanatory attributes that are used for prediction
- Possible to validate a model using statistical tests. That makes it possible to account for the reliability of the model.
- Performs well even if its assumptions are somewhat violated by the true model from which the data were generated.

# Disadvantages of Decision Trees
- Overfitting
  - Decision-tree learners can create over-complex trees that do not generalise the data well. This is called overfitting. 
  - Mechanisms such as pruning, setting the minimum number of samples required at a leaf node or setting the maximum depth of the tree are necessary to avoid this problem.
- High Variance
  - Decision trees can be unstable because small variations in the data might result in a completely different tree being generated. 
  - This problem is mitigated by using decision trees within an ensemble.
- NP Complete
  - The problem of learning an optimal decision tree is known to be NP-complete under several aspects of optimality and even for simple concepts. 
  - Consequently, practical decision-tree learning algorithms are based on heuristic algorithms such as the greedy algorithm where locally optimal decisions are made at each node. 
  - Such algorithms cannot guarantee to return the globally optimal decision tree. 
  - This can be mitigated by training multiple trees in an ensemble learner, where the features and samples are randomly sampled with replacement.
- Biased Analysis
  - Decision tree learners create biased trees if some classes dominate
  - It is therefore recommended to balance the dataset prior to fitting with the decision tree.
- There are concepts that are hard to learn because decision trees do not express them easily, such as XOR, parity or multiplexer problems.

## Regression using Decision Trees
- In regression problems, a decision tree splits the data into multiple subsets. 
- The difference between decision tree classification and decision tree regression is that in regression, each leaf represents the average of all the values as the prediction as opposed to a class label in classification trees.
- For classification problems, the prediction is assigned to a leaf node using majority voting but for regression, it is done by taking the average value. This average is calculated using the following formula:
    - $\hat{y_t} = \frac{1}{N_t}\sum_{i\epsilon D_t}y^{(i)}$ where $\displaystyle y_{i}$ represent the observations in a node
- For example, suppose you are predicting the sales your company will have based on various factors such as marketing, no. of products, etc. Now, if you use a decision tree to solve this problem, and if one of the leaf nodes has, say, 5 data points, 1 Cr, 1.3 Cr, 0.97 Cr, 1.22 Cr, 0.79 Cr. Now, you will just take the average of these five values which comes out to be 1.05 Cr, and that becomes your final prediction.

# Questions
**What do leaves in regression and classification decision trees contain**
- Leaves in classification contain labels.
  - In classification, the target variable is discrete. Hence, each data point in a leaf has an associated class label.
- Leaves in regression contain the average predicted value.

# Summary
- Decision trees are easy to interpret, as you can always traverse backwards and identify the various factors that lead to a particular decision. 
- A decision tree requires you to perform certain tests on attributes in order to split the data into multiple partitions.
- In classification, each data point in a leaf has a class label associated with it.A
- You cannot use the linear regression model to make predictions when you need to divide the data set into multiple subsets, as each subset has an independent trend corresponding to it. In such cases, you can use the decision tree model to make predictions because it can split the data into multiple subsets and assign average values as the prediction to each set independently.

# Takeaways
- decision trees are intuitive to understand just by visualizing the model as they mimic human decision-making process
- they are fast (logarithmic time complexity) because they split data into subsets on each condition
- decision trees are greedy i.e. they only care about what will be the most optimal solution for the current node. They don't care about the global solution optimization
- decision trees can overfit and are know to be susceptible to changes in the data set (i.e they have high variance) as well as class imbalance

---

# Splitting and Homogeneity
- We split the data to get groups which are homogeneous or pure or largely belong to one class.
- We keep splitting till homogeneity exceeds a threshold value after which that node becomes a leaf node.
- homogeneity refers to response (target) variable's homogeneity.
- For classification purposes, a data set is completely homogeneous if it contains only a single class label. 
- For regression purposes, a data set is completely homogeneous if its variance is as small as possible
- The goal of decision tree splitting is to increase homogeneity. More homogeneity will mean that most of the data points in the set belong to the same class label. Hence, classifying all the data points of that set, to get them to belong to that class, will result in fewer errors.

## CART Algorithm
A tree can be split based on different rules of an attribute and these attributes can be categorical or continuous in nature. If an attribute is nominal categorical, then there are $2^{k − 1} − 1$
 possible splits for this attribute, where k is the number of classes. In this case, each possible subset of categories is examined to determine the best split.

If an attribute is ordinal categorical or continuous in nature with n different values, there are $n - 1$ different possible splits for it. Each value of the attribute is sorted from the smallest to the largest and candidate splits based on the individual values is examined to determine the best split point which maximizes the homogeneity at a node.

## Discretization
Calculating percentiles and midpoints of the sorted values for handling continuous features is known as discretization
- Refer [this article](https://sci2s.ugr.es/keel/pdf/algorithm/articulo/liu1-2.pdf) for more information.

# Question
**Given a dataset with two attributes, age and gender, you want to predict whether a person will purchase a product (yes/no). You know that among all those who have purchased the product in the past, 98% are females. Also, the age distribution of the customers is almost uniform. The homogeneity of the resultant nodes will be maximised if you split on Age or Gender?**

- Gender as it will split the data such that one node will contain 98% of total observations that belong to 'product purchased' class and the other node will contain 2% of total observations belonging to 'product purchased' class. So, nodes will have high homogeneity here.

# Impurity Measures
## Classification Error 
- $\displaystyle E = 1 - max(p_i)$
- minority becomes the classifcation error if everything is assigned to majority class
- Max ambiguity value is 0.5

## Gini Impurity
$\displaystyle G = \sum_{i=1}^{K}p_i(1-p_i) = \sum_{i=1}^{K}(p_{i}-p_{i}^{2}) = \sum_{i=1}^{K}p_{i}-\sum_{i=1}^{k}p_{i}^2=1-\sum_{i=1}^{K}p_{i}^2$

where $p_{i}$, is the probability of finding a point with the label and $k$ is the number of classes 

Note that $\sum_{i=1}^{K}p_{i} = 1$ because sum of all probabilities is equal to 1

- Min ambiguity (all elements belong to single class) is 0
- Max ambiguity value is 0.5
- most popular impurity index along with being the default in sklearn library
- $\displaystyle \text{homogeneity} \uparrow \implies \text{Gini Index} \downarrow$

## Entropy
$\displaystyle D = -\sum_{i=1}^{K}p_i\log_2p_i$
- Min ambiguity value is 0
- Max ambiguity value is 1
- Here $\log0$ is assumed to be 0
- Entropy quantifies the degree of disorder in the given data, its value varies from 0 to 1.
- $\displaystyle \text{homogeneity} \uparrow \implies \text{Entropy} \downarrow$

### Note
The measures don't distinguish between classes.

# References
- https://www.hitechnectar.com/blogs/hyperparameter-vs-parameter/
- http://ogrisel.github.io/scikit-learn.org/sklearn-tutorial/modules/tree.html
