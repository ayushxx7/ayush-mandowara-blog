---
title: Terminal within Vim (vim movements inside terminal)
description: Terminal within Vim, which works almost like any document within Vim, except it's a terminal
date: "2020-09-09"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

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
