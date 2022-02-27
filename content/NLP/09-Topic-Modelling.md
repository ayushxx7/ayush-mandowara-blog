---
title: NLP - Topic Modelling
description: nlp, natural language processing, text analytics
date: "2022-02-13"
image: "alexa.png"
author: "Ayush"
tags: ["nlp", "natural-language-processing", "ner"]
---

<!-- vim-markdown-toc GFM -->

* [Preface](#preface)
* [Topic Modelling](#topic-modelling)
    * [Applications](#applications)
    * [How it works](#how-it-works)
        * [Question](#question)
    * [Algorithms](#algorithms)
        * [Non-Negative Matrix Factorisation](#non-negative-matrix-factorisation)
        * [Question](#question-1)
    * [Process](#process)

<!-- vim-markdown-toc -->

# Preface
Suppose you are a product manager at Amazon and want to understand the features of a recently released product (say, Amazon Alexa) that customers are discussing in their reviews. Say you are able to identify that 50% of the customers are talking about the hardware, 30% are talking about features related to music, and 20% are discussing the packaging of the product. This information would be pretty useful for you.

Similarly, imagine that you have a large corpus of scientific documents (such as research papers), and you want to build a search engine for this corpus. Suppose you can infer that a particular paper talks about ‘topics’ such as diabetes, cardiac arrest and obesity. With this information, conducting a topic-specific search will become easier.

# Topic Modelling
Suppose various pieces of text are being sent from different sources. These are unstructured and unlabeled. Topic modelling can help determine the major themes or labels of this text.

## Applications
An ideal example of this is customer review data. For example, reviews for a restaurant can vary according to food items, length, sentiment, etc. The job of a topic modelling algorithm is to skim through each review and figure out the major themes and keywords. These can be later displayed under a ‘Review Highlight’ section as shown in the image given below.

![zomato](zomato.png)

If a customer visits the site, it becomes easier for them to find relevant reviews. Suppose you are on a budget and want to know if a certain dish is affordable. ‘Worth the Money’ would be the ideal label in this case or you are interested in ordering the ‘Fiery Paneer Tikka Wrap’; however, you are not sure if it will be any good. You can easily figure this out by clicking on the corresponding food label.

## How it works
How does topic modelling work? Before understanding various algorithms, you will learn how a human would infer a topic from a given sentence.

Suppose you are given this sentence: 

Croatia fought hard before succumbing to France’s deadly attack, lost the finals 2 goals to 4.

On reading the first part of the sentence ‘Croatia fought hard before succumbing to France’s deadly attack’, one would infer that the context of the sentence is war. This inference is primarily due to the usage of ‘fought hard’ and ‘deadly attack’. However, on reading the next part ‘lost the finals 2 goals to 4’, the context changes

to sports, specifically soccer. This is due to the usage of the words ‘finals’ and ‘goals’. 

Although the topic of a sentence that is related to soccer or some sport is not explicitly mentioned in the sentence, we were able to understand that this was the latent topic.

The goal of this exercise was to impart the same thinking in a machine learning algorithm. This domain of computer science is known as ‘information retrieval’ and involves the identification of dominating themes from a sample of text.

### Question

Can one document have more than one topic?
- Yes. A document can have multiple (or no) topics in it.


## Algorithms
- Non-Negative matrix factorisation
- Latent Dirichlet allocation
- Latent semantic analysis

### Non-Negative Matrix Factorisation

![nmf](NMF.png)

NMF approximates a matrix X as a product of two matrices W, H such that X ~ WH where W >=0 and H>=0.

This is done by minimising the square difference between X and W * H (also know as Frobenius Norm). This is an optimisation problem, as the equation tries to get as close to the minimum value as possible.

$\text{min}||X-WH||^2$ such that $W\ge 0$ and $H\ge 0$

To calculate the Frobenius norm, we calculate the sum of the square of all the values of the X-WH matrix.

The formula for calculating the Frobenius norm for matrix A is as follows where m and n represent number of rows and columns respectively.

$||A||_F^2 = \sum_{i=1}^{m}\sum_{j=1}^{n}|a_{ij}|^2$

The dimensions of W, H depend on the number of topics. The original matrix X is of the size (number of documents X number of terms). This is broken down into W of the size (number of documents X number of topics) and H of the size (number of topics X number of terms).

![non-negative matrix factorisation](nnmf.png)

You need to keep in mind that NMF or any other topic modelling algorithm does not give you the topics explicitly. Topics are neither coherent or self-contained nor meaningful ideas or concepts. A topic is a bag of words. It is the responsibility of data scientists to assign topics using domain knowledge and logic. 

### Question

**What input do you give to a Topic Model?**

- TF-IDF Matrix

**Let’s consider the input matrix of NMF algorithm,X that has a size of (100,289). X is decomposed into W and H using the NMF algorithm. Number of topics = 10. What will be the size of the H matrix (topic term matrix)?**

- H is of the size (number of topics X number of terms) = (10,289)

**What is the output of Topic Model?**

- 2 matrices. 
- Document Topic Matrix: Which topic is more relevant for a document
- Topic Term Matrix: Which word is more relevant for a topic

## Process
1. Understand the dataset
2. Extract features using TF-IDF Vectorizer
3. Perform Non-Negative Matrix Factorisation
4. Analyze the topics that come up. Understand that these are just a bag of words and not all topics would make sense.
5. Choose relevant topics by looking the decomposition
6. Check if the topics are correct or not by going through some of the documents
