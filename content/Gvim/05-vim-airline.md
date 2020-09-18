---
title: Airline
description:
date: "2020-07-27"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Plugin Airline and Airline themes

Add the following to `%userprofile%\.config\vim\vim-plug\plugins.vim`

```
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
```

## Create config

Create theme file for airline

```
type nul > %userprofile%\.config\vim\themes\airline.vim
```

Add the following configuration

```
" enable tabline
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ''
let g:airline#extensions#tabline#left_alt_sep = ''
let g:airline#extensions#tabline#right_sep = ''
let g:airline#extensions#tabline#right_alt_sep = ''

" enable powerline fonts
let g:airline_powerline_fonts = 1
let g:airline_left_sep = ''
let g:airline_right_sep = ''

" Switch to your current theme
let g:airline_theme = 'onedark'

" Always show tabs
set showtabline=2

" We don't need to see things like -- INSERT -- anymore
set noshowmode
```

Don't forget to source this file

```
source $HOME/.config/nvim/themes/airline.vim
```

## Install fonts

You may want to install some awesome fonts. You can do so by following these stepe.
[Original Source](https://medium.com/@slmeng/how-to-install-powerline-fonts-in-windows-b2eedecace58)

Open Powershell [Administrator], cd to a directory of your choice, and type the following commands.

```
git clone https://github.com/powerline/fonts.git
cd fonts

Set-ExecutionPolicy Bypass
## press 'y' if a prompt appeears after the above command.

./install.ps1

# since you've already installed fonts, you can get rid of the cloned repo

cd ..
rm -rf fonts
```

## Further documentation and repo

[vim airline](https://github.com/vim-airline/vim-airline)
[vim airline themes](https://github.com/vim-airline/vim-airline-themes)
