---
title: NLP - Syntactic Processing
description: nlp, natural language processing, text analytics
date: "2022-01-26"
image: "nlp.png"
author: "Ayush"
tags: ["nlp", "natural-language-processing"]
---

# Preface

We will learn about the algorithms and techniques that are used to analyse the syntax or the grammatical structure of sentences.

- PoS tags and PoS tagging techniques, in which you will learn algorithms such as Hidden Markov Models (HMMs) to build PoS taggers, 
- Parsing techniques and the types of parsing such as constituency parsing and dependency parsing, and
- Code demonstrations of PoS tagging and parsing techniques using the SpaCy library in Python.
- Name Entity Recognition (NER) and custom NER using Conditional Random Fields (CRF) and its python demonstration.

Let’s take a look at the sentences given below.
- ‘Is EdTech upGrad company an.’
- ‘EdTech is an company upGrad.’
- ‘upGrad is an EdTech company.’

All of these sentences have the same set of words, but only the third one is syntactically or grammatically correct and comprehensible. 

One of the most important things that you need to understand here is that in lexical processing, all of the three sentences provided above are similar to analyse because all of them contain exactly the same tokens, and when you perform lexical processing steps such as stop words removal, stemming, lemmatization and TF-IDF or CountVectorizer creation, you get the same result for all of the three sentences. The basic lexical processing techniques would not be able to identify the difference between the three sentences. Therefore, more sophisticated syntactic processing techniques are required to understand the relationship between individual words in a sentence.

# Syntactic Processing
- Arrangement of words in a sentence plays a crucial role in better understanding the meaning of the sentence. These arrangements are governed by a set of rules that we refer to as ‘syntax’, and the process by which a machine understands the syntax is referred to as syntactic processing.
- `Syntax`: A set of rules that govern the arrangement of words and phrases to form a meaningful and well-formed sentence
- `Syntactic processing`: A subset of NLP that deals with the syntax of the language.

## Applications
- Conversational systems such as Alexa, Siri etc.
- Chatbots on websites and apps (HDFC Bank, Swiggy)
- Grammar checking apps such as Grammarly

## Lexical Processing vs Syntactic Processing

| Lexical Processing                                                                                                             | Syntactic Processing                                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Lexical analysis is the data pre-processing and feature extraction step. It involves analysis at word level.                   | Syntactical analysis aims at finding structural relationships among the words of a sentence.                                                                                    |
| Performing text cleaning steps such as stop words removal and tokenisation of documents and then performing feature extraction | Creating parse trees for checking structural dependencies in a sentence                                                                                                         |
| does not look at word order and meaning                                                                                        | Syntactic analysis aims to find how words are dependent on each other. Changing the word order will make it difficult to comprehend a sentence.                                 |
| does not incorporating stop words to analyse the grammatical structure of sentences                                            | Removing stop words can altogether change the meaning of a sentence; hence, syntactic processing analyses the grammatical structure of a sentence by incorporating stop words.  |
| does not identifying the parts-of-speech words in a sentence                                                                   | Identifying the correct part of speech of a word is important. `Example: 'cuts and bruises on his face' (Here, 'cuts' is a noun.) 'he cuts an apple' (Here, 'cuts' is a verb.)` |
| Stemming, Stop words removal is done here                                                                                      | PoS tagging, Dependency parsing is done here                                                                                                                                    |
