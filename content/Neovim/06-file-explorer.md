---
title: Exploring coc-explorer
description:
date: "2020-04-28"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Install nerdtree

Add the following to `plugins.vim`
```
Plug 'preservim/nerdtree' " file tree.
```

## Config

Add the following to `%userprofile%\.config\vim\plug-config\nerdtree.vim` and source it.

Append these lines to the end

```
map <C-n> :NERDTreeToggle<CR>
```
