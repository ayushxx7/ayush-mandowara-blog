---
title: Vim-commentary
description:
date: "2020-04-30"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Install commentary

```
Plug 'tpope/vim-commentary'
```

## Configuration

You can add your own custom key mapping for it.

For Ex: 
```
nnoremap <space>/ :Commentary<CR>
vnoremap <space>/ :Commentary<CR>
```

Then, Just press <space>/ and it will comment out the line. 

In visual mode select the text you want to comment out and press <space>/

<br>
However, I still prefer the 'gc<motion>', 'gcc' for single line, and 'gc' for visual block mode. (Default config)


## Link to repo

[commentary](https://github.com/tpope/vim-commentary)
