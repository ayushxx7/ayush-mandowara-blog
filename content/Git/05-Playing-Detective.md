---
title: Git-Fu - How to be a Git Detective
description: Playing detective.
date: "2020-09-17"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

<br />

###PURPOSE
There are times when you need to figure out exactly who made the changes in a file. Sometimes, the standard `git log` command will suffice, but there are times when you need to dig deeper and find out why a change was made.

# [Playing Detective](https://vimeo.com/280579162)
```
# To check who changed what line in a file and when, use:
git blame <filename>
# This will show you who made the last change in a file, when and with what commit.

# To search for a string, like a function name, in your entire git commit history:
git log -S "search_string"
# This will show a complete history of when this line was introduced, along with
# every time it was changed, who changed it and with what commit hash.

# Once you have a commit hash, you can use:
git diff <commit_hash>
# to learn what all changes were part of the commit history.
```
