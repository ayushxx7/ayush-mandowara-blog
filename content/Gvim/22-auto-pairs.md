---
title: Auto Pairs
description: Auto complete for characters that are usually used in pairs 
date: "2020-09-13"
image: "gvim-intro.png"
author: "Ayush"
tags: ["gvim"]
---

## Auto Pairs

This plugin will add the corresponding `ending` character for a `starting` for the
## Install with vim-plug

```
Plug 'jiangmiao/auto-pairs' " opening brackets / quotes will add a matching closing pair. ## experimental.
```

### The following characters when entered will automatically have their closing pair appear:
    - '
    - " (triple double quotes auto paired)
    - (
    - [
    - \` (triple backticks autopaired)

### One of the most important features is the `alt-e` keybinding (that is enabled by default)
    - Let's say you are on in a line and reach the word that you want to put in `()`
    - Type in () and keep pressing `<alt><e>` till whatever you want to be in the brackets is inside it.
    - This works with all autopairs that the plugin supports.

To learn more about Auto Pairs checkout [this page](https://github.com/jiangmiao/auto-pairs)
