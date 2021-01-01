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
  one: "1",
  two: "2",
}

console.log("Keys:", Object.keys(obj))
console.log("Values:", Object.values(obj))

console.log("Using For In")
for (key in obj) {
  console.log("Key:", key, "val:", obj[key])
}

console.log("Using Map")
Object.keys(obj).map((key, index) => {
  console.log("Key:", key, "Index:", index, "Value:", obj[key])
})

console.log("Using forEach")
Object.keys(obj).forEach((key, index) => {
  console.log("Key:", key, "Index:", index, "Value:", obj[key])
})
```

# Check if Object is Empty(https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/)

Copy the below code in browser console:

```js heading='Check if Object is empty'
var empty_obj = {}
var filled_obj = { one: "1" }

check_empty = obj => {
  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    console.log(obj, ": Empty Object")
  } else {
    console.log(obj, ": Object is not empty")
  }
}

check_empty(empty_obj)
check_empty(filled_obj)
```
