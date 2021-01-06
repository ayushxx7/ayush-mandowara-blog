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

# Log Form Data(https://stackoverflow.com/questions/40062477/formdata-append-not-working)

You cannot directly log a formData object.
However, you can use the entries property to iterate over formdata values.
Copy the below code in browser:

```js heading="Logging Form Data"
var form_data = new FormData()
form_data.append("first_entry", "first_value")
form_data.append("second_entry", "second_value")

console.log("Directly Loggin FormData object with return empty object")
console.log(form_data)

console.log("Use the entries property to access the values and log them")
for (var key of form_data.entries()) {
  console.log(key[0] + ", " + key[1])
}
```

# Returning Multiple Rows in same Function without warning or error(https://stackoverflow.com/a/51875412)

When we have to render multiple trs inside of a function and we try something like

```
getRows = (row) => {
  return (
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>4</td>
    </tr>
  )
}
```

React will throw error about JSX expressions having one parent element

If we wrap it inside a `div`

```
getRows = (row) => {
  return (
  <div>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>4</td>
    </tr>
  </div>
  )
}
```

We get a warning about how divs cannot be children of table elements

The correct way to do this would be using `Fragments`, which was introduced in React 16

```
getRows = (row) => {
  return (
  <React.Fragment>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>4</td>
    </tr>
  </React.Fragment>
  )
}
```

Note that there might be a warning about each element having a unique key prop
Just add the key attribute in all your components don't currently have one, including the Fragment.

