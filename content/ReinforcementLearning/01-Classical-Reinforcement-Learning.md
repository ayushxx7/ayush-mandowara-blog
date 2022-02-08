---
title: Classical Reinforcement Learning
description: 
date: "2022-06-03"
image: "reinforcement_learning.jpg"
author: "Ayush"
tags: ["machine-learning", "reinforcement-learning"]
---

# Preface
Reinforcement Learning (RL) is the field of machine learning in which an 'agent' (i.e. the software being trained) learns to take actions to maximise some cumulative 'reward'.

Some classical examples of RL are driverless cars, game playing agents (Chess, Go, etc.), mechanical robots in factories/warehouses etc. The field of Reinforcement Learning has seen some major breakthroughs in recent years: 
- [DeepMind and the Deep Q learning architecture in 2014](https://deepmind.com/research/dqn/)
- [Beating the champion of the game of Go with AlphaGo](https://deepmind.com/research/alphago/) in 2016 (you can watch the short video related to it [here](https://www.youtube.com/watch?v=8dMFJpEGNLQ)), 
- [OpenAI and the PPO](https://blog.openai.com/openai-baselines-ppo/) in 2017
- [How Deep Blue beat a chess grandmaster](https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov)

These achievements have in turn inspired other researchers and companies to turn to reinforcement learning. The most noticeable is the field of driverless cars. Several automobile companies are hard at work for building cutting-edge-technologies for self-driving cars. Tesla's Autopilot is one such system. Its 'driver assistance system' offers features such as lane-centring, adaptive cruise control, self-parking, etc.  Alphabet's Waymo, Ford's self-driving car are locked in the competition to reach the final level of autonomous driving.

There have been interesting developments in the field of robotics as well, where robots are trained for different tasks such as finding defects in objects, carrying an object from one place to other. Fanuc has deployed a robot that uses RL to pick a device from one box and put it in a container.

Another domain where RL is used is finance. RL is turning out to be a robust tool for evaluating trading strategies. Many companies are leveraging the 'Q-Learning' algorithm of RL with the simple objective of maximising the 'rewards' i.e. profits. You will study Q-learning and some of these applications in this course. 

## The Evolution of RL

The roots of Reinforcement Learning, acronymed as RL, go back to a psychologist, Edward L. Thorndike who talked about learning by trial and error.  He studied cats in puzzle boxes. The cat was motivated to come out of the box. The cat would fall around and eventually stumble upon the latch that would open the box. Once the cat managed to get out, the same cat would be put in the same box again. After successive runs, he observed that cats were getting faster in finding and pulling the latch. And on the basis of this behavioural experiment, Thorndike put forward the 'Law of Effect':

"Responses that produce a satisfying effect in a particular situation become more likely to occur again in that situation, and responses that produce a discomforting effect become less likely to occur again in that situation."
