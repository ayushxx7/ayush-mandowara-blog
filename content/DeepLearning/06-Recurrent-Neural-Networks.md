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

The state of the recurrent network updates itself as it sees new elements in the sequence. This is the core idea of an RNN - it updates what it has learnt as it sees new inputs in the sequence. The 'next state' is influenced by the previous one, and so it can learn the dependence between the subsequent states which is a characteristic of sequence problems. 

# RNN Formulation

The most basic form can be expressed as:

$a_{t+1}^{(l)} = g(a_{t}^{(l)}, z_{t+1}^{(l)})$

- The main different between normal neural nets and RNNs is that RNNs have two 'dimensions' - time $t$ (i.e. along the sequence length) and the depth $l$ (the usual layers). 
- The basic notation itself changes from $a^l$ to $a^l_t$. 
- In fact, in RNNs it is somewhat incomplete to say 'the output at layer $l$'; we rather say 'the output at _layer_ $l$ and _time_ $t$'
- One way to think about RNNs is that the network changes its state with time (as it sees new words in a sentence, new frames in a video etc.). 
- The output of layer $l$ at time $t+1$, $a^l_{t+1}$, depends on two things:
  1. The output of the previous layer at the same time step $a_{t+1}^{l+1}$ (this is the _depth_ dimension).
  2. Its own previous state $a_t^l$ (this is the _time_ dimension)

In other words, $a^l_{t+1}$ is a function of $a_{t+1}^{l-1}$ and $a_t^l$:  
$a_{t+1}^{(l)} = g(a_{t}^{(l)}, z_{t+1}^{(l)})$

We say that there is a recurrent relationship between $a^l_{t+1}$ and its previous state $a^l_t$, and hence the name Recurrent Neural Networks.

The feedforward equations are extensions of the vanilla neural nets - the only difference being that now there is a weight associated with both $a_{t+1}^{l+1}\; \text{and}\; a^l_t$.

$a^l_{t+1} = \sigma(W_F.a^{l-1}_{t+1} + W_R.a^l_t + b^l)$

The $W_F$'s are called the **feedforward weights** and the $W_R$'s are called the **recurrent weights**.

# Architecture of RNN

![RNN Arch](rnn_arch.jfif)

- The green layer is the input layer in which the $x_i$'s are elements in a sequence - words of a sentence, frames of a video, etc.
- The layers in red are the 'recurrent layers' - they represent the various states evolving over time as new inputs are seen by the network.
- The blue layer is the output layer where the $y_i$'s are the outputs emitted by the network at each time step.

For example, in a parts of speech (POS) tagging task (assigning tags such as noun, verb, adjective etc. to each word in a sentence), the $yi$'s will be the POS tags of the corresponding $x_{i}$'s. 

Note that in this figure, the input and output sequences are of equal lengths, but this is not necessary. For e.g. to classify a sentence as 'positive/negative' (sentiment-wise), the output layer will emit just one label (0/1) at the end of T timesteps

You can see that the layers of an RNN are similar to the vanilla neural nets (MLPs) - each layer has some neurons and is interconnected to the previous and the next layers. The only difference is that now each layer has a copy of itself along the time dimension (the various states of a layer, shown in red colour).  Thus, the layers along the time dimension have the same number of neurons (since they represent the various states of same $l_{th}$ layer over time). 

## The flow of information in RNNs is as follows
- each layer gets the input from two directions 
  - activations from the previous layer at the current timestep and 
  - activations from the current layer at the previous timestep. 
- Similarly, the activations (outputs from each layer) go in two directions 
  - towards the next layer at the current timestep (through $W_F$), and 
  - towards the next timestep in the same layer (through $W_R$).
- The 'depth' of an RNN refers to the number of layers in the RNN
- All the timesteps at a particular layer are virtual copies of the same layer. The only difference between different timesteps at a particular layer is their state.


### Example
The inputs going into the second layer at the 8th time step are:
- $a^1_8$: output from previous layer at current timestep
- $a^2_7$: output from current layer at previous timestep

The following outputs (activations) will necessarily have the same size:
- $a^4_3, a^4_5$, $a^2_2, a^2_6$
- This is because same layers are copied over at different timesteps
- The outputs of any layer at different steps will be of exactly the same size since they basically represent the output of the same layer evolving over time.


However, the same cannot be said for 
- $a^4_3, a^3_5$, $a^2_2, a^3_6$
- Since different layers (at each depth) can have different number of neurons

## Unrolled RNN
![unrolled rnn](unrolled_rnn.png)

In the diagram given below, the input $(x_t)$ and hidden state $(h_t)$ are shown at each time step t, which are changing across time steps. 
Both $x_t$ and $h_t$ have their separate weights $W_F$ and $W_R$ respectively, which remain the same for each time step as depicted by just using $W_F$ and $W_R$ at each time step. 

## Rolled RNN
![rolled rnn](rolled_rnn.png)

# Feeding Sequences to RNNs

- In the case of an RNN, each data point is a sequence.
- The individual sequences are assumed to be independently and identically distributed (I.I.D.), though the entities within a sequence may have a dependence on each other.
- As the network keeps ingesting new elements in the sequence it updates its current state (i.e. updates its activations after consuming each element in the sequence). 
- After the sequence is finished (say after T time steps), the output from the last layer of the network $a_T^L$ captures the representation of the entire sequence. 
- You can now do whatever you want with this output - use it to classify the sentence as correct/incorrect, feed it to a regression output, etc. 
- This is exactly analogous to the way CNNs are used to learn a representation of images, and one can use those representations for a variety of tasks.

## IID Data - Independently and Identically Distributed Data

- In a sentence classification task (grammatically correct/incorrect), the individual sentences used for training are IID
- In a video classification task (contains violence/does not contain violence), the individual videos are IID

### Question

**Consider a batch of 50 sequences. Suppose you have trained an RNN model with these sequences. Let’s call this model A. Now, suppose you want to train another model B which has the exact same architecture as model A. Assume that the training is not stochastic in nature (that is, all the seed values are same while initialising the network parameters). Which of the following actions will result in a different set of weights for model B after the training is done in the exact same fashion as done in case of model A?**

| Statement                                                  | True / False |
|------------------------------------------------------------|--------------|
| Shuffling the order of entities within each sequence.      | True         |
| Shuffling the order of the sequences in the training data. | False        |

- Since entities within a sequence are dependent on each other, changing the sequence will result in a different sequence altogether. 
- This will result in the RNN learning a different representation for the sequence and model B would eventually end up having different set of weights than model A.

# Sizes of Components of RNN

![size_table](size_table.png)

# RNNs: Simplified Notations

The RNN Feedforward equations are:
- $z^t_t = W^l_Fa^{l-1}_t + W^l_Ra^{l}_{t-1} + b^l$
- $a^l_t = f^l(z^l_t)$

The above equation can be written in the following matrix form:

- $z_t^l = \begin{bmatrix}W^l_F & W^l_R\end{bmatrix}\begin{bmatrix}a^{l-1}_t \\ a^l_{t-1}\end{bmatrix}+b^l$

We can now merge the two weight matrices into one to get the following notation:

- $z^l_t = W^l\begin{bmatrix}a_t^{l-1}, a_{t-1}^l\end{bmatrix} + b^l$

where $W^l$ denotes the feedforward + recurrent weights of layer $l$ formed by stacking (or concatenating) $W^l_F$ and $W_R^l$ side by side and $\begin{bmatrix}a^{l-1}_t,a^l_{t-1}\end{bmatrix}$ on top of each other.

This form is not only more concise but also more computationally efficient. Rather than doing two matrix multiplications and adding them, the network can do one large matrix multiplication. 
