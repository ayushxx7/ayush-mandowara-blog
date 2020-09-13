---
title: Vim Visual Star Search
description: Exand the default star search
date: "2020-09-13"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Vim Visual Star Search

## Install with vim-plug

```
Plug 'nelstrom/vim-visual-star-search' " expanding star search from single word to all selection.
```

### This plugin expands the default * behavior of Vim
- By default, when you press star (*) somewhere in the document, Vim will highlight the word under the cursor
- Example: If I press star on name in the following line: `def find-my-name()`, `name` will be highlighted in the whole document.
- This plugin expands that by allowing us to visually select the text we want to search for using the * command
- When you add this plugin, you can visually select `find-my-name`, press `*` and it will be highlighted everywhere.

## Tip:
- One place I use this often is when I have to substitute something. I'll visually select the word, then
```
:%s\\change-to-this\gc
```
- The substitute command will assume whatever was last highlighted to be the word that is to be substituted.

To learn more about the plugin, visit [this page](https://github.com/nelstrom/vim-visual-star-search)
