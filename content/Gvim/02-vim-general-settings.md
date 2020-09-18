---
title: Gvim Setting up the basics
description:
date: "2020-04-24"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## General Setings

To include some basics in your config first create a directory called general and a file called `settings.vim`

```
mkdir %userprofile%\.config\vim\general

type nul > %userprofile%\gvim\general\settings.vim
```

Here is every general setting I use with a brief explanation:

Add the following to `settings.vim`
```
filetype plugin indent on 
syntax on " enable basic syntax highlighting.

set nocompatible " for sneak
set noswapfile "dont need swapfile
set undodir=C:/Users/ayush/.vim/undo-dir "stores all undo info in file.
set undofile
scriptencoding utf-8 
set encoding=utf-8

set clipboard=unnamed " Share clipboard with OS

set backspace=2 " make backspace work like most other apps
set backspace=indent,eol,start

set laststatus=2 " always show statusline
set cursorcolumn
set cursorline
set ruler " show line number and column number
set guioptions-=m " removes menu
set guioptions-=T " removes toolbar
set guioptions-=r " removes right scrollbar
set guicursor=a:blinkwait0 " remove cursor blinking
set nu "absolute line numbers
set ai "automatic indentation picked from parent line
set ignorecase "ignore case when searching.
set hlsearch "highlight search
set incsearch "search as you type.
set ff=unix "unix like line endings.
set foldlevel=99 " by default keep the folds open.


" Font & Colorscheme
set background=dark
set guifont=Consolas:h13
set guifontwide=NSimsun:h14
```

Source in .vimrc

```
source $HOME\.config\nvim\general\settings.vim
```

## Mapping new keys

Again we'll create a directory called keys and and a file called mappings.vim

```
mkdir %userprofile%\.config\vim\keys

type nul > %userprofile%\.config\vim\keys\mappings.vim
```

Add the following to `mappings.vim`:

```
" setting leader key to <space>
let mapleader=" "

" MAPPINGS
" Ctrl+F1 to toggle menu bar
nnoremap <C-F1> :if &go=~#'m'<Bar>set go-=m<Bar>else<Bar>set go+=m<Bar>endif<CR>
nnoremap <C-F2> :ts <CR>

" vim tabs quick shortcuts
map tn :tabnew<CR>
map tk :tabprev<CR>
map tj :tabnext<CR>
map tq :tabclose<CR>

" undotree toggle
autocmd FileType python noremap <buffer> <F8> :call Autopep8()<CR>
"file browser
nnoremap <leader>ff :wincmd v<bar> :Ex <bar> :vertical resize 30<CR> 

" switching between open windows remapped.
nnoremap <leader>h :wincmd h<CR> 
nnoremap <leader>j :wincmd j<CR>
nnoremap <leader>k :wincmd k<CR>
nnoremap <leader>l :wincmd l<CR>

" disable search highlighting
if maparg('<C-L>', 'n') ==# ''
  nnoremap <silent> <C-L> :nohlsearch<C-R>=has('diff')?'<Bar>diffupdate':''<CR><CR><C-L>
endif

" resize window quickly
nnoremap <silent> <leader>+ :vertical resize +5<CR>
nnoremap <silent> <leader>- :vertical resize -5<CR>

" remap for substitute command
nnoremap <leader>z :%s//gc<Left><Left><Left>
" quickly generate ctags
nnoremap <leader>t :!ctags -R .
```

Source in .vimrc

```
source $HOME\.config\nvim\keys\mappings.vim
```
