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

[Delete based on search pattern](https://vim.fandom.com/wiki/Delete_all_lines_containing_a_pattern)
```
# It is possible to delete lines based on regex patterns
# To delete all lines that end with a number
:g/\d$\d

# Note: It is advised that you first find the exact pattern using the `/` search and then use it in the delete operation.
```


[Substitution]()
```
# Map the substitute command to be accessbile easily.
# For example, you can set it so `<leader>z` would invoke it and put the cursor at the correct possition.

- Add the following to your .vimrc
nmap <leader>s :%s//gc<Left><Left><Left>

#Further, you can also invoke subsitution on a visual selection
# Just select the lines you want to run subsitution on, and type `:s`
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
