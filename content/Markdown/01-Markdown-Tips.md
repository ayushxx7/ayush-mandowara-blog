---
title: Markdown Tips
description: Tips for writing markdown
date: "2021-05-02"
image: "markdown.png"
author: "Ayush"
tags: ["markdown"]
---

# PURPOSE

Tips for writing a blog using Markdown

## [Adding a superscript in Markdown](https://stackoverflow.com/a/15156585/7048915)

Markdown supports the use of certain HTML tags such as <sup>`<sup>`</sup> & <sub>`<sub>`</sub> to create superscript and subscript elements.

```
<sup>superscript</sup>
<sub>subscript</sub>
```

---

## [Linking content within the current document in Markdown](https://stackoverflow.com/a/30789503/7048915)

We can use the `<a>` tag to create links that reference some other part of the same document.

[Click Me to scroll to reference](#reference)

```
<a name="reference">Referenced using `a` tag</a>
[reference](#reference)
```

I  
will  
add  
some  
arbitrary  
lines  
in  
between  
to  
demonstrate  
the  
working  
of  
self-referencing  
links

<a name="reference" href="#reference">Referenced using `a` tag</a>

---

## Combining supertitle with self-linking

Click<sup>[here](#here)</sup>

I  
will  
add  
another  
set  
of  
arbitrary  
lines  
in  
between  
to  
demonstrate  
the  
working  
of  
self-referencing  
links  
with  
superscript

<a name="here" href="#here">Pretty cool, huh?</a>
