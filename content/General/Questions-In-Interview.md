---
title: Interview Questions
description: questions asked in interview for a software engineering role
date: "2021-06-20"
image: "thoughts.jpg"
author: "Ayush"
tags: ["general"]
---


<!-- vim-markdown-toc Marked -->

* [Purpose of this article](#purpose-of-this-article)
* [General Questions](#general-questions)
   * [Last/Current company's work experience](#last/current-company's-work-experience)
   * [Tell me something about yourself](#tell-me-something-about-yourself)
   * [Share your screen, display some code you have written. Explain it.](#share-your-screen,-display-some-code-you-have-written.-explain-it.)
   * [Is there any project for which you have managed end to end delivery?](#is-there-any-project-for-which-you-have-managed-end-to-end-delivery?)
   * [Have you used any data structures in your current job?](#have-you-used-any-data-structures-in-your-current-job?)
   * [Have you ever designed a database?](#have-you-ever-designed-a-database?)
   * [Any DevOps experience](#any-devops-experience)
* [Theory Questions](#theory-questions)
   * [On entering a URL in a browser, explain the detailed procedure in which the request is handled by the browser and the result is obtained for the given search query.](#on-entering-a-url-in-a-browser,-explain-the-detailed-procedure-in-which-the-request-is-handled-by-the-browser-and-the-result-is-obtained-for-the-given-search-query.)
   * [If RAM size is 4GB, and if 4 processes of size 2GB are launched! What happens?](#if-ram-size-is-4gb,-and-if-4-processes-of-size-2gb-are-launched!-what-happens?)
   * [What are normalization and denormalization and why do we need it?](#what-are-normalization-and-denormalization-and-why-do-we-need-it?)
   * [What is Multithreading? What is the difference between a thread and a process?](#what-is-multithreading?-what-is-the-difference-between-a-thread-and-a-process?)
   * [How will you create persistent connections between the server and the client?](#how-will-you-create-persistent-connections-between-the-server-and-the-client?)
   * [What is the use of virtual environments](#what-is-the-use-of-virtual-environments)
   * [What is the use of lambda functions?](#what-is-the-use-of-lambda-functions?)
* [Coding / Design](#coding-/-design)
   * [Design Chess](#design-chess)
   * [Reverse a Linked List](#reverse-a-linked-list)
   * [Maximum contiguous sum in array (number of elements is given)](#maximum-contiguous-sum-in-array-(number-of-elements-is-given))
   * [Leetcode](#leetcode)
* [Topics for Data Structures and Algorithms Round (DSA)](#topics-for-data-structures-and-algorithms-round-(dsa))

<!-- vim-markdown-toc -->


# Purpose of this article
Collecting my Interview experiences

# General Questions

## Last/Current company's work experience 
## Tell me something about yourself
- Just recite things from your resume. 
- Interviewer is mostly interested in the most recent experience.


## Share your screen, display some code you have written. Explain it.
- Make sure you go through the code you are going to explain at least once before the interview. 
   - This way, you will know the parts that should be highlighted. 
   - Moreover, most of us don't remember the code by heart anyway, so to get an understanding of the flow one must read it.

---

## Is there any project for which you have managed end to end delivery?
- Mention the project details in such a way that it conveys that you understand the business logic behind the decisions and the code
- It will also be good if you can highlight the type of people (mangers, directors, experts) that you interact with on a day to day basis
- Portray that you take initivate and able to cope up with the demands of the business
 <!-- -1-> support automation cluster of projects is handled by me. It has many small systems running, which I need to manage. --> 
 <!-- I also take care of adding features in a way that won't break the system. --> 

---

## Have you used any data structures in your current job?
- Lists and Dictionaries generally don't make much of an impact in such a question
- Queues, Stacks, Trees, Graphs is what the interviewer is looking for here
- If you have implemented some kind of algorithm be it as a simple as Round Robin, you can mention it. Since applying such high level concepts which encapuslating business requirements shows that you can think out of the box to efficiently solve problems.
<!-- -> Queue for Suite Triggers -->
<!-- -> Queue for Chat Assigner -- implemented using list -->
<!-- -> Round Robin for Chat Assigner -->
<!-- -> Round Robin for Ticket Assigner -->

---

## Have you ever designed a database?
- Shows the clarity you have about storing large quantities of data

---

## Any DevOps experience
- Interviewer wants to know if you have deployed projects on AWS, GCP, Azure cloud etc.
- If you have created buckets, data pipelines, streaming service for ingesting realtime data, highlight it.

---



# Theory Questions

## On entering a URL in a browser, explain the detailed procedure in which the request is handled by the browser and the result is obtained for the given search query.

When we enter a URL,   
1. The domain name is resolved to an IP Address.
   - browser does DNS Lookup in it's own DNS cache,
   - if there is no IP associated in cache, then it does a DNS lookup in the ISP's cache
   - If the domain name does not exist in the ISP's cache as well, it resolves the DNS from the hosted DNS servers itself.
1. The HTTP request is then made to the server (the one hosting this IP). 
1. The server sends back an HTTP response. In case of a successful response, 
   - The browser starts rendering the response, 
   - and keeps requests additional resources such as images, videos until all the required data is fetched.
1. Rendering
   - First all the HTML is received and rendered, 
   - then styles are applied using CSS and finally,
   - Javascript libraries are loaded for any additional functionality that need to be performed.
   - In some cases, 
      - more asynchronous requests can be made to the server, 
      - so that user can start using the app/website while more data is loaded in the background as well as on demand. 
      - Social media websites such as Instagram use this logic to request data in chunks.

--- 

## If RAM size is 4GB, and if 4 processes of size 2GB are launched! What happens?

This is solved with the help of Virtual Memory and Pagination techniques that are implemented by the Operating System. Based on what current operations are being performed, parts of the programs will be loaded in the main memory (RAM), while the rest will remain in the Virtual Memory (Hard Disk).   
Suppose that a process requests for some information that is not currently available in the main memory, a page fault will occur, causing the process to halt until the OS resolves the problem by bringing in the required pages in the memory.

Example:  
> 1. Ram size is 4GB.  
> 1. We can assume that 1.5GB RAM is used up by the Operating System itself.  
> 1. Suppose we open up chrome with a couple of tabs, with videos and other dynamic form of content, so that this instance of chrome requires 2GB of RAM. Here, for simplicity's sake, we can assume that the OS allocated all the required memory, and we are still left with 500MB of Ram.
> 1. Now, let's assume that we have a similar instance of chrome that needs to run in parallel. Here, it is no longer possible for both of these stay in the memory.  
> 
> What happens now is, whatever tabs are currently active, will be prioritized by the Operating System, and they will be pushed to memory, while inactive tabs are moved to the virtual memory. Suppose you switch to one of the active tabs, there will be no lag, while if you switch to a tab that has not been touched since (say) the last 2 hours, it will take some time as the OS now has to bring in those pages to ram because a page fault occurs at this stage.
> 
> If you trying opening a game now, which requires 4GB of RAM, everything starts lagging, but the game will automatically be prioritized in a while, and chrome will become somewhat unresponsive.   
> Note that the game itself will also know which point of the story you are in, or what the current environment looks like and only request the OS to push in pages that will be required in the very next moments of activity, such as if there's a combat about to happen, it will request IO operations to take a priority, bring in opponent characters to memory and delete items such as trees, grass etc. from the memory.
> 
To put it simply, when 8GB worth of processes are running, some of them shift to virtual memory, and are loaded to RAM using the process of demand paging.

---

## What are normalization and denormalization and why do we need it?

| Normalization                                                                                                                  | Denormalization                                                                                                 |
|--------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| process of removing redundancy from data and simplifying the structure of the database so that each table represent one entity | process of combining all the data together into a single table. does not care about redundancy & data integrity |
| helps in keeping structure, and is easier to understand and form relations                                                     | removes the dependency on joins                                                                                 |
| if we want to access information which requires multiple tables & hence multiple joins, the query can take a long time         | All required data is present in one table, and it will be much easier and faster to query such a database.      |
| Student and Teacher entities will be in a separate table, interlinked by foreign keys | Students and the Teachers teaching them will be part of the same table.                                    |

---

## What is Multithreading? What is the difference between a thread and a process?

Multithreading is the process of running multiple threads in a single process.

| Thread | Process |
|--------|---------|
| Thread is a "subset" of a process i.e. one process consists of multiple threads.                                                      | Process is superset of threads, one process can have multiple threads. |
| Each thread has it's own set of operations to perform, but shares the memory with other threads that are running in the same process. | Processes are independent from one another, i.e. one process's memory is not shared with another's. |
| Communication between threads is faster                                                                                               | Inter Process commincation (IPC) is slower|

---

## How will you create persistent connections between the server and the client?

To create a persistence connection we can send a header in the request.
"""
Content: Keep-Alive
Keep-Alive: max=20, timeout=1000
"""
The Keep-Alive header is more of a request than a command, and it is up the servers to follow it. In the above example, we have asked the server to keep the connection alive for at most 20 more requests, and only kill it if the time limit exceeds 1000 seconds. However, the server may not adhere to these parameters.

In Python, using the requests module, we can simply create a session object, and it will keep the connection alive (i.e. send the header by default)

```
import requests
session_obj = requests.Session()
resp = session_obj.get("https://ayush-blog.netlify.app")
print(resp)
```

---

## What is the use of virtual environments
- there can be a scenario where you need specific version of python package
- helps in creating an isolated environment
- https://realpython.com/python-virtual-environments-a-primer

---

## What is the use of lambda functions?
- Share examples from your work when you have applied them
- Mention that lambda functions are very useful when performing data analysis
- They are not stored in memory liked named functions
- Useful for generating meta functions

---

# Coding / Design

## Design Chess
- Mention the kind of Classes you will create
- What attributes each object will contatin
- How will you store piece locations
- Will you set some values in __init__ method

---

## Reverse a Linked List

---

## Maximum contiguous sum in array (number of elements is given)

---

## Leetcode
- https://leetcode.com/problems/reverse-linked-list/
- https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/
- https://leetcode.com/problems/interleaving-string/

---

# Topics for Data Structures and Algorithms Round (DSA)
These topics have been shared by my friend Sajal, who is very good with Data Structures and recently got placed in Airtel.
- binary search in array
- 2 pointer questions in array
- Hashmap questions
- Linked list 
   - traverse 
   - reverse
   - middle node 
   - loop detection (cycle)
- Palindrome 
- Sorting Techniques
   - Insertion 
   - selection 
   - bubble sort
   - Quick sort 
   - merge sort 
- Learn complexity of different types of sorting
- Stacks 
   - balancing brackets
- Recursion
- Tree
- Heap
