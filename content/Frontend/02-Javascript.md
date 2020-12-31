---
title: JavaScript QuickTips
description: Collection of Tips for JS based on my personal work experience
date: "2021-01-01"
image: "html5.png"
author: "Ayush"
tags: ["html", "javascript"]
---

# [Iterating over Objects](https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object)
Copy the below code in console of your browser:

```js heading="How to Iterate over Objects in JS"
var obj = {
  'one': '1',
  'two': '2'
  }

console.log("Keys:", Object.keys(obj))
console.log("Values:", Object.values(obj))

console.log('Using For In')
for (key in obj) {
  console.log("Key:", key, "val:", obj[key]);
}

console.log('Using Map')
Object.keys(obj).map((key, index) =>  {
  console.log('Key:', key, 'Index:', index, 'Value:', obj[key])
})


console.log('Using forEach')
Object.keys(obj).forEach((key, index) =>  {
  console.log('Key:', key, 'Index:', index, 'Value:', obj[key])
})
```
