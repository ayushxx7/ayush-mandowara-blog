---
title: Sneak
description:
date: "2020-07-29"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Install

```
Plug 'justinmk/vim-sneak'
```

## Create config file

```
type nul > %userprofile%\.config\vim\plug-config\sneak.vim
```

Make sure to source this file in `.vimrc`

## Sneak

Sneak is a motion plugin for vim that remaps the `s` and `S` keys

The authors rationale for remapping these keys is this: cl is equivalent to s, and cc is equivalent to S.

### Configure Sneak

```
let g:sneak#label = 1

" case insensitive sneak
let g:sneak#use_ic_scs = 1

" immediately move to the next instance of search, if you move the cursor sneak is back to default behavior
let g:sneak#s_next = 1

" remap so I can use , and ; with f and t
map gS <Plug>Sneak_,
map gs <Plug>Sneak_;

" Change the colors
highlight Sneak guifg=black guibg=#00C7DF ctermfg=black ctermbg=cyan
highlight SneakScope guifg=red guibg=yellow ctermfg=red ctermbg=yellow

" Cool prompt
let g:sneak#prompt = '🔎'
```

### Sneak Commands

```
s{char}{char}
S{char}{char}

f{char}
F{char}


t{char}
T{char}
```

## Link to Sneak repo

[Sneak](https://github.com/justinmk/vim-sneak)
