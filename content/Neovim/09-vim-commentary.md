---
title: Vim-commentary
description:
date: "2020-07-29"
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
However, I still prefer these default settings. 
```
To comment/uncomment on a motion such as 4j: 'gc<motion>'
To comment/uncomment single line: 'gcc' 
To comment/uncomment on visual block, after selecting block: 'gc'
```

## Link to repo

[commentary](https://github.com/tpope/vim-commentary)
