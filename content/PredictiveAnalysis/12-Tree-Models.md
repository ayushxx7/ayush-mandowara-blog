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
- A decision tree splits data into multiple sets of data. Each of these sets is then further split into subsets to arrive at a decision. Let’s hear from Prof. Raghavan as he explains this process in detail.
- It forms the base for Random Forest Classification Algorithm.
- A decision tree uses a natural decision-making process, i.e., it asks a series of questions in a nested if-then-else structure. On each node, you ask a question to further split the data that is held by the node. If the test passes, you move to the left; otherwise, you move to the right.
- The first and top node of a decision tree is called the root node. The arrows in a decision tree always point away from this node.
- The node that cannot be further classified or split is called the leaf node. The arrows in a decision tree always point towards this node.
- The intermediate nodes between the root and the leaf nodes are called the internal nodes.
- it is easy to interpret a decision tree, and you can almost always identify the various factors that lead to a particular decision. In fact, trees are often underestimated in their ability to relate the predictor variables to their predictions. As a rule of thumb, if interpretability by layman is what you are looking for in a model, then decision trees should be at the top of your list.
- In a decision tree, you start from the top (root node) and traverse left/right according to the result of the condition. Each new condition adds to the previous condition with a logical ‘and’, and you may continue to traverse further until you reach the final condition’s leaf node. A decision is the value (class/quantity) that is assigned to the leaf node.
