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


# [Revert to a Commit](https://stackoverflow.com/a/21718540/7048915)

```
# To see what commit you want to revert to, first check all the commits.
git log 
# once you have a commit hash, let's say 0123456

git revert --no-commit 0123456..HEAD
git commit -m "some relevant message to why you reverted to this one. since you are essentially rewriting history"
```

# [Merging when Git says that the histories are unrelated](https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error)
```
# Sometimes you might want to merge two repos from different sources, or you might have a situation where both your local and cloud have some commits for the same project in the initial stages.
# In such cases, Git throws an error about unrelated histories.

git pull origin master --allow-unrelated-histories
```

# To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).
