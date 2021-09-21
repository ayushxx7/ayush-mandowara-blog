---
title: Decision Trees
description: Introduction to tree based models
date: "2021-09-24"
image: "decision_trees.png"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

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

