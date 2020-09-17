---
title: Git Revert (Quick Reference) 
description:
date: "2020-09-17"
image: git.png
author: "Ayush"
tags: ["git"]
---

<br />

###PURPOSE
Reverting to a previous state of your codebase can be challenging and at times scary, but mistakes do happen and in times like those, Git's version history is our best bet at recovery.

# [Revert last commit](https://stackoverflow.com/a/2846154/7048915)
```
# to uncommit but keep the changes intact
git reset --soft HEAD^
# to uncommit and remove the changes from the file as well
git reset --hard HEAD^
```

# [Revert to a Commit](https://stackoverflow.com/a/21718540/7048915)

```
# To see what commit you want to revert to, first check all the commits.
git log 
# once you have a commit hash, let's say 0123456

git revert --no-commit 0123456..HEAD
git commit -m "some relevant message to why you reverted to this one. since you are essentially rewriting history"
```

# [Reverting commits](http://gitready.com/intermediate/2009/03/16/rolling-back-changes-with-revert.html)
```
# To revert the most recent change
git revert HEAD
# To revert the change made before the most recent change
git revert HEAD~
# To revert changes made in a specific commit, say, 12345678
git revert 12345678

If you are reverting to a merge commit, add the -m flag, with the number specifying to which commit you want to go to
```
