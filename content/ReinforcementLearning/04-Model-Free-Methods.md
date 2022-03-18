---
title: Model Free Methods
description: reinforcement learning technique
date: "2022-03-21"
image: "reinforcement_learning_mc.jpg"
author: "Ayush"
tags: ["machine-learning", "reinforcement-learning"]
---

# Preface

In most real-world scenarios, the model is not available. You have to implicitly infer the model from the observations. Methods designed to solve these scenarios are called model-free methods. Examples of such model-free environments are self-driving space, games such as Chess, Go, etc.

# Monte-Carlo Methods

Monte-Carlo method is based on the concept of the law of large numbers.

The law of large numbers says that if you take a very large sample, it will give similar results as to what you would get if you would have known the actual distribution of the samples.

The expected value of a random variable is the weighted average over the probabilistic distribution values. It can also be thought of as the average (or mean) of a (~infinitely) large enough sample drawn from the same distribution.

$E[X] = c_1X_1 + c_2X_2 \ldots$ such that $c_1 + c_2 + \ldots = 1$

Let's first rearrange the q-value function a bit.

$q_{\pi}(s, a) = \sum_{s',r}p(s',r|s,a)[r + \gamma v_{\pi}(s')] = \sum_{s',r}^{}m_{s',r}[\text{total rewards}_{s'}]$

where $m_{s',r} = p(s',r|s,a)$;

$\text{total rewards}_{s'} = r + \gamma v_{\pi}(s')$

As you know that $E[X] = m_1X_1 + m_2X_2 + \ldots$ where $m_i$ is a probability, such that $m_1+m_2+\ldots = 1$

Hence, the Q-function can be written as the expected value of total rewards over model distribution:

$q_{\pi}(s, a) = \sum_{s', r}m_{s',r}[\text{total rewards}_{s'}] = E_{model}[\text{total reward}] = E_{model}[r + \gamma v_{\pi}(s')]$

Say, you run the episodes an infinite number of times and calculate the rewards $[r + \gamma v_{\pi}(s')]$ earned every time a (state, action) pair is visited. Then take the average of these values. The average value will give you an estimate of the actual expected state-action value for that (state, action) pair. 

The Monte-Carlo methods require only knowledge base (history/past experiences)—sample sequences of (states, actions and rewards) from the interaction with the environment, and no actual model of the environment.

### Points to consider
- In model-free methods, the random variable X is the estimated total reward ($r + \gamma v_{\pi}(s')$)
- For a large number of samples, average reward equals expected reward.

# Monte-Carlo Prediction
Prediction and control are two integral steps to solve any Reinforcement learning problem.
- Prediction - evaluating the value function/policy
- Control - improving the policy basis the state-value function estimates

The Monte-Carlo prediction problem is to estimate $q_{\pi}(s, a)$ i.e. the expected total reward the agent can get after taking an action $a$ from state $s$.

- For estimating this, you need to run multiple episodes
- Track the total reward that you get in every episode corresponding to this (s, a) pair
- The stimated action-value is the given by $q_{\pi}(s, a) \approx \frac{\sum r_i}{n}$

The most important thing to ensure is that, while following the policy $\pi$, each state-action pair should be visited enough number of times to get a true estimate of $q_{\pi}(s, a)$. For this, you need to keep a condition known as the exploring starts. It states that every state-action pair should have a non-zero probability of being the starting pair.

Model-free methods work directly with the q-function rather than state-value functions. The agent needs to estimate the value of each action to find an optimal policy.

Reason for exploring starts: To get an estimate of the state (s, a), you run multiple episodes starting from the same state-action pair (s, a), so you’ll need to start multiple episodes from (s, a), but what you need to ensure is that once the agent reaches s', it takes all possible actions from s' in various episodes (and not just take the ones that are more probable according to the current policy). Because if that happens, then all the $r_i$ (the total rewards in various episodes) will basically be the same.


