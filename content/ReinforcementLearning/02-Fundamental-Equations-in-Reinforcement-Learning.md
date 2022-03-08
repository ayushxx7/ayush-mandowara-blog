---
title: Fundamental Equations of Reinforcement Learning
description: 
date: "2022-06-03"
image: "bellman.png"
author: "Ayush"
tags: ["machine-learning", "reinforcement-learning"]
---

# RL Equations - State Value Function

With grounds set for the reinforcement learning problem, let's \start with some basic equations relating:

- Policy: $\pi(a|s)$
- State-value: $v(s)$
- q-value: $q(s,a)$

## Expected value
Let's try to understand this through the game of Chess:

Every time you play the game starting from the same board position (same state) and with the same policy (stochastic or deterministic), the end outcome will be different (total rewards will be different) because you don’t know how the opponent is going to play. In most of the scenarios, the environment is stochastic (the opponent’s move will decide the agent’s next state which is not deterministic), so every time you run an episode from the state $s$ following policy $\pi$, you will get different immediate and future rewards, thereby different total rewards.

Hypothetically, say you get a total reward of 10, 20, 15, 5, 30 in the first 5 games starting from the state 's'. The average reward is 16. What if the game is played infinite number of times, what will the average be? According to the law of large numbers, the average value will converge to the expected value.

The same principle applies here. If you run a large number of episodes (play a large number of games) from the state $s$ following the policy $\pi$, the expected total reward will be the value of that state under the policy $\pi$. Similarly, you can think of q-values.

Mathematically, the two functions are defined as follows:

- Value Function: $v_{\pi}(s) = E[R_{\pi}(s)]$
- Action-Value Function: $q_{\pi}(s,a) = E[R_{\pi}(s, a)]$

where $R_{\pi}(s)$ is the total reward earned from state $s$ following the policy $\pi$; and $R_{\pi}(s,a)$ is the total reward earned from state $s$ after taking an action $a$ under the policy $\pi$.

Let's extend the example of chess a little more to relate these two equations together. Assume, in a game (one episode), you were at some state $s$, you could have taken some $n$ actions according to $\pi(a|s)$. Assume that the policy is stochastic.

The value of state $s$ (total reward) is $R_{\pi}(s)$ and for each action $a$ taken (from state $s$) with probability $\pi(a|s)$, the q-value (total reward earned after taking $a$ from state $s$) is $R_{\pi}(s,a)$

Mathematically, it can be written as:
$R_{\pi}(s) = \sum_{a\sim\pi(a|s)}\pi(a|s)R_{\pi}(a|s)$

Taking expectation over both sides (to get expected value over multiple episodes), you will get:

$\boxed{v_{\pi}(s) = \sum_{a\sim\pi(a|s)}\pi(a|s)q_{\pi}(s|a)}$

This is the **first basic equation** of RL. The intuition of this equation is that the value function of a state s is the weighted sum over all action-value functions for different actions that can be taken from state s.

## Questions
**We have assumed that average value of total rewards is equal to expected value of rewards? Is this assumption correct? And why is this correct?**

- Yes, the assumption is correct. By the law of large numbers, the average value of a variable will converge to its expected value

**Choose correct statement**

| Statement                                                                                       | Correct / Incorrect |
|-------------------------------------------------------------------------------------------------|---------------------|
| $v_{\pi}(s)$ is the weighted sum of the value of all the actions that can be taken in a state s | Correct             |
| $q_{\pi}(s)$ is the weighted sum of the value of all the actions that can be taken in a state s | Incorrect           | 
