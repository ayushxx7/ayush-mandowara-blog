---
title: Plugins with Vim-Plug
description: How to add Plugins to Vim using a Plugin Manager.
date: "2020-07-18"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Installing gVim

- On Windows

  ```
  chocolatey install vim
  ```

## Create config

Make directory for your Vim config

```
mkdir %userprofile%\.config\vim
```

Create an `.vimrc` file if not already present.

- Note: `_vimrc` has a higher priority on Windows, so if it is present then either delete it, or add your config in `_vimrc` instead of `.vimrc'

```
type nul > %userprofile%\.vimrc
```

## Install vim-plug

```
curl -fLo %userprofile%\.config\vim\autoload\plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

You should now have `plug.vim` in your autoload directory so it will load of on start

## Add a new file for plugins

We will manage our plugins in a separate file for the sake of my own sanity

```
mkdir %userprofile%\.config\vim\vim-plug

type nul > %userprofile%\.config\vim\vim-plug\plugins.vim
```

## Let's add some plugins

Add the following to `%userprofile%\.config\vim\vim-plug\plugins.vim`

```
call plug#begin('~/.vim/plugged')
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } } " fuzzy file search using fzf.
Plug 'junegunn/fzf.vim'                             " fzf mappings.
Plug 'wincent/command-t'                            " fuzzy finder 2 (will also try ctrlp)
Plug 'tpope/vim-fugitive'                           " git plugin
Plug 'tpope/vim-commentary'                         " to quickly comment and uncomment statements.
Plug 'neoclide/coc.nvim', {'branch': 'release'}     " Intellisense Plugin.
Plug 'preservim/nerdtree'                           " file tree.
Plug 'justinmk/vim-sneak'                           " super quick jumping to desired position.
Plug 'svermeulen/vim-easyclip'                      " awesome clipboard like features for yank/delete.
Plug 'jiangmiao/auto-pairs'                         " opening brackets / quotes will add a matching closing pair
Plug 'tpope/vim-surround'                           " changing surrounding brackets characters
Plug 'tpope/vim-repeat'                             " covers a lot more in the dot (repeat command).
Plug 'nelstrom/vim-visual-star-search'              " expanding star search from single word to all selection.
Plug 'mhinz/vim-startify'                           " cool startup screen

" THEMES
Plug 'gruvbox-community/gruvbox'
Plug 'ayu-theme/ayu-vim'
Plug 'romainl/Apprentice'
Plug 'joshdick/onedark.vim'
Plug 'aonemd/kuroi.vim'
Plug 'rafi/awesome-vim-colorschemes'

" THEME ENHANCEMENTS
Plug 'vim-airline/vim-airline'                      " customized status line.
Plug 'vim-airline/vim-airline-themes'               " airline themes
Plug 'sheerun/vim-polyglot'                         " better syntax highlighting

Plug 'unblevable/quick-scope'                       " highlight for f,F,t,T
Plug 'mhinz/vim-signify'                            " real time diff marker w.r.t HEAD
Plug 'wellle/targets.vim'                           " change in `next` <quote> (cin')
Plug 'kana/vim-textobj-user'                        " custom text objects
Plug 'bps/vim-textobj-python'                       " custom text object for python
Plug 'osyo-manga/vim-brightest'                     " highlight word you are on
Plug 'junegunn/vim-easy-align'                      " align text around a delimiter
Plug 'bogado/file-line'                             " file:line jump
Plug 't9md/vim-choosewin'                           " switch between windows easily
Plug 'weilbith/nerdtree_choosewin-plugin'           " choose buffer when opening a file with nerdtree
Plug 'romainl/vim-cool'                             " disable hl when search complete
Plug 'Yggdroot/indentLine'                          " show indents
Plug 'machakann/vim-highlightedyank'                " highlight yank
Plug 'embark-theme/vim', { 'as': 'embark' }         " colorscheme embark

" Neovim only Plugins
Plug 'vim-scripts/python_match.vim'                 " extend % match for python
Plug 'raimon49/requirements.txt.vim'                " syn-hl for requirements.txt
Plug 'MTDL9/vim-log-highlighting'                   " syn-hl for logs
Plug 'wfxr/minimap.vim'                             " minimap
Plug 'junegunn/vim-emoji'                           " autocomplete emoji

if has('nvim')
Plug 'glacambre/firenvim', { 'do': { _ -> firenvim#install(420) } }
endif

call plug#end()
```

## Source your plugins

Add the following line to `.vimrc`

```
source $HOME\.config\vim\vim-plug\plugins.vim
```

## Vim-plug commands

Open `vim`. Make sure you have the vim executable in your %PATH% variables.

```
gvim
```

Check the status of your plugins

```
:PlugStatus
```

Install all of your plugins

```
:PlugInstall
```

To update your plugins

```
:PlugUpdate
```

After the update you can press `d` to see the differences or run

```
:PlugDiff
```

To remove plugins that are no longer defined in the `plugins.vim` file

```
:PlugClean
```

Finally if you want to upgrade vim-plug itself run the following

```
:PlugUpgrade
```

## Where did I learn all this?

[Check out vim-plug on github](https://github.com/junegunn/vim-plug)
