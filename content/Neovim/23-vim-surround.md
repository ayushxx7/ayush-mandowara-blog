---
title: Vim Surround
description: Add more words to your Vim vocubalary to run motions over.
date: "2020-09-13"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Vim Surround

## Install with vim-plug

```
Plug 'tpope/vim-surround' "changing surrounding brackets characters
```

### This plugin add extra vocubalary to your `c`, `d`, `y` motions so you can run thm on types of `words`
    - (test) -> cs(] -> [test] # change surrounding ( with [ # without spaces on left and right
    - (test) -> cs([ -> [ test ] # change surrounding ( with [ 
    - (test) -> cs(' -> 'test' # change surroudnign ( with '
    - (test) -> cs(" -> "test" # change surroudnign ( with "
    - "test" -> ds" -> test # delete surrounding "
    - test -> ysiw] -> [test] # surround word with []
    - df[name] -> ysiwflist -> list(df[name]) # surround word with function name

To learn more about Vim Surround checkout [this page](https://github.com/tpope/vim-surround)

## Vim Repeat
```
Plug 'tpope/vim-repeat' " covers a lot more in the dot (repeat command).
```
- This plugin adds more to the default dot command vim provies. It pairs up nicely with vim-surround. So, you can repeat the comamnds you wrote with vim-surround using the (dot) easily.

To learn more ways this plugin can be used, checkout [this page](https://github.com/tpope/vim-repeat)
