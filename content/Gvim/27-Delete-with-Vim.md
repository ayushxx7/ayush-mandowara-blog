---
title: Deleting with Vim
description: You don't always need to write a script to do some automation, sometimes, "Vim" is enough.
date: "2020-11-10"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Introduction
I realised that deleting code and/or blocks of unused text within a file is one of the key roles of a Software Engineer. Honestly, it's less about creating more content, and more about deleting whatever is not required. Essentially paying off the Technial Debt that keeps on accumulating over time.
Almost none of what I wrote above is relevant to the tips below, but hey, I got your attention, no?

[Delete Blank Lines from file](https://stackoverflow.com/questions/706076/vim-delete-blank-lines)
```
:v/\S/d

# v = `g!` or not of `g`
# \S = all characters except space
# /d = delete pattern

# Do not delete lines which don't have any characters other than space
# or in other words, delete lines which only have space in them.
```

[Delete leading spaces](http://github.com/ayushxx7)
```
# Delete leading spaces from all lines
:%le
```

[Delete based on search pattern](https://vim.fandom.com/wiki/Delete_all_lines_containing_a_pattern)
```
# It is possible to delete lines based on regex patterns
# To delete all lines that end with a number
:g/\d$\d

# Note: It is advised that you first find the exact pattern using the `/` search and then use it in the delete operation.
```

[Delete Trailing Spaces](https://vim.fandom.com/wiki/Remove_unwanted_spaces)
```
In Vim run the following command: `:%s/\s\+$//e

Tip: Copy this command and paste in the command window, so you don't have to type.
- Open command window in Vim using `q:`
- Press `p` to paste the copied text
- Press enter to execute the command

You can also create an Auto Command so that trailing spaces are removed by default when saving.
To do so, you can add the following to your `.vimrc`: autocmd BufWritePre *.* %s/\s\+$//e
```


