---
title: Central Limit Theorem
description: using central limit theorem for sampling distributions
date: "2021-08-11"
image: "statistics.jpg"
author: "Ayush"
tags: ["data-analysis", "statistics"]
---

# Sampling Terminology
1. Sample Mean ($\bar X$)
2. Population Mean ($\mu$)
3. Sample Size ($n$)
4. Population Size ($N$)
5. Population Standard Deviation ($\sigma$)
6. Sample Standard Deviation ($S$)

## Why taking large number of samples is good?
- removes sample bias by accomodating the diversity that is inherent in the population

sampling distribution's standard deviation (standard error) = $SE = \frac{\sigma}{\sqrt n}$

# Central Limit Theorem
1. Sampling distribution's mean ($μ_{x}$) = population mean ($\mu$)
2. sampling distribution's standard deviation (standard error) = $\frac{\sigma}{\sqrt n}$
3. for n > 30, the sampling distribution becomes normally distributed

We can use the central limit theorem to calculate population mean from sample means.

# Confidence Level
- Probability associated with the claim is called confidence level
- Z* values for commonly used confidence levels
    | Confidence Level | Z*     |
    |------------------|--------|
    | 90%              | +-1.65 |
    | 95%              | +-1.96 |
    | 99%              | +-2.58 |

# Margin of Error
- Maximum error made in sample mean is called margin of error
- Margin of error between population mean and sample mean: $\frac{Z^{*}S}{\sqrt{n}}$
  - Z*: Z value
  - S: standard deviation
  - n: sample size

# Confidence Interval 
- Final interval of values is called confidence interval
- Confidence interval = ($\bar{X}-\frac{Z^{*}S}{\sqrt{n}}, \bar{X}+\frac{Z^{*}S}{\sqrt{n}}$),

# Takeaways
- When the population size is large, it is not feasible to collect values from each of the data points
- We can use sampling, where we take a subset of data and use it for estimating values for the whole population
- We should take large number of samples as it removes sample bias by accomodating the diversity that is inherent in the population
- Central limit theorem can be used to find population mean by sample means.
- Using Central Limit Theorem, we can assume that sample mean in normally distributed (given that sample size is greater than 30)
- We can therefore apply properties of normal distribution to answer questions such as what is the probability that the population mean will be within certain limits w.r.t to sample mean. This probability is called the confidence level.
- The interval value is called the condifence interval. It is given by the formula: [$\bar X - \frac{Z^{*}S}{\sqrt n}$] to [$\bar X + \frac{Z^{*}S}{\sqrt n}$] where Z* corresponds to the Z table, S is the standard deviation of the sample.
