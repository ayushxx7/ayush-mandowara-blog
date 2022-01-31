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

# POS Tagging
Let’s start with the first level of syntactic analysis: PoS (Parts of Speech) tagging. To understand PoS tagging, you first need to understand what parts of speech are. 


Let’s consider a simple example given below.
- ‘You are learning NLP at upGrad.’

From your knowledge of the English language, you are aware that in this sentence, ‘NLP’ and ‘upGrad’ are nouns, the word ‘learning’ is a verb and ‘You’ is a pronoun. 

These are called the parts of speech tags of the respective words in the sentence. 

A word can be tagged as a noun, verb, adjective, adverb, preposition, etc., depending upon its role in the sentence. These tags are called the PoS tags. 

Assigning the correct tag, such as noun, verb and adjective, is one of the most fundamental tasks in syntactic analysis.


Suppose you ask your smart home device the following question. 
- ‘Ok Google, where can I get the permit to work in Australia?’ 

The word 'permit' can potentially have two PoS tags: noun or a verb. 

In the phrase 'I need a work permit', the correct tag of 'permit' is 'noun'. 

On the other hand, in the phrase 'Please permit me to take the exam', the word 'permit' is a 'verb'.

`Parts of speech (PoS)` are the groups or classes of words that have similar grammatical properties and play similar roles in a sentence. They are defined based on how they relate to the neighbouring words.

Assigning the correct PoS tags helps us better understand the intended meaning of a phrase or a sentence and is thus a crucial part of syntactic processing. In fact, all the subsequent parsing techniques (constituency parsing, dependency parsing, etc.) use the part-of-speech tags to parse the sentence. 

A PoS tag can be classified in two ways: open class and closed class. 

## Open Class
Open class refers to tags that are evolving over time and where new words are being added for the PoS tag.
- Noun
- Verb
- Adjective
- Adverb
- Interjection

Some useful examples of open class PoS tags are as follows:

- Name of the person
- Words that can be added or taken from another language such as words taken from the Sanskrit language such as ‘Yoga’ or ‘Karma’ 
- Words that are nouns but can be used as verbs such as ‘Google’
- Words that are formed by a combination of two words such as football, full moon and washing machine

## Closed Class
Closed class refers to tags that are fixed and do not change with time.
- Prepositions
- Pronouns
- Conjunctions
- Articles
- Determiners
- Numerals

Some examples of closed-class PoS tags are as follows:
- Articles: a, an, the 
- Pronouns: you and I 

You can take a look at the universal tagsets used by the spaCy toolkit [here](https://universaldependencies.org/docs/u/pos/).


```py heading="Using spacy to generate POS Tags"
# https://stackoverflow.com/questions/54334304/spacy-cant-find-model-en-core-web-sm-on-windows-10-and-python-3-5-3-anacon
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp("upGrad is teaching Data Science courses to the working professionals.")
print("Text : POS : TAG\n---")
for token in doc:
    print(token.text, ":", token.pos_, ":", token.tag_)
```

## POS Tagging Model

A PoS tagger is a model/algorithm that automatically assigns a PoS tag to each word of a sentence.

![tagger](tagger.png)

In this example, the input is 'upGrad is teaching NLP.'. When you put this sentence into a model or tagger, it will result in the output with respective PoS tags assigned to each word of the sentence such as ‘upGrad’ (noun), ‘is’ (verb), ‘teaching’ (verb) and ‘NLP’ (noun).

Let’s take a look at another example given below.

- Tagger input: ‘She sells seashells on the seashore.’
- Tagger output: ‘She(PRON) sells (VERB) seashells(NOUN) on(SCONJ) the(DET) seashore(NOUN).’

Now, let’s try to understand how one can build a simple rule-based PoS tagger to assign PoS tags to individual words in a sentence. 

Suppose you have been given a training dataset that comprises words and their respective PoS tags’ count. This is visually demonstrated in tabular format below. 

![naive_model](naive_model.png)

In this table, the word ‘Word_1’ occurs as a noun two times, and as an adjective, it occurs six times and so on in the training dataset.

The identification of PoS tags in the training dataset is done manually to predict the PoS tags of the test data.

In the table provided above, ‘Word_1’ appears as a noun two times, and as an adjective, it appears three times and so on. 

Now, suppose, you are given the following sentence (S).

S: “Word_4  Word_1  Word_3.”

The PoS tags of the words of the sentence S will be as follows:
- Word_4: Noun
- Word_1: Adjective
- Word_3: Pronoun

You assign the most frequent PoS tags that appear in the training data to the test dataset, and you realise that rule based tagger gives good results most of the time.

But, sometimes, it does not give satisfactory results because it does not incorporate the context of the word.
 
Let’s take the following example.

Consider the word ‘race’ in both the sentences given below:

‘The tortoise won the race.’
‘Due to the injury, the horse will not be able to race today.’

In the first sentence, the word ‘race’ is used as a noun, but, in the second sentence, it is used as a verb. However, using the simple frequency-based PoS tagger, you cannot distinguish its PoS tags in different situations.

### Example
In the sentence given below, A and B are the PoS tags for the word 'wound'. Which of the following options is correct? 

The bandage was wound/A around the wound/B.

| Option           | Yes/No |
|------------------|--------|
| A: Verb, B: Verb | No     |
| A: Noun, B: Verb | No     |
| A: Noun, B: Noun | No     |
| A: Verb, B: Noun | Yes    |

The first mention of 'wound' represents the injury/cut, and the second represents the act of 'winding' the bandage.




# References
- [pos tags](https://universaldependencies.org/docs/u/pos/)
- [spacy](https://spacy.io/)
- [penn treebank pos tags](https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html)
