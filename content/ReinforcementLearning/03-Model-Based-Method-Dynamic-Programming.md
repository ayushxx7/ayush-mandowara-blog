---
title: Model Based Methods - Dynamic Programming
description: reinforcement learning technique
date: "2022-03-14"
image: "reinforcement_learning_dp.jpg"
author: "Ayush"
tags: ["machine-learning", "reinforcement-learning"]
---

# Preface

There are two basic steps for solving any RL problem.

- Policy evaluation refers to the iterative computation of the value functions for a given policy.
- Policy improvement refers to finding an improved policy given the value function for an existing policy.

Two basic approaches to solve an RL problem:
- Policy Iteration and
- Value Iteration

Both these techniques use these two steps repeatedly to arrive at optimality. Either of these can be used to reliably compute optimal policies and value functions given complete knowledge of the MDP.

The basic assumption of model based methods is that the model $p(s', r|s, a)$ is available.

# Dynamic Programming

Dynamic Programming (DP) is a method of solving complex problems by breaking them into sub-problems. It solves the sub-problems and stores the solution of sub-problems, so when next time same subproblem arises, one can simply look up the previously computed solution.

Why should you apply dynamic programming to solve Markov Decision Process?

1. Bellman equations are recursive in nature. You can break down Bellman equation to two parts – (i) optimal behaviour at next step (ii) optimal behaviour after one step
2. You can cache the state value and action value functions for further decisions or calculations.

# Policy Iteration

## Steps
1. Initialize a policy randomly
2. Policy Evaluation:
    1. Measure how good that policy is by calculating the state-values $v_{\pi}(s)$ corresponding to all the states until the state-values are converged.
    2. Also known as the prediction problem.
3. Policy Improvement:
    1. Make changes in the policy you evaluated in the policy evaluation step.
    2. Also known as the control problem.

## Algorithm
In the policy iteration algorithm, you first initialise a policy $\pi$ randomly. Next, you evaluate the policy according to the Bellman equation. For each state s, you compute:

$v_{\pi}(s) = \sum_{a}\pi(a|s)[\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))]$

The meaning of the three summations: 
- Summation over all possible actions which the agent can take when in state s following policy $\pi$. 
- Once the initial state and action are fixed, the summation of probabilities of all possible next states and rewards.

$v_{\pi}(s)$ is evaluated until the state-values are converged for the policy $\pi$; after that you improve the policy.

How do you improve the state-value function? 

You do this by following a greedy approach, i.e, by taking the best action at every state.  The action with the maximum state-action value $q_{\pi}(s, a)$ is the best action. The improved policy $\pi'$ is:


$\pi'(a|s) = \begin{cases}
1 & a = \text{argmax}_a[\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'')]  \\
   0 & \text{otherwise}
\end{cases}
$

To calculate the $v_{\pi}(s)$ in the policy evaluation step, you need the value of $v_{\pi}(s')$. But you don't have any estimate for $v_{\pi}(s')$. Thus, apart from initializing the policy, you also initialize the state-value function randomly.

Let's say that you have N states. In the policy evaluation step, you can write the value function for each state as:

${v_{\pi}(s_1) = \sum_{a}\pi(a|s_1)\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$


${v_{\pi}(s_2) = \sum_{a}\pi(a|s_2)\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$


${v_{\pi}(s_3) = \sum_{a}\pi(a|s_3)\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$

.
.
.

${v_{\pi}(s_N) = \sum_{a}\pi(a|s_N)\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$

There are N variables - $v_{\pi}(s_1), v_{\pi}(s_2), ..., v_{\pi}(s_N)$. This is a system of simultaneous linear equations in N variables. Theoretically, you can solve it to get the state-value functions. However, practically the number of states is generally quite large and so we user alternate iterative techniques to solve this.

The stopping condition for Policy Iteration is:
- For each state $v_{\pi}(s) = v_{\pi'}(s)$
- The value of a state for the improved policy should be the same for the policy we started with.

# References

- [Dynamic Programming - Stanford](https://web.stanford.edu/class/cs97si/04-dynamic-programming.pdf)
