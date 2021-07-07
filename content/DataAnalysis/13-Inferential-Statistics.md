---
title: Inferential Statistics
description: general information about inferential statistics
date: "2021-07-11"
image: "statistics.jpg"
author: "Ayush"
tags: ["data-analysis", "statistics"]
---

# Purpose of Inferential Statistics
From a small dataset, we have to figure out information such that it applies to the whole population.  
We will be able to estimate population data from sample data but not find the exact values.  
We can make reasonable assumptions with limited level of certainty. 

## Expected Value
Expected Value is the average value that any random variable X will take, given it's probability of occurrence.  
EV(x) = x1 * P(X=x1) + x2 * P(x=x2) + x3  * P(x=x3) + ... + xn * P(x=xn)  

### In Casinos, why does the house always win?
Answer: House always wins because Casinos have an expected value which is negative. This way, in the long run, even though some players might win large sums of money, the losers collective will lose a lot more money, eventually making the house win in terms of total cash flow.

## Probability Distribution
It is the mathematical function that gives the probabilities of occurrence of different possible outcomes for an experiment.   
It is a mathematical description of a random phenomenon in terms of its sample space and the probabilities of events.  
The probabilities of occurrence of any random variable X taking any of the outcomes from the sample space

## The goals of inference
- Estimate and quantify the uncertainty of an estimate of a population quantity (the proportion of people who will vote for a candidate).
- Determine whether a population quantity is a benchmark value (“is the treatment effective?”).
- Infer a mechanistic relationship when quantities are measured with noise (“What is the slope for Hooke's law?”)
- Determine the impact of a policy? (“If we reduce pollution levels, will asthma rates decline?”)
- Talk about the probability that something occurs.

## Concerns
- Is the sample representative of the population that we'd like to draw inferences about?
- Are there known and observed, known and unobserved or unknown and unobserved variables that contaminate our conclusions?
- Is there systematic bias created by missing data or the design or conduct of the study?
- What randomness exists in the data and how do we use or adjust for it? Here randomness can either be explicit via randomization or random sampling, or implicit as the aggregation of many complex unknown processes.
- Are we trying to estimate an underlying mechanistic model of phenomena under study?

## Takeaways
- Inferential statistics is a field where you have to determine the value for the whole population given some sample data (small dataset). Using statistics, we can give a reasonable estimate but not an exact answer. This is why, for such problems, we use probability
- Probability distribution graphs are a much better way to visualize and understand the probabilities that a random variable X can take
- We should define the random variable X to be directly linked to the problem we are trying to solve or giving an estimate about

---

# Types of Distributions

## Binomial Distribution
### Conditions for Binomial distribution
1. Total number of trials is fixed at n
1. Each trial is binary i.e. has only two possible outcomes - success or failure
1. Probability of success is same in all trails, denoted by p
1. **Formula:** P(X=r) = P(Getting r successes in n trials) = **<sup>n</sup>C<sub>r</sub>\(p\)<sup>r</sup>(1-p)<sup>n-r</sup>**

### Examples
| SNo | Binomial Distribution Applicable                                        | Binomial Distribution Not Applicable                                           |
|-----|-------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| 1.  | Tossing a coin 20 times to see how many tails occur                     | Tossing a coin until a heads occurs |
| 2.  | Asking 200 randomly selected people if they are older than 21 or not    | Asking 200 randomly selected people how old they are                           |
| 3.  | Drawing 4 red balls from a bag, putting each ball back after drawing it | Drawing 4 red balls from a bag, not putting each ball back after drawing it    |

### Explanation
If you toss a coin 20 times to see how many tails occur, you are following all the conditions required for a binomial distribution. The total number of trials is fixed (20), and you can only have two outcomes, i.e. a tails or a heads. The probability of getting a tails is equal to 0.5 each time you toss the coin.

In a way, this is similar to drawing 20 balls out of a bag, replacing each ball after drawing it, and seeing how many of the balls are red. Here, the probability of getting a red ball in one trial is 0.5.

When you toss a coin until a heads occurs, the total number of trials is not fixed. This is similar to taking out balls from the bag repeatedly until you draw a red ball. You can still find the probability of getting a heads in 1 trial, in 2 trials, in 3 trials etc. and so on, but you cannot use binomial distribution to find that probability.


In the second example, where binomial distribution is not applicable, the experiment does not have only two outcomes, but many. It is similar to taking out balls from a bag that contains red, blue, black, orange, and other colours of balls. The probability distribution for this experiment cannot be made using binomial distribution.

In the final example, the probability of the trials is not equal to each other. For example, the probability of drawing a red ball in the first trial is 
3&#47;5. Now, in the second trial, the probability of drawing a red ball would be equal to 2/4, not 3/5, as the red ball taken out in the first trial was not put back. Hence, the probability of getting the combination Red-Red-Red-Blue, for example, would be 3/5 * 2/4 * 1/3 * 2/2, which is not the value we got while deriving binomial distribution (3/5 * 3/5 * 3/5 * 2/5). Again, you cannot use binomial distribution to find the probability in this case.

##### In other words, binomial distribution is applicable in situations where there are a fixed number of yes or no questions, with the probability of a yes or a no remaining the same in all the questions.

---

## Poisson Distribution

### Attributes of a Poisson Experiment
A Poisson experiment is a statistical experiment that has the following properties:
- The experiment results in outcomes that can be classified as successes or failures.
- The average number of successes (μ) that occurs in a specified region is known.
- The probability that a success will occur is proportional to the size of the region.
- The probability that a success will occur in an extremely small region is virtually zero.

Note that the specified region could take many forms. For instance, it could be a length, an area, a volume, a period of time, etc.

### Notation
The following notation is helpful, when we talk about the Poisson distribution.

`e`: A constant equal to approximately 2.71828. (Actually, e is the base of the natural logarithm system.)  
`μ`: The mean number of successes that occur in a specified region.  
`x`: The actual number of successes that occur in a specified region.  
`P(x; μ)`: The Poisson probability that exactly x successes occur in a Poisson experiment, when the mean number of successes is μ.
Poisson Distribution  

A Poisson random variable is the number of successes that result from a Poisson experiment. The probability distribution of a Poisson random variable is called a Poisson distribution.

### Formula
P(x, &#181;) = e<sup>-&#181;</sup>&#181;<sup>x</sup>/x!

---

## Negative Binomial Distribution
- Also called Pascal Distribution
- There are 3 ways on defining Negative Binomial Distribution, hence we should ask for clarification when someone uses that term
    1. Number of trials to produce r successes in a negative binomial experiment
    1. Number of successes before binomial experiment results in k failures
    1. Number of failures before binomial experiment results in r successes

### Why is it called Negative Binomial Distribution?
When you hear the term negative, you might think that a positive distribution is flipped over the x-axis, making it negative. However, the “negative” part of negative binomial actually stems from the fact that one facet of the binomial distribution is reversed: in a binomial experiment, you count the number of Successes in a fixed number of trials; in the above example, you’re counting how many aces you draw. In a negative binomial experiment, you’re counting the Failures, or how many cards it takes you to pick two aces.

### Notation
The following notation is helpful, when we talk about negative binomial probability.

`x`: The number of trials required to produce r successes in a negative binomial experiment.  
`r`: The number of successes in the negative binomial experiment.  
`P`: The probability of success on an individual trial.  
`Q`: The probability of failure on an individual trial. (This is equal to 1 - P.)  
b*(x; r, P): Negative binomial probability - the probability that an x-trial negative binomial experiment results in the rth success on the xth trial, when the probability of success on an individual trial is P.  
<sup>n</sup>C<sub>r</sub>: The number of combinations of n things, taken r at a time.  
`n!`: The factorial of n (also known as n factorial).  

### Example
Suppose we flip a coin repeatedly and count the number of heads (successes). If we continue flipping the coin until it has landed 2 times on heads, we are conducting a negative binomial experiment. The negative binomial random variable is the number of coin flips required to achieve 2 heads. In this example, the number of coin flips is a random variable that can take on any integer value between 2 and plus infinity. The negative binomial probability distribution for this example is presented below.

| Number of coin flips | Probability |
|----------------------|-------------|
| 2                    | 0.25        |
| 3                    | 0.25        |
| 4                    | 0.1875      |
| 5                    | 0.125       |
| 6                    | 0.078125    |
| 7 or more            | 0.109375    |

### Negative Binomial Probability
The negative binomial probability refers to the probability that a negative binomial experiment results in r - 1 successes after trial x - 1 and r successes after trial x. For example, in the above table, we see that the negative binomial probability of getting the second head on the sixth flip of the coin is 0.078125.

Given x, r, and P, we can compute the negative binomial probability based on the following formula:  
__b*(x;r, P) = <sup>x-1</sup>C<sub>r-1</sub>*P<sup>r</sup>(1-P)<sup>x-r</sup>__

### The Mean of the Negative Binomial Distribution
If we define the mean of the negative binomial distribution as the average number of trials required to produce r successes, then the mean is equal to:  
`μ = r / P`  
where, 
- `μ` is the mean number of trials, 
- `r` is the number of successes, and 
- `P` is the probability of a success on any given trial.

---

## Geometric Distribution
The geometric distribution represents the number of failures before you get a success in a series of Bernoulli trials.   
Note: Special case of Negative Binomial Distribution, where 'r' i.e. number of successes is 1  

### Assumptions for the Geometric Distribution
- There are two possible outcomes for each trial (success or failure).
- The trials are independent.
- The probability of success is the same for each trial.

### Formula
P(x) = (1 − p)<sup>x-1</sup>p

---
---


# References
- https://towardsdatascience.com/bean-machine-and-the-central-limit-theorem-8b0b23d6e887
- https://leanpub.com/LittleInferenceBook/read
- https://www.youtube.com/watch?v=6YDHBFVIvIs - normal distribution - galton board experiment
- https://www.khanacademy.org/math/ap-statistics/random-variables-ap/binomial-random-variable/e/identifying-binomial-variables
- https://stattrek.com/probability-distributions/poisson.aspx
- https://www.statisticshowto.com/probability-density-function/
- https://stattrek.com/probability-distributions/negative-binomial.aspx
- https://www.statisticshowto.com/negative-binomial-experiment/
