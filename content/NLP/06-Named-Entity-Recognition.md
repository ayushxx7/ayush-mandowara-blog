---
title: NLP - Named Entity Recognition
description: nlp, natural language processing, text analytics
date: "2022-01-29"
image: "ner.png"
author: "Ayush"
tags: ["nlp", "natural-language-processing", "ner"]
---

# Preface
As you already know, with the help of PoS tagging and parsing techniques, you can determine the relationship between the words in a sentence. Now, the next step of understanding the text is Named Entity Recognition (NER).

Consider the following two representations of the given sentence:

‘John bought 300 shares of Apple in 2006’

Representation 1:  John[NOUN] bought 300 shares  of Apple[NOUN] in 2006[NUMBER]

Representation 2:  John[PERSON] bought 300 shares of Apple[ORGANISATION] in 2006[DATE]

As you can see, Representation 1 has tagged the words ‘John’ and ‘Apple’ as nouns and ‘2006’ as a number. 

On the other hand, Representation 2 indicates the entity of the words like ‘John’ is tagged as ‘PERSON’ and ‘Apple’ as ‘ORGANISATION’, which provides information about the entities present in the sentence. This output can be achieved by using NER techniques. Essentially, with the help of NER, you will be able to find what the word is referring to like ‘John’ is a person and ‘Apple’ is an organisation.

# Named Entity Recognition
Named Entity Recognition (NER) enables you to easily identify the key elements in a piece of text, such as a person’s name, locations, brands, monetary values, dates and so on. NER techniques are applied in various fields such as search engine, chatbot and mainly in entity extraction in the long texts such as reviews, books, blogs and comments.

Some example sentences with their named-entity recognition are as follows:

Note that GPE is short for the geopolitical entity, ORG is short for organisation and PER is short for a person.

- S: ‘Why is Australia burning?’
    - NER:   ‘Why is Australia[GPE] burning?’

- S: ‘UK exits EU’
    - NER:  ‘UK[GPE] exits EU[ORG]’
 
- S: ‘Joe Biden intends to create easier immigration systems to dismantle Trump's legacy’
    - NER: ‘Joe Biden[PER] intends to create easier immigration systems to dismantle Trump's[PER] legacy’
 
- S: ‘First quarter GDP contracts by 23.9%’
    - NER: ‘First quarter[DATE] GDP contracts by 23.9%[PERCENT]’

Some commonly used entity types are as follows:
- PER: Name of a person (John, James, Sachin Tendulkar)
- GPE: Geopolitical entity (Europe, India, China)
- ORG: Organisation (WHO, upGrad, Google)
- LOC: Location (River, forest, country name)

Most named entities are Nouns.

## Noun POS Tags
Noun PoS tags: Most entities are noun PoS tags. However, extracting noun PoS tags is not enough because in some cases, this technique provides ambiguous results. 

Let’s consider the following two sentences:
- ‘Java is an Island in Indonesia.’
- ‘Java is a programming language.’

PoS tagging only identifies ‘Java’ as a noun in both these sentences and fails to indicate that in the first case, ‘Java’ signifies a location and in the second case, it signifies a programming language.

A similar example can be ‘Apple’. PoS tagging fails to identify that ‘Apple’ could either be an organisation or a fruit.

Let’s take a look at a simple rule-based NER tagger.

## Simple rule-based NER tagger
Simple rule-based NER tagger: This is another approach to building an NER system. It involves defining simple rules such as identification of faculty entities by searching ‘PhD’ in the prefix of a person's name.

However, such rules are not complete by themselves because they only work on selected use cases. There will always be some ambiguity in such rules. 

Therefore, to overcome these two issues, Machine Learning techniques can be used in detecting named entities in text.

The following techniques can be used to extract named entities:
- Extracting nouns from the text as a named entity
    - Most of the time, noun PoS tags help in finding named entities.
- Using machine learning to find a named entity
    - ML algorithm can be used to train a model from a labelled data set and to predict the named entities present in the given text.
- Creating rules for all the possible cases to find a named entity
    - A rule-based approach can find a named entity, but sometimes it can be difficult to create complete rules.
