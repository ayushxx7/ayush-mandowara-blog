---
title: The power of Git Rebase
description:
date: "2020-11-12"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

## Introduction
Git, is the Version control system used by almost all the open-source (and many closed source) projects today. However, not everyone who uses Git, understands it's true potential. In fact, many people miss out on some of the core features due to which Git is such a popular choice among giant tech companies and nerdy-hackers alike.

To wit, one such feature would be the `interactive rebase` that Git provides.

[Rebasing with Git](https://www.youtube.com/watch?v=ElRzTuYln0M)
There may have been times when you thought, oh, I wish I could just move some fixes (such as typos) into the previous commit, maybe reordering the commits or deleting them all together. However, up until now, you just were in the habit of making the fixes and giving them a special commit instead.
Rebase can help with that.

Let's look at some of the options that rebase provides us.
Firstly, rebasing is essentially a form of rewriting history within Git. So, you would have a bunch of commits that you want to work upon and they can be referenced starting from the `HEAD` of the branch (i.e. the latest commit) till the commits you want to work upon.
To start an interactive rebase on the first 3 commits from `HEAD` you would type in your terminal
```
git rebase -i HEAD~3
```

Here, you will see a menu with a host of options.
```
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

Let's go over some of them.
```
p (pick): this essentially means we want to use this commit as it is
r (reword): the commit message can be changed easily of the commit on which this operation is performed
f (fixup): join commits together
```
