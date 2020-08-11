---
title: Common but hard to remember Git Commands.
description:
date: "2020-08-12"
image: git.png
author: "Ayush"
tags: ["git"]
---

<br />

<h3>PURPOSE</h3>
There are times when you have to do something related to your version history, but you forget which command to use. This is Handy Guide for times like those. 


# (Revert to a Commit)[https://stackoverflow.com/a/21718540/7048915]

```
# To see what commit you want to revert to, first check all the commits.
git log 
# once you have a commit hash, let's say 0123456
git revert --no-commit 0123456..HEAD
git commit -m "some relevant message to why you reverted to this one. since you are essentially rewriting history"
```

