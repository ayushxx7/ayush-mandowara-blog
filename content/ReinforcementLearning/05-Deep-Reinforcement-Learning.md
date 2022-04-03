---
title: Deep Reinforcement Learning
description: reinforcement learning technique
date: "2022-03-21"
image: "deep_rl.jpg"
author: "Ayush"
tags: ["machine-learning", "reinforcement-learning"]
---

# Preface

In classical reinforcement learning, you learnt about the agent : environment interaction, Markov Decision Process, dynamic programming, Monte Carlo methods and Q-learning.

When the state space is relatively small, e.g. a 3x3 grid, or even a few thousand states etc., it is easy to visit each and every state and estimate its Q-value. However, when the state space is large, visiting every space may not be possible. So, the classical approach of estimating the Q-value by visiting each state-action pair wouldn't work.

DeepMind's AlphaGo recently defeated the 18-time world champion Lee Sedol 4-1 in a historic match. Go is an extremely complex board game : the number of possible 'states' in Go is more than the number of atoms in the universe! You can watch the trailer of a documentary on AlphaGo [here](https://www.youtube.com/watch?v=8tq1C8spV_g).

The algorithm used to train AlphaGo was based on deep reinforcement learning. 

Let's take another example : suppose you are training a robotic arm to play table tennis. How many positions (states) the arm can take in the space? Infinite, right? These positions will be guided by the position of the ball. The task of the robotic arm is to hit the ball. There can be infinite possible angles (the actions) to hit a ball in any given position. How will you decide the optimal action for each of these positions? By visiting each state-action pair and storing its Q-value? But there are infinite state-action pairs and you can not possibly visit ALL of them!

This is where deep learning comes in. Using deep learning, instead of finding the Q-value for every state, you learn the Q-function or policy etc. This is very similar to what you do in supervised machine learning. From a few hundred thousand samples, you learn a model to label the unseen samples.

# Why Deep Reinforcement Learning

In classical reinforcement learning, you make a Q-table representing all possible states. What happens if the agent encounters an unseen state? This unseen state would not be present in the Q-table. So, it would not have associated Q-values for each action. In such a case, you would not be able to decide the optimal action from the Q-table.

Let's take the example of a self-driving car.

In a self-driving car, if the state is represented by (position of the vehicles, number of vehicles on the road), the agent will always encounter new states, no matter how many states it has already seen. The Q-table will not have all possible (unseen) states, so you would not be able to estimate the best action for these states the regular RL way.

When you have a very large state-space, the agent may not be able to visit each state because the state-space is too large. In the Q-table, if a particular state is not present, you would not know which action should be taken and hence cannot find optimal action for an unvisited state.

Deep RL solves this problem by learning the model of the Q-value function $q(s, a)$. The deep learning network acts as a function approximator that tries to approximate the Q-value function. Please note that apart from the Q-value function, you can learn other functions as well such as the state value function $v(s)$ or even the policy $\pi(a|s)$

Also, to learn these functions, it is not necessary (in principle) to use deep learning models - you can use conventional machine learning models as well. However, since deep learning models can learn arbitrarily complex functions in practice they prove to work much better.

# Parameterized Representation

You saw that when the number of states is large, creating a 'Q-table' by visiting each state-action pair is not feasible. Thus, you try to approximate the Q-function. Thus, in the parametrised approach, the Q-function is represented as 

$w_0 + w_1S_1 + w_3S_3 + \ldots$

where $S$ represents the 'input' to the netowrk. Here, $S$ can represent a state or a (state, action) pair etc. The model here is the set of weights ($w_0, w_1, w_2 \ldots$) which are to be learnt during training. In deep learning, the function is far more complex (and almost never linear).

Recollect that the parameters of a deep learning model are basically the weights (and biases). In other words, a deep learning model is parametrised by its weights which are learnt during training.

# Generalizability in Deep RL

In deep reinforcement learning, you model the action-value function (or the policy or the value function) using the function approximator based on the 'seen' states. It becomes important that the model performs well on the 'unseen' states.

For example, say you are training an autonomous car. The car will be trained in certain traffic conditions and would be exposed to certain states, but it should be able to perform in new, unseen states as well.

A function approximator should be able to generalise well on the unseen states.

The model should be able to 'generalise' and take optimal actions on the states that the agent has not encountered before, assuming that the training dataset and the unseen dataset come from the same distribution.

For example, if you are playing table tennis with a robotic arm, the arm has to hit the ball for all possible positions of the ball (and not just for the positions of the ball it has learned during training).

So, the function approximator should be able to 'generalise' to unseen data points. Given some 'seen' states, it should be able to predict the optimal action for the 'unseen' positions of the ball. This property is valid for any (well-trained) model in machine learning. 

You will use a neural network for approximating these functions: state-value, action-value, policy etc. As pointed out by the professor, you can use other algorithms as well: decision trees, SVM etc., but in practice, the complexity of most RL tasks require deep neural networks.


### Advantages of Function Approximator

- Don’t have to visit every state, and able to approximate value function for unseen states.
    - The idea of using value function approximation is we do not have to visit each and every state to approximate its value. Also, even its not possible as the number of states will be too large to visit all the states. So, we need value function approximation to approximate/ generalise.
- Don’t have to store all the states and/or actions in the memory.
    - Since we are using function approximator, we don’t have to store all the states and/or action in Q-table in memory.


The first successful demonstration of deep RL at par with the human-level performance was playing Atari games by DeepMind. The screenshots of the game were taken. Each screenshot represented a state. Each state was then passed to the deep reinforcement learning network.

# Three classes of Deep RL

1. Deep Q-learning : value-based
    - The task is to learn the state (or state-action) value function
2. Policy Gradient : policy-based
    - The task is to learn the policy function
3. Actor-Critic : both value and policy based
    - The task is to learn both the state-value function and the policy function, and so these methods use two neural networks. 
    - The actor (policy-based) takes the action and the critic (value-based) tells how good that action is.

You know that neural networks are powerful function approximators and can approximate any complex function. The parameters of the neural network are the weights and the biases.

# References
- [Alpha Go](http://www.wired.co.uk/article/alphago-deepmind-google-wins-lee-sedol)
- [Go](https://en.wikipedia.org/wiki/Go_(game))
- [Robot learns to play Table Tennis](http://www.youtube.com/watch?v=SH3bADiB7uQ)
