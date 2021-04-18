---
title: Git-Fu - How to be a Git Detective
description: Playing detective.
date: "2021-04-18"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

### PURPOSE

There are times when you need to figure out exactly who made the changes in a file. Sometimes, the standard `git log` command will suffice, but there are times when you need to dig deeper and find out why a change was made.

#### [Playing Detective](https://vimeo.com/280579162)

```
git blame <file_name> # line by line commit history of the current state of a file
git log -p <file_name> # shows history per commit for a file

git log --grep "search_string" # searches for the commit messages containing string
git log -S "search_string" # searches for actual code within any commit, like function_name()
git log --oneline # short commit history
git log --author="partial name of author" # commits by a particular user

# Once you have a commit hash, you can use:
git diff <commit_hash>
git show <commit_hash>
# to learn what all changes were part of the commit history.
```
