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

# Monte-Carlo Control

We know how to evaluate Q-function for a given policy. Now, you can use these q-values for the control problem. 

Recall that the control problem is to improve the existing policy in order to find an optimal policy. Let's see how you can do it.

Policy improvement is done by constructing an improved policy $\pi'$ as the $\epsilon_{}$-greedy maximisation with respect to $q_{\pi}(s, a)$. So, $\pi'(a|s)$ is:

$\pi'(a|s) = \begin{cases}
1 - \epsilon_{} + \frac{\epsilon_{}}{|A(s)|} & a = \text{argmax}_{a'}Q_{\pi}(s,a') \\
\frac{\epsilon_{}}{|A(s)|}  & \text{otherwise}
\end{cases}$

where |A(s)| is the action space, i.e. total possible actions in any given state.

Exploration vs Exploitation

- Exploration refers to the scenario where you do not follow the actions suggested by the policy. Instead, you go and explore some other actions.
- Exploitation refers to the scenario where you religiously follow the actions suggested by the policy.
 

Let's understand what it means to have a $\epsilon$-greedy policy.

$\epsilon_{}$ is a hyperparameter that controls the tradeoff between exploration and exploitation.

- If $\epsilon_{}$ is too small, then actions are biased to be more greedy
- If $\epsilon_{}$ is too large, then actions explore more

It is important too choose $\epsilon_{}$ carefully. To ensure that the improved policy $\pi'$ is better than $\pi$, you fall back to Policy Improvement Theorem which says that:

$\pi' \ge \pi \forall s: q_{\pi}(s, \pi'(s)) \ge v_{\pi}(s)$

# Off Policy

You learnt that the control problem seeks the best action values for the agent to behave optimally.

However, the agent has to behave non-optimally in order to explore other actions (i.e. the actions that are not given by the policy), to find better action than already existing one.

How does the agent learn the optimal policy while it is continuing to explore?

A way to handle the dilemma of exploring and exploitation is by using two policies:
- Target Policy: The policy that is learnt by the agent and that becomes the optimal policy
- Behaviour Policy: The policy that is used to generate the episodes and is more exploratory in nature

This is called off-policy because the agent is learning from data 'off' the behavior policy.

In another case, if the (optimal) policy learnt and the policy that is used to generate episodes are the same, it is called on-policy learning. 

Let's say that you are trying to estimate $q_{\pi}(s, a)$, and $\pi$ is your target policy. But the episodes are generated by some other behaviour policy $\pi'$ where $\pi\neq \pi'$. If the action $a$ generated under policy $\pi$ is not getting explored under $\pi'$, then you'll never have true estimates of $q_{\pi}(s, a)$. Thus, it is important to ensure that every action taken under $\pi$ is also taken, at least occasionally, under $\pi'$.

How do you ensure that every action taken under $\pi$ is also taken, at least occasionally, under $\pi'$. 

Importance sampling is a technique that is used to ensure that the state-actions pairs produced by the target policy are also explored by behaviour policy.

The sample episodes are produced by behaviour policy but you want to learn a target policy.

Thus it is important to measure how important/similar the samples generated are to samples that the target policy may have made. Importance sampling is one way of sampling from a weighted distribution which favours these "important" samples.
