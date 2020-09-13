---
title: Vim EasyClip
description: How to properly copy, pastea and delete. 
date: "2020-09-13"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## EasyClip

This plugin remaps your your bindings for `d` and `c` so that the contents on which these operations are performed don't copy the deleted text to buffer. In other words, `d` triggers `_d` and `c` triggers `_c` so the contents go to the blackhole register. 
If you actually want to keep the contents that you are deleting, the `m` key is remapped to the default vim behavior.

## Install with vim-plug

```
Plug 'svermeulen/vim-easyclip' " awesome clipboard like features for yank/delete.
```

In your `plug-config` and an entry for `vim-easyclip`

```
type nul > %userprofile%\.config\plug-config\vim-easyclip.vim
```

## Add the following to it:

```
" adding this mapping as easyclip overrides m key.
nnoremap gm m

"since we have remapped the `m` key, to set marks we need to set the above keybinding.
"now to set marks, you would use `gm` instead of `m`
```

Add the following to your `.vimrc`

```
source $HOME\.config\vim\plug-config\vim-easyclip.vim
```

To learn more about why you would change default vim behavior and what all vim-easyclip is capable of doing checkout [this page](https://github.com/svermeulen/vim-easyclip)
