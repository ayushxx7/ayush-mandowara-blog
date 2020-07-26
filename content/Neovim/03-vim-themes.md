---
title: Gvim Themes
description:
date: "2020-04-25"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Plugin your theme

First open vim plug and add your theme, you can add as many themes as you want here to switch between them at any time

I'm going to be installing the gruvbox theme I'll link to a repo with a bunch of others at the bottom of the blog

Open `vim-plug/plugins.vim` and add the following:

```
Plug 'gruvbox-community/gruvbox' " community gruvbox.
```

Make sure to run `:PlugInstall`

## Theme config

First create a directory for themes and then add the name of the theme you want to install

```
mkdir %userprofile%\.config\vim\themes

type nul > %userprofile%\.config\vim\themes\gruvbox.vim
```

Now let's set the colorscheme, open `gruvbox.vim` and add the following:

```
syntax on
colorscheme gruvbox

" Font & Colorscheme
set background=dark
set guifont=Consolas:h13
set guifontwide=NSimsun:h14
```

### Note

This config is specific to my personal preference, checkout the readme for whatever theme you install

Now we can add our theme to `.vimrc`

```
source $HOME\.config\vim\themes\gruvbox.vim
```

## Where to find more themes

[Check out this repo](https://github.com/rafi/awesome-vim-colorschemes)

Click on any theme in the readme and install it similar to the way I did above
