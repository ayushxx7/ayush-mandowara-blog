---
title: Vim Quicktips 
description: You don't always need to write a script to do some automation, sometimes, "Vim" is enough.
date: "2020-09-09"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

[Delete Blank Lines from file](https://stackoverflow.com/questions/706076/vim-delete-blank-lines)
```
:v/\S/d

# v = `g!` or not of `g`
# \S = all characters except space
# /d = delete pattern

# Do not delete lines which don't have any characters other than space
# or in other words, delete lines which only have space in them.
```

[Run commands on multiple files at once](https://stackoverflow.com/questions/7126789/vim-run-a-command-on-multiple-files)
```
# First generate a list of files
# open a directory 
`gvim .`
# fill argument list with all files which end in `.txt`
:args *.txt
# run a command on all files
:argdo v\S/d
# save all open files at once
:wa

Note, you might need to set hidden mode to write to multiple buffers at once
:set hidden
It is advisable to add `set hidden` in your `.vimrc`
```

[Delete leading spaces](http://github.com/ayushxx7)
```
# Delete leading spaces from all lines
:%le
```
