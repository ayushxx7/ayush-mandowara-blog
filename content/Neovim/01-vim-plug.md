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
" auto-install vim-plug
if empty(glob('%userprofile%\.config\vim\autoload\plug.vim'))
  silent !curl -fLo %userprofile%\.config\vim\autoload\plug.vim --create-dirs
    \ https:\\raw.githubusercontent.com\junegunn\vim-plug\master\plug.vim
  "autocmd VimEnter * PlugInstall
  "autocmd VimEnter * PlugInstall | source $MYVIMRC
endif

call plug#begin('%userprofile%\.config\vim\autoload\plugged')

    " Better Syntax Support
    Plug 'sheerun\vim-polyglot'
    " File Explorer
    Plug 'scrooloose\NERDTree'
    " Auto pairs for '(' '[' '{'
    Plug 'jiangmiao\auto-pairs'

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

