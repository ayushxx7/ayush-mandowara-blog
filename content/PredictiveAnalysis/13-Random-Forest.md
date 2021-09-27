---
title: Ensembles and Random Forest
description: intro to ensembles, along with the random forest machine learning algorithm
date: "2021-09-27"
image: "random-forest-diagram.svg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis"]
---

# Purpose
Notes on Random Forest and Ensembles
# Ensembles
- An ensemble refers to a group of things viewed as a whole rather than individually. 
- In an ensemble, a collection of models is used to make predictions, rather than individual models. 
- Arguably, the most popular in the family of ensemble models is the random forest, which is an ensemble made by the combination of a large number of decision trees.
- In principle, ensembles can be made by combining all types of models. An ensemble can have a logistic regression, a neural network, and a few decision trees working in unison.
- group collectively does better than individual models
- Ensembles of models are somewhat analogous to teams of individual players. If you were to choose a football team, you would take the following two steps:
    - Choose people with different skill sets, such as defenders, attackers and a goalkeeper, to ensure diversity
    - Choose good players, i.e., ensure that all players are acceptable from the point of view of their skill sets (and at least better than a regular person)

## Idea
- Individual Models have their individual strengths and weaknesses. 
- Idea is to combine models to reduce individual weakness.
- Collection of diverse and acceptable models

## Diversity
- Strengths and weaknesses of different models complement each other
- Ensures that the models serve complementary purposes, which means that the individual models make predictions independent of each other
- Ex: Building a committee
- Ex: a random forest is an ensemble with a large number of trees as individual models. Diversity ensures that even if some trees overfit, the other trees in the ensemble will neutralise the effect. The independence among the trees results in a lower variance of the ensemble compared to a single tree. Ensembles are more robust to the choice of the training data which makes them more stable and less prone to high variance and overfitting.

- Answers of different models are not correlated
- Agreement between answers of different models is coincidental


### Ways to achieve diversity
- different subsets of training data
    - train different models in each subset
- different training hyperparameters
- different types of classifiers
- different features

## Acceptability
- Model performs significantly better than random guessing
- P(correct prediction) > 0.5
- Ex: opinion of a person who has no domain knowledge won't have much impact as far as acceptability of the project is concerned
- Each model in ensemble should be better than random model

### Why ensembles work
- Ex: Think of loaded coins which have more probability of head than tail [P(H)>0.5] then if you toss coins multiple times the probability of overall heads will be larger.
- Multiple Models inside an ensemble help in derisking and we hope that the collection will do better.

#### Example
- Consider an ensemble with 100 models consisting of decision trees, logistic regression models, etc. Given a new data point, each model will predict an output 
y
 for this data point. If this is a binary classification, then you simply take the majority score. If more than 50% models say 
y
=
0
, you go with 0, and vice versa.

- Firstly, if each individual model is acceptable, i.e., if it is wrong with a probability of less than 50%, you can show that the probability of the ensemble being wrong (i.e., the majority vote going wrong) will be much less than that of any individual model. In this way your chance of getting the prediction correct will be higher as compared to the individual models in the ensemble as they pool the opinion of each weak learner. This is done by exploiting and leveraging the predictive power of these models to predict the final outcome.

- Also, the ensembles cannot be misled by the assumptions made by individual models. For example, ensembles (particularly random forests) successfully reduce the problem of overfitting. If a decision tree in an ensemble overfits, you let it. Chances are extremely low that more than 50% of the models are overfitted. Ensembles ensure that you do not put all your eggs in one basket.

- In a binary classification task, an ensemble makes decisions by considering the majority vote. This means that if there are n models in the ensemble and more than half of them give you the right answers, you will make the right decision. On the other hand, if more than half of the models give you the wrong answers, you will make a wrong decision. In the coin toss analogy, making a correct prediction corresponds to heads, whereas making an incorrect prediction corresponds to tails.

- If you can prove that the probability of more than half of the models making a wrong prediction is less than that of any of the individual models, you will know that the ensemble is a better choice than any of the individual models. 

##### Coin Toss Explanation
- let's assume heads is analogous to making a correct prediction and since it is a biased coin - P(Head) >> P(Tail). 
- Now, let's assume you have an ensemble of, say, 5 models, and let's take P(Head or Right Predicition) to be 0.6 and P(Tail or Wrong Prediction) to be 0.4 for each of the five models for the sake of demonstration. 
- The probability of making a right prediction for the ensemble then turns out to be approximately 68% (basically calculate P(Head >=3) for majority). 
- As you can see, this is higher (by ~8%) than any of the individual model's performance each of which only has a probability of 60% of being right.
- **It is important to remember that each model in an ensemble is acceptable, i.e., the probability of each model being wrong is less than 0.5 (as a random binary classification model is correct 50% of the time).**

# Voting
- Each classifier has equal say
- Voting combines the output of different algorithms by taking a vote. 
- In the case of a classification model, if the majority of the classifiers predict a particular class, then the output of the model would be the same class. 
- In the case of a regression problem, the model output is the average of all the predictions made by the individual models. 
- In this way, every classifier/regressor has an equal say in the final prediction.
 
![Voting](voting.png)

# Stacking and Blending
- Add another layer in the model, which decides what should be the final output
- Another approach to carry out manual ensembling is to pass the outputs of the individual models to a level-2 classifier/regressor as derived meta features, which will decide what weights should be given to each of the model outputs in the final prediction. In this way, the outputs of the individual models are combined with different weightages in the final prediction. This is the high-level approach behind stacking and blending.
![Stacking](stacking.png)

# Boosting
- Can be used with any technique
- create sequential models
- combines weak learners into stronger ones
- works best with weak models (ex: shallow decision trees)

## Aproaches
- Adaptive
- Gradient

## Adaptive Boosting
![Adaptive Boosting](adaptive_boosting.png)

# Bagging - Boostrapped Aggregation
- creating subsets of data and train different models
- all hyperparameters remain same
- models remain same
- features remain same
- goal: reduce the variance of the algorithm
- Bagging creates different training subsets from the sample training data with replacement, and an algorithm with the same set of hyperparameters is built on these different subsets of data.
- In this way, the same algorithm with a similar set of hyperparameters is exposed to different parts of data, resulting in a slight difference between the individual models. 
- The predictions of these individual models are combined by taking the average of all the values for regression or a majority vote for a classification problem.
![Bagging](bagging.png)

## Benefits
- works well with high variance algortihms like Decision trees, KNN, SVM, Neural Networks
- works best with strong and complex models (ex: fully developed decision trees)
- Easy to parallelize
- Fast

## Limitations of Bagging
- Loss of interpretability
    - you cannot really see the individual trees one by one and figure out what is going on behind the ensemble as it is a combination of n number of trees working together. 
- feature dominance
    - all the trees look similar and hence the property of diversity in ensembles is lost. 
- Sometimes bagging can be computationally expensive

## Methods
- When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting
- When samples are drawn with replacement, then the method is known as Bagging
- When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces
- Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches

# References
- [Ensemble Methods](https://scikit-learn.org/stable/modules/ensemble.html)
- [Ensemble for Regression](https://www.mlsurveys.com/papers/80.pdf)
