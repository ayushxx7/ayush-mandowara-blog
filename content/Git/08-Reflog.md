---
title: The power of Git Rebase
description:
date: "2021-04-01"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

## Introduction

Reflog is a powerful tool provided by Git and helps us in solving a variety of problems. This blog will try to address some of the scenarios that I face which are solved by Reflog.

### What is Reflog?

A local version history which records each & every move you make in the repository. It keeps track of all commits, even those that were rewritten. It stores information such as which branch you checked out from, which stash you applied, what commits you ammend, your merges, your rebases, every little detail about what happens in your local repository.
Suffice to say, it is really helpful in cases when you mess up history, or even to reference old commits or changes that are no longer part of the "main" history of the project.

Ready? Run the following in your command to see what I mean:

```heading="Reflog: Basic Usage"
git reflog
```
