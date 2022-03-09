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
