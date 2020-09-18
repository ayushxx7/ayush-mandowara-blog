---
title: Adding color with colorizer & rainbow
description:
date: "2020-04-30"
image: "neovim.png"
author: "Chris"
tags: ["neovim"]
---

## Install colorizer

```
Plug 'norcalli/nvim-colorizer.lua'
```

## Configuration

Create a place for lua plugins

```
mkdir %userprofile%\.config\vim\lua
type nul > %userprofile%\.config\vim\lua\plug-colorizer.lua
```

Add the following:

```
require'colorizer'.setup(
  {'*';},
  {
    rgb      = true;         -- #rgb hex codes
	  rrggbb   = true;         -- #rrggbb hex codes
	  names    = true;         -- "name" codes like blue
	  rrggbbaa = true;         -- #rrggbbaa hex codes
	  rgb_fn   = true;         -- css rgb() and rgba() functions
	  hsl_fn   = true;         -- css hsl() and hsla() functions
	  css      = true;         -- enable all css features: rgb_fn, hsl_fn, names, rgb, rrggbb
	  css_fn   = true;         -- enable all css *functions*: rgb_fn, hsl_fn
  })
```

Remember to source in `init.vim`, but a little differently this time

```
lua require'plug-colorizer'

# if you see an error regarding lua dll, install `lua` using chocolatey
choco install lua
```
### Note

This will not work if the file doesn't have and extension i.e. .txt .py. js .css

If you want to enable it you can do so like this:

```
:ColorizerAttachToBuffer
```

## Cool Note

You can increment and decrement in vim with `c-a` and `c-x`

just hover over a number in normal mode

`r` also work great

## Lua Note

Install `luarocks` if you want to use with `coc-lua`

## Examples

Enter the following to see what happens

```
#8F6fEa
rgb(113, 146, 230)
rgb(7%, 77%, 46%)
```

## Checkout the repo

[colorizer](https://github.com/norcalli/nvim-colorizer.lua)

## Install Rainbow

```
Plug 'junegunn/rainbow_parentheses.vim'
```

## Configuration

```
let g:rainbow#max_level = 16
let g:rainbow#pairs = [['(', ')'], ['[', ']'], ['{', '}']]

autocmd FileType * RainbowParentheses
```
