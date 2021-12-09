---
title: Convolutional Neural Networks (CNNs) - Industry Applications
description: CNN, NN, Neural, Neurons, AI, ML, DL, Deep Learning
date: "2021-12-08"
image: "rnn.png"
author: "Ayush"
tags: ["deep-learning", "neural-networks", "machine-learning", "rnn"]
---

# Recurrent Neural Networks
- RNNs are specially designed to work with sequential data, i.e. data where there is a natural notion of a 'sequence' such as text (sequences of words, sentences etc.), videos (sequences of images), speech etc. 
- RNNs have been able to produce state-of-the-art results in fields such as natural language processing, computer vision, and time series analysis.
- One particular domain RNNs have revolutionised is natural language processing. 
- RNNs have given, and continue to give, state-of-the-art results in areas such as machine translation, sentiment analysis, question answering systems, speech recognition, text summarization, text generation, conversational agents, handwriting analysis and numerous other areas. 
- In computer vision, RNNs are being used in tandem with CNNs in applications such as image and video processing.
- Many RNN-based applications have already penetrated consumer products. Take, for example, the auto-reply feature which you see in many chat applications, as shown below:


**LinkedIn Auto Reply**
> ![linkedin-auto-reply](linkedin-auto-reply.png)

**GMail Auto Reply**
> ![gmail-auto-reply](gmail.png)

You may have noticed **auto-generated subtitles on YouTube** (and that it has surprisingly good accuracy). This is an example of automatic speech recognition (ASR) which is built using RNNs.
> ![automatically-generated-captions](upgrad.png)

- RNNs are also being used in applications other than NLP. 
- Recently, OpenAI, a non-profit artificial intelligence research company came really close to defeating the world champions of Dota 2, a popular and complex battle arena game. 
- The game was played between a team of five bots (from OpenAI) and a team of five players (world champions). 
- The bots were trained using reinforcement learning and recurrent neural networks.
- There are various companies who are generating music using RNNs. AIVA is one such company.
- There are many other problems which are yet to be solved, and RNNs look like a promising candidate to solve them.

# What are Sequences

Just like CNNs were specially designed to process images, Recurrent Neural Networks (RNNs) are specially designed to process sequential data. 

In sequential data, entities occur in a particular order. If you break the order, you don’t have a meaningful sequence anymore. For example,
- you could have a sequence of words which makes up a document. If you jumble the words, you will end up having a nonsensical document. 
- Similarly, you could have a sequence of images which makes up a video. If you shuffle the frames, you’ll end up having a different video. 
- Likewise, you could have a piece of music which comprises of a sequence of notes. If you change the notes, you’ll mess up the melody.

Recurrent neural networks are variants of the vanilla neural networks which are tailored to learn sequential patterns.

Normal Neural Networks can approximate any given function, while Recurrent Neural Networks can simulate any given algorithm

# RNN Formulation

The most basic form can be expressed as:

$a_{t+1}^{(l)} = g(a_{t}^{(l)}, z_{t+1}^{(l)})$

- The main different between normal neural nets and RNNs is that RNNs have two 'dimensions' - time $t$ (i.e. along the sequence length) and the depth $l$ (the usual layers). 
- The basic notation itself changes from $a^l$ to $a^l_t$. 
- In fact, in RNNs it is somewhat incomplete to say 'the output at layer $l$'; we rather say 'the output at _layer_ $l$ and _time_ $t$'
- One way to think about RNNs is that the network changes its state with time (as it sees new words in a sentence, new frames in a video etc.). 
- The the output of layer $l$ at time $t+1$, $a^l_{t+1}$, depends on two things:
  1. Theoutput of the previous layer at the same time step $a_{t+1}^{l+1}$ (this is the _depth_ dimension).
  2. Its own previous state $a_t^l$ (this is the _time_ dimension)

In other words, $a^l_{t+1}$ is a function of $a_{t+1}^{l-1}$ and $a_t^l$:  
$a_{t+1}^{(l)} = g(a_{t}^{(l)}, z_{t+1}^{(l)})$

We say that there is a recurrent relationship between $a^l_{t+1}$ and its previous state $a^l_t$, and hence the name Recurrent Neural Networks.
