---
title: Fundamental Equations of Reinforcement Learning
description: 
date: "2022-06-13"
image: "bellman.png"
author: "Ayush"
tags: ["machine-learning", "reinforcement-learning"]
---


<!-- vim-markdown-toc GFM -->

* [RL Equations - State Value Function](#rl-equations---state-value-function)
  * [Expected value](#expected-value)
  * [Questions](#questions)
* [RL Equations - Action Value Function](#rl-equations---action-value-function)
  * [Example](#example)
    * [Questions](#questions-1)
* [Understanding the RL Equations](#understanding-the-rl-equations)
    * [Important Points](#important-points)
* [Model Free Methods](#model-free-methods)
    * [Cab-Driver Example](#cab-driver-example)
    * [Question](#question)
* [Bellman Equations of Optimality](#bellman-equations-of-optimality)
* [Solving Bellman Equations](#solving-bellman-equations)
    * [Questions](#questions-2)
* [References](#references)

<!-- vim-markdown-toc -->

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

# RL Equations - Action Value Function

## Example
Let's say that in a chess match (one episode), you start from state $s$ and take an action $a$ under the policy $\pi$ and end up in a state $s'$ and got an immediate reward $r$. The q-value is the expected total reward starting from the state $s$ and take an action $a$ (under the policy $\pi$). You can write $q_{\pi}(s,a)$ as:

$q_{\pi}(s,a) = r + v_{\pi}(s')$

where $v_{\pi}(s')$ is the expected future rewards you receive if you start from state $s'$.

But you don't know how the conditions will be at $s'$, so, typically, you won't value your future rewards as much as your current rewards. That is why you discount the future rewards with a factor of $\gamma$.

$q_{\pi}(s,a) = r + \gamma v_{\pi}(s') = r + \gamma(\sum_a\pi(a|s')q_{\pi}(s', a))$

This is a nested equation, where $q_{\pi}(s', a)$ can be re-written as $r' + \gamma v_{\pi}(s'')$. So, the discount factor will keep on multiplying as you keep expanding the terms.

This discount factor determines the importance of future rewards, i.e. how you value the future rewards.

- A factor of 0 would mean that you don't care about future rewards at all and only the immediate reward matters. In such a case: $q_{\pi}(s,a) = r$
- A factor of 1 would mean that you value the immediate and future rewards equally. In such a case: $q_{\pi}(s,a) = r + v_{\pi}(s')$

Another important feature of having a discount factor is for continuous tasks. When total rewards are calculated for continuous tasks, the total rewards may not converge. So, the discount factor will keep the total rewards bounded.

This is a single game. But the opponent won't be playing with the same strategy every time, right? The same applies to the environment.

You could have gotten a different reward and ended up in a different state. So, to calculate the expected value of $q_{\pi}(s,a)$, you need to play the game, again and again, to account for all possible combinations of $s'$ and r.

The same state-action pair can yield very different (successive state-reward) pairs. You need to average over all these combinations to get a sense of the value of performing an action in a particular state. 

Assume that you know the model of the environment $p(s',r|s,a)$. So, the action-value function will be the expected reward over all possible combinations of $s'$ and $r$. To calculate this expected reward, we take the weighted average of the reward over all possible $s'$ and $r$. And this expectation is basically the model of the environment. Thus,

$\boxed{q_{\pi}(s,a) = \sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$

This is the **second fundamental equation** in RL. The intuition of this equation is that the action-value function for an action $a$ taken from state $s$ is the weighted sum of total reward (immediate reward + discounted future reward) over model probabilities.

To summarize:
- **q-value**: an estimate of the_3 value of an action, that can be performed, in a given state.
- **state-value**: an estimate of the value of the state, by taking the weighted sum of the expected value of all the actions.

### Questions

**Why do we need to use discount factor?**

- For continuous tasks, in order to avoid infinite rewards, i.e., to keep the reward bounded, a discount factor is included.
  - Continuous tasks don't end. If we don't discount the rewards, it will be difficult to keep a bound on value functions
- The future is uncertain, i.e., you are quite unsure about the future. So, it's better not to value your future rewards too much. 
- If it’s financial reward, immediate returns would earn more interest over delayed rewards

---

**What is the total reward calculated if started from state s and immediate reward is r and future rewards are r(s’), r(s’’),…, given future rewards are discounted by $\gamma$?**

Total reward = $r + \gamma*r(s') + \gamma^2*r(s''')+...$
- As we move further in future, lower importance is given to future rewards

---

**Choose correct statement**

| Statement                                                                                                                   | Correct / Incorrect |
|-----------------------------------------------------------------------------------------------------------------------------|---------------------|
| The value of an action, $q_{\pi}(s,a)$, is the sum of immediate reward and the sum of the future rewards for an episode     | Incorrect           |
| The value of an action, $q_{\pi}(s,a)$, depends on the expected immediate reward and the expected sum of the future rewards | Correct             |
| The value of a state, $v(s)$, depends on the next reward and the sum of the remaining rewards                               | Incorrect           |

- $q_{\pi}(s,a)$ is the expected value of total rewards over all possible combinations of $s'$ and $r$.

---

**Suppose an agent goes through one episode. And he gets the following immediate rewards for the following states:**

**S0, R0 = 1; S1, R1 = 2; S2, R2 = -1; S3, R3 = 0.**

**Assume policy is deterministic and the environment is stochastic and he ends up in different states and rewards. Also, S3 is a terminal state and once the agent reaches this state, the episode ends. Assume $\gamma = 0.8$. What is v(S0)?**

- 1.96
- for S0 = 1 + 0.8*2 + 0.8^2*(-1) = 1.96

# Understanding the RL Equations

- $\boxed{v_{\pi}(s) = \sum_{a\sim\pi(a|s)}\pi(a|s)q_{\pi}(s|a)}$

- $\boxed{q_{\pi}(s,a) = \sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$

### Important Points
- $q_{\pi}(s,a)$ represents the value of performing a particular action a while in state $s$.
- $v_{\pi}(s)$ represents the value of the state $s$. This value is calculated by  taking the average value of preforming all the possible actions from state s. Here, you multiply the value corresponding to performing an action a, with the probability of performing the action when in state s.

You can use $q_{\pi}(s, a)$ function in $v_{\pi}(s)$ and come up with an equation that only deals with value functions:

$\boxed{
v_{\pi}(s) = \sum_{a}\pi(a|s)\sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}
$

Similarly you can substitute $v_{\pi}(s)$ in $q_{\pi}(s, a)$ function and come up with an equation that only has action-value functions

$\boxed{q_{\pi}(s,a) = \sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma \sum_{a\sim\pi(a|s)}\pi(a|s)q_{\pi}(s|a)}$

Here $\pi(a|s)$ is policy and $p(s'r,r|s,a)$ is the model.

# Model Free Methods

In most real-life scenarios with large state and action spaces, the model of the environment is not available (i.e. model-free methods). In such cases, you can compute the q-function using the fact that it is the expected value of the total reward:

$q_{\pi}(s, a) = E_M[r + \gamma v_{\pi}(s')]$

To compute the expected value, you take multiple episodes where the agent was in state ‘s’ and took the action ‘a’. For this particular state-action pair, you will get different (s', reward) pairs for different episodes. To get an estimate of the expected value of this state-action pair - $q_{\pi}(s, a)$ - you take the_3 average of the different rewards you get via these different episodes.

### Cab-Driver Example

Consider the example of a cab driver. She has to go from point A (state A) to point B (state B). Here one episode means that the driver is going from state A to state B. The driver performs 100 such episodes. The policy that she is following is stochastic. Let’s assume that she encounters state C in most of these episodes. When in state C, in some episodes she takes the action RIGHT, while in a few others she takes the actions UP, LEFT, DOWN. You want to calculate the state-value of state C.

 

To calculate the state-value of state C, you calculate the reward associated with the pair (state C, RIGHT), (state C, LEFT), (state C, UP) and (state C, DOWN) in all episodes corresponding to each of the state-action pairs. 

 

- q(state C, RIGHT) = average value of the rewards corresponding to this state-action pair in all the episodes
- q(state C, LEFT) = average value of the rewards corresponding to this state-action pair in all the episodes
- q(state C, UP) = average value of the rewards corresponding to this state-action pair in all the episodes
- q(state C, DOWN) = average value of the rewards corresponding to this state-action pair in all the episodes 

v(state C) = $\pi$(Right|C)*q(state C, RIGHT) + $\pi$(Left|C)*q(state C, Left) + $\pi$(Up|C)*q(state C, Up) + $\pi$(Down|C)*q(state C, Down)

For this you can run multiple episodes starting from the state s and taking action a; and compute the average of total rewards obtained in each episode. This average will provide an estimate of the expected value of $q_{\pi}(s, a)$.

**Formal justification of using q-value not value-function in model-free methods:**

Now, to compute the value function, you need to evaluate q-function. And given that you don't have the model of the environment, you can't directly evaluate q-function, thereby, can't substitute q-function in value function equation. And this is a typical scenario. 

 

Intuitively, with a model, value-function is enough to find an optimal policy, as the agent can look ahead one step and choose the action that leads to the best combination of reward and state. But without a model, the agent needs to estimate the value of each action to find an optimal policy.

Most of the model-free methods directly work with q-values. Multiple episodes are run to get its estimate. From the q-values itself, we can derive the policy.

### Question

What is meant by model of the environment?

- Model of the environment is something that imitates how environment behaves
  - Model of the environment is basically a probabilistic distribution telling the agent what could be the consequence when the agent takes an action a from state s

- Model of the environment predicts the next state and reward given the current state and action
  - Model of the environment is basically a probabilistic distribution telling the agent what could be the consequence when the agent takes an action a from state s

# Bellman Equations of Optimality

Policy $\pi$ is better than $\pi'$ if, for all states, the value function is higher if you follow policy $\pi$ than if you follow policy $\pi'$. Mathematically,

$\pi \ge \pi'$ if $\forall s:v_{pi}(s) \ge v_{\pi'}(s)$

A policy $\pi*$ is called optimal only if $\forall \pi:\pi* \ge \pi$

$\implies \forall {\pi} \forall s: v_{\pi*}(s) \ge v_{\pi}(s)$

Optimal policy refers to finding the best action **a** in state **s**. In this case, as is the case for many MDPs, the optimal policy is deterministic, i.e., there is only one optimal action to take in each state. 

Let's build equations for optimal state and action-value functions.

Value of a state under an optimal policy must be equal to the expected total return for the best action from that state. At each state, greedily pick the best action that has the maximum q-value. 

The optimal action-value function $q*(s,a)$ is defined as:


$q^*(s,a) = \sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi^*}(s'))$

Also,

$v_{\pi^*}(s) = max_{\pi}(v_{\pi}(s)) = max_{\pi}(\sum \pi(a|s)*q_{\pi}(s,a))$

Now, you have already picked the best value for $q*(s,a)$ for the policy. The right side term can be maximum only if you set the probability of picking the action for which $q*(s,a)$ is maximum as 1 and all to 0.


For reference, sample values are picked for a random variable from [ 3 4 5 6 ] with a probability distribution as [ 0.1 0.3 0.4 0.2 ] i.e. the probability of picking 3 is 0.1, 4 is 0.3, 5 is 0.4 and 6 is 0.2. 

The expected value of random variable E[X] is calculated as 0.1x3 + 0.3x4 + 0.4x5 + 0.2x6 = 4.7. But you need to get the maximum value among all the values. For that, you would set the probability value for 6 as 1 and for others as zero. 

The same idea applies to state and action-value functions. Since v(s’) = 6 is highest out of all the v(s’) values, you make its probability = 1.

We can define optimal policy as:

$\pi^*(a^*|s) = \begin{cases}
   1 & a^* = \text{argmax}_a q^*(s,a) \\
   0 & \text{otherwise}
\end{cases}
$

To summarise, the state-value and action-value functions for the optimal policy can be defined as:

- $v^*(s) = \sum_a \pi^*(a|s)q^*(s,a)$
- $q^*(s,a) = \sum_{s'}\sum_{r}p(s', r|s, a)[r + \gamma v^*(s')]$

These equations relate the optimal policy to the optimal state and optimal action-value equations. These equations are popularly known as the **Bellman Equations of Optimality**.

# Solving Bellman Equations

There are 4 basic equations

- State-value and action-value functions for policy $\pi$ (These equations are known as **Bellman Expectation Equations**):
- $v_{\pi}(s) = \sum_a \pi(a|s)q_{\pi}(s,a)$

-  ${q_{\pi}(s,a) = \sum_{s'}\sum_{r}p(s',r|s,a)(r + \gamma v_{\pi}(s'))}$
- $v^*(s) = \sum_a \pi^*(a|s)q^*(s,a)$
- $q^*(s,a) = \sum_{s'}\sum_{r}p(s', r|s, a)[r + \gamma v^*(s')]$

where $p(s',r|s,a)$ is the model of the environment

We will start with methods that assume that model of the environment $p(s',r|s,a)$ is available. These methods are called **model-based methods**.

All these equations work together to arrive at optimal policy and optimal value functions. There are broadly two steps involved in arriving at optimal policy and state-value functions:
- **Policy Evaluation**: Say you know a policy and you want to evaluate how good it is, i.e., compute the state-value functions for the existing policy
- **Policy Improvement**: Say you know the value function for each state and you want to improve the policy which was used to compute these value functions, i.e., improve the policy using the existing state value function. This new policy could not have been found directly from the old policy without calculating those value functions.

The process of learning an optimal policy is analogous to learning to play, say, Chess. You want to learn the optimal policy (i.e. learn to play well), and to do that you need to know the ‘values’ of the various states (i.e. get an intuition of which states are good). So you start playing with some policy (the initial ones are likely to be bad) and compute the ‘state-values’ under that policy. Once you have played enough games under a policy, you can try changing your policy, compare that with other policies, and gradually improve your policy.

Policy Improvement is done to maximise the total rewards, by finding the best action for each state.

Consider that the agent is at state s following some policy $\pi$. The value function at state s is given by:

$v_{\pi} = \sum_a\pi(a|s)q_{\pi}(s, \pi'(s))$

Now, you want to find out that if there is some other policy $\pi'$ which has better state-value. Assume that $\pi' \ge \pi$. And you take an action $a$ according to policy $\pi'$ at state $s$.

If $\pi' \ge \pi$ is true, then $v_{\pi}(s) \le q_{\pi'}(s, \pi'(s))$ -- (1)

According to the policy improvement theorem:

$\pi' \ge \pi$ is true, then $v_{\pi}(s) \le v_{\pi'}(s)$ -- (2)

If you can prove that the equation (1) is same as equation (2) then it is proved that $\pi' \ge \pi$

Now, let's see how we can define $\pi'$ as an improved version of $\pi$. The improvement step is basically choosing the best action $a^*$ at each state, i.e., an action that gives maximum q-value.


Mathematically:

$a^* = \text{argmax}_a q_{\pi}(s, a)$

$\pi'(a|s) = \begin{cases}
   1 & a = a^* \\
   0 & \text{otherwise}
\end{cases}
$

Let's also understand how this greedy approach will give better estimates:

$v_{\pi}(s) = \sum_a \pi(a|s)q_{\pi}(s,a) \le \text{max}_a q_{\pi}(s,a)$

And the action for which $q_{\pi}(s,a)$ is maximum, we orient the entire probability towards that action. Any weighted sum with the probabilities can never be more than the maximum value of that variable.

### Questions

**Why do you need to compute value functions?**

- To understand the importance of each state
  - The value functions tells the inherent value of that state. If the agent knows which states have high values, it will try to align its actions to reach at those states

- To find out better policies
  - The value functions tells the inherent value of that state. If the agent knows which states have high values, it will try to align its actions to reach at those states

---

**If the optimal policy derived is deterministic, that means an agent has only limited set of actions to exploit. This can be of issue in model-free methods. Is this statement correct? If yes, which of the reason justifies the statement?**

- Yes, in model-free methods, we need to interact with the environment to find out the best policy so we need to explore the entire state space while figuring out best actions.
- We are not given the model of the environment. So, only exploitation will not explore the entire state space and therefore, we won't get true estimates of value-functions





# References

- Mathematical Proof for Policy Improvement: https://learn.upgrad.com/course/1611/segment/9859/110977/335647/1743753
