---
title: NLP - Parsing 
description: nlp, natural language processing, text analytics
date: "2022-01-27"
image: "nlp.png"
author: "Ayush"
tags: ["nlp", "natural-language-processing"]
---

# Preface

A key task in syntactic processing is parsing. It means to break down a given sentence into its 'grammatical constituents'. Parsing is an important step in many applications that helps us better understand the linguistic structure of sentences.

You need to learn techniques that can help you understand the grammatical structures of complex sentences. Constituency parsing and dependency parsing can help you achieve that.

Let’s understand parsing through an example. Suppose you ask a question answering (QA) system, such as Amazon's Alexa or Apple's Siri, the following question. 

"Who won the FIFA World Cup in 2014?"

The QA system can respond meaningfully only if it understands that the phrase ‘FIFA World Cup' is related to the phrase 'in 2014'. The phrase 'in 2014' refers to a specific time frame and thus modifies the question significantly. Finding such dependencies or relations between the phrases of a sentence can be achieved using parsing techniques.

Let's take another example sentence to understand how a parsed sentence looks like. 

"The quick brown fox jumps over the table." 

The figure given below shows the three main constituents of this sentence. 

![sentence_breakup](parsing.png)

This structure divides the sentence into the following three main constituents:
- 'The quick brown fox', which is a noun phrase 
- 'jumps', which is a verb phrase
- 'over the table', which is a prepositional phrase

# Constituency Parsing
Constituency parsing is the process of identifying the constituents in a sentence and the relation between them.

For example, “upGrad is a great platform.”

Here, ‘upGrad’ is the noun phrase, and ‘is a great platform’ is the verb phrase.

The figure shown below represents the parse tree that shows how parsers implement parsing based on grammar.

![constituency_parsing](constiuency_parsing.png)

To summarise the chart given above, a constituent parse tree can be divided into three levels, which are as follows: 

1. Sentence constituent:
    - S (upGrad is a great platform)
    - NP: Noun phrase (upGrad) 
    - VP: Verb phrase (is a great platform) 
2. Sentence words:  ‘upGrad’, ‘is’, ‘a’, ‘great’, ‘platform’
3. Part-of-speech tags: NNP, VBZ, NP, DT, JJ, NN 

A constituency parse tree always contains the words of a sentence as its terminal nodes. Usually, each word has a parent node containing its part-of-speech tag (noun, adjective, verb, etc.).

All the other non-terminal nodes represent the constituents of the sentence and are usually one of verb phrases, noun phrases or prepositional phrases (PP).

In this example, at the first level below the root, the sentence has been split into a noun phrase, made up of the single word “upGrad” and a verb phrase “is a great platform”. This means that grammar contains a rule such as S -> NP VP, meaning that a sentence can be created with the concatenation of a noun phrase and a verb phrase.

Similarly, the noun phrase is divided into a determiner, adjective and noun.

To summarise, constituency parsing creates trees containing a syntactical representation of a sentence according to a context-free grammar rule. This representation is highly hierarchical and divides the sentences into its single phrasal constituents.

Constituency parsing has been used in word processing software, grammar checking software, question answering system, etc.

The example ‘We saw the Statue of Liberty flying over New York.’ Although having the same arrangement of words, the sentence can be interpreted in the following two ways:
- Person saw that the ‘Statue of Liberty’ was flying. 
- A person is flying over New York he/she saw ‘Statue of Liberty’ from the top.

To understand ambiguity with a parse tree, let’s consider the following sentence.

 “Look at the man with one eye.”

This sentence may have the following two meanings: 
- Look at the man using only one of his eyes.
- Look at the man who has one eye.

Their respective parse trees are shown in the figure given below.

![one_eye](one_eye.jpg)

There are two parse trees possible for this sentence; if we are able to identify the relationship among the words instead of looking at individual constituents or PoS tags, then understanding each word with other words will be easier, and the machine will be able to understand the syntax or meaning of the sentence better. This relationship structure can be drawn using the dependency parsing technique.

In general, since natural languages are inherently ambiguous (at least for computers to understand), there are often cases where multiple parse trees are possible, such as those in the example provided above. So, to understand the relationship between different words, you need to use dependency parsing.
