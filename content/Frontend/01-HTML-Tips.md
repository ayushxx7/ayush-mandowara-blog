---
title: Tips for HTML
description: Collection of Tips for HTML based on my personal work experience
date: "2020-10-22"
image: "html5.png"
author: "Ayush"
tags: ["html"]
---

# HTML Quick Tips

### [Creating a table with a Heading](https://stackoverflow.com/questions/22702825/create-a-table-with-sub-headings-and-side-headings)

There can be situation when you want your HTML table to have a heading of it's own.
In such situations, we can use the colspan attribute to achieve this.
Save the below code in a test.html file and open it.

```
<table border='1'>
  <thead>
    <tr>
      <th colspan='2'>table heading</th>
    </tr>
    <tr>
      <th>column 1</th>
      <th>column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>val 1</th>
      <th>val 2</th>
    </tr>
    <tr>
      <th>val 3</th>
      <th>val 4</th>
    </tr>
  </tbody>
</table>
```

A detailed example with multiple subheadings can also be found [here](http://jsfiddle.net/TLAV8/).

