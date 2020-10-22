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

[Convert spaces to New Lines](https://stackoverflow.com/a/1048646)
```
In case you want to convert spaces to a new line, for example,
when converting a comma separted list to horizontal so you can paste them in a sheet:

Ayush, Mandowara, comma, list

Enter the following in Vim:
:%s/ /<Ctrl-v><Enter>/gc
When you press <Ctrl-v>, the command window will let you enter special characters
Then when you press Enter, the symbols will look like below:
:%s/ //gc

Press enter and confirm your subsitution.
The list will now look like
Ayush,
Mandowara,
comma,
list
```

[Execute a vim command from the terminal](https://til.hashrocket.com/posts/aeeauzmhvv-run-vim-command-from-the-command-line)
- Run a command while opening vim using the `-c` switch
```
Ex: run PlugInstall while opening gvim
gvim -c ":PlugInstall"
```

[How to Resize Split windows](https://vim.fandom.com/wiki/Resize_splits_more_quickly)
- To resize horizontal splits, for example, when viewing diff using Vim Fugitive
```
# resize <size> or res <size>
res 60
```

[Vim Diff Quick Tips](https://gist.github.com/mattratleph/4026987)
```
]c          - next difference
[c          - previous difference
do          - diff obtain
dp          - diff put
zo          - open folded text
zc          - close folded text
:diffupdate - re-scan the files for differences
```
- Note: diffobtain will fetch diff from the other pane and paste it in the current pane
-       diffput will put the diff from current pane to the other pane

### [How to set file specific settings](https://www.howtoforge.com/tutorial/vim-modeline-settings/)
#### Sometimes there can be a situation where you want to set individual settings for a file
For example, when your default python config is set to 4 tabs, however, some other legacy code was written with 2 tabs
You can use modeline to set file specific settings
- In your .vimrc, add the following
```
set modelines=10
```
- Afterwards, open the file you want to configure and add your desired config, in either the first 10 lines, or the last
- This is because you have set modelines value to 10
- Add your config as a comment (for ex, in Python, you would comment using #, while in JS you would use //)
```
# vim: set tabstop=2:
# vim: shiftwidth=2:
```
- Now, everytime you will open that file, your forced config will be set, without altering your whole ecosystem


### [Pretty Print JSON in Vim](https://pascalprecht.github.io/posts/pretty-print-json-in-vim)
- Just run this command in Vim:
```
:%!python -m json.tool
```
- Note: you can simply paste this command in the command window of Vim.
- Use `q:` to open command window. Paste the above code using `p`. Hit `enter`.

### [Opening a Terminal inside Vim](https://www.youtube.com/watch?v=8m5t9VDAqDE)
#### You can open up a terminal inside vim, and you can interact with the VIM way!
```
Inside vim, just type,

:terminal

Boom! You're in!
You would notice that there's a terminal, but you can't really interact with it except for writing commands
To fix that, you have to enter 'Nomral' mode, by pressing the following combination

<ctrl>+<\> followed by <ctrl>+<n>
# Now, you are IN NORMAL MODE! Inside a terminal!!
Here, you can go do whatever you could do in a document inside vim.
```

- Tip: One of the most useful things I found was, you could jump directly to the stack trace location
- Say, in the terminal you have an error,
    ```
    File "content\Deepspeech\01-Deepspeech-basics.md", line 1
    ```
- Now, once you go into normal mode, move to that specific line, and press
    ```
    gf
    ```
- It will take you directly to the line where the error occured!
