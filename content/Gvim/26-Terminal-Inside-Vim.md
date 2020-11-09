---
title: Terminal within Vim (vim movements inside terminal)
description: Terminal within Vim, which works almost like any document within Vim, except it's a terminal
date: "2020-11-09"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Introduction
Imagine, the power of terminal combined with the flexibility of Vim keybindings.
Guess What! You don't have to imagine it anymore. Nor do you have to add anything extra other than having the latest version of Vim installedd in your machine.
You can operate on the terminal, as you would with any other document, once you enter the `Normal` mode we're all familiar with.

## [Opening a Terminal inside Vim](https://www.youtube.com/watch?v=8m5t9VDAqDE)
#### You can open up a terminal inside vim, and you can interact with the VIM way!
Inside vim, just type, `:terminal` or `:term`
Boom! You're in!
You would notice that there's a terminal, but you can't really interact with it except for writing commands. It would feel like a normal terminal, in-fact, except you won't be able to scroll up! Wait.. What?!
Not to worry! You just have to enter 'Nomral' mode
Press: `<ctrl><\>`+`<ctrl>+<n>` (control backslash followed by control n)
### Now, you are IN NORMAL MODE! Inside a terminal!!
#### Here, you can go do whatever you could do in a document inside vim.
Feel free to move around using h-j-k-l, jump to top using `gg`, back to the bottom `G`.

- Tip: One of the most useful things I found was, you could jump directly to the stack trace location
- Say, in the terminal you have an error,
    ```
    File "content\Deepspeech\01-Deepspeech-basics.md", line 1
    ```
- Now, once you go into normal mode, move to that error line, and press
    ```
    gf
    ```
- It will take you directly to the line where the error occured!
