---
title: Vim Quicktips
description: You don't always need to write a script to do some automation, sometimes, "Vim" is enough.
date: "2020-09-09"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

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

[Substitution]()

```
# Map the substitute command to be accessbile easily.
# For example, you can set it so `<leader>z` would invoke it and put the cursor at the correct possition.

- Add the following to your .vimrc
nmap <leader>s :%s//gc<Left><Left><Left>

#Further, you can also invoke subsitution on a visual selection
# Just select the lines you want to run subsitution on, and type `:s`
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
:%s/ /
/gc

Press enter and confirm your subsitution.
The list will now look like
Ayush,
Mandowara,
comma,
list
```

[Convert new lines to comma separated list](https://github.com/ayushxx7)

- For cases where you have rows of values that need to be part of a list (such as a comma-separated list)

```
AR
DE
IN
```

Assuming that we want to quote these words, and then join these new lines to `,` separated list of values
a) Add quotes and commas at end of each word

```
:%s/$/",/g
```

```
AR",
DE",
IN",
```

b) Add quotes at start of each word

```
:%s/^/"/g
```

```
"AR",
"DE",
"IN",
```

Next we record a sequence of operation using macros

- Go to first line
- Press `qq` to start recording a macro and store it in `@q`
- Press `I` (`<shift>`+`i`) to go to the beginning of the line
- Press `<backspace>`
- Hit `q` to stop recording the macro

Essentially, we are going to the start of the line, and pressing backspace to delete the new line and join the two lines

- Visually select all the lines using `vG`
- Type `:norm @q` and hit enter
- Voila!
  ```
  "AR","DE","IN",
  ```
- Now, just remove the extra comma, and put in the brackets
  ```
  ["AR","DE","IN"]
  ```

[Execute a Vim command from the terminal](https://til.hashrocket.com/posts/aeeauzmhvv-run-vim-command-from-the-command-line)

- Run a command while opening Vim using the `-c` switch

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

- Now, every time you will open that file, your forced config will be set, without altering your whole ecosystem

### [Pretty Print JSON in Vim](https://pascalprecht.github.io/posts/pretty-print-json-in-vim)

- Just run this command in Vim:

```
:%!python -m json.tool
```

- Note: you can simply paste this command in the command window of Vim.
- Use `q:` to open command window. Paste the above code using `p`. Hit `enter`.

### [Entering Math Symbols / Special Symbols in Vim](http://www.alecjacobson.com/weblog/?p=443)

Vim has an inbuilt set of symbols that you can enter in any document

```
# First, look up the symbol, using
:dig or :digraphs
# The mapping is of the form, type_the_following:to_get_this_symbol
# Once you know which symbol to type and its character combination
- Press `i` to switch to insert mode in the document
- Press `<ctrl><k>`
- You will be prompted for more input, here type the sequence you looked up
- For ex, to the mathemical symbol of `pi`
- <ctrl><k> + p*
```

- Now, you would see the symbol entered in the cursor position

### [Move Splits](https://stackoverflow.com/a/6071520)

```
If you have them split vertically `C-w`+`J` to move one to the bottom

If you have them split horizontally `C-w`+`L` to move one to the right

To rotate in a 'column' or 'row' of split windows, `C-w`+`C-r`

Layout: Vertical Splits => Horizontal Splits `C-w`+`K`
        Horizontal Splits => Vertical Splits `C-w`+`H`
```

### [Paste multiple times](https://stackoverflow.com/questions/16700989/paste-multiple-times-in-vim/24899228#24899228)

There can be times where you want to copy a bunch lines multiple times in a document, for example, when writing test cases.
Vim makes it easy for us to repeat any operation multiple times.
The most common example is when you want to jump (say) 10 lines below the current line `10j` comes to mind.
The same logic can be applied to the `paste` operation as well.

So, to copy a set of (say) 5 lines, you will visually select them

```
<shift>v+5j
```

Copy them,

```
y
```

Paste it (say) 10 times starting from where the cursor is currently located. (Ideally, this is where you want to paste the lines 10 times)

```
10p
```

### [Counting words in a document]{https://vim.fandom.com/wiki/Word_count}

Vim makes counting words in a document trivially easy. Just press the following combination:
`g` + `<Ctrl>g`
You will see the following information in the status line:

- <current column> of <total columns>
- <current line number> of <total lines>
- <current word position> of _<total words>_
- <current byte> of <total bytes>

Note: you can also use this in visual selection mode to get count of words in a particular selection.

### [Edit Macros](https://thoughtbot.com/blog/how-to-edit-an-existing-vim-macro)

There are times when you have recorded a macro, but messed up a small part or it doesn't work on multiple lines at once (forgot to add that pesky `j`)
You might say, eh, let's just record it again. But wait, there's a better way out of it!

Macros are stored as simple strings of keys in the register where you recorded it.
So, if you recorded the macro using `qq`, the macro is stored in the register `q` due to which you can play it using `@q`.

You can access the contents of any register, including the ones in which you recorded your macros in vim using the `"` operator.
In Normal mode, type `"qp`

- `"q` -> contents of register `q`
- `p` -> paste
  Now you can see the whole macro string, and edit is as you wish.

Original:

```
If"ilableel: ff,i, file: "No file selectedFbgelli{Ai}
```

Edited (added `j`) at the end:

```
If"ilableel: ff,i, file: "No file selectedFbgelli{Ai}j
```

Now to save it back in register `q` (or any register for that matter), just type `"qyy` on the macro line.
This will copy the contents of the current line (which is the macro we edited), and store it in register q.
Now you can play the macro using `@q` as you normally would.

