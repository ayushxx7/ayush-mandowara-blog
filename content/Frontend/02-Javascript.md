---
title: JavaScript QuickTips
description: Collection of Tips for JS based on my personal work experience
date: "2021-04-18"
image: "javascript.png"
author: "Ayush"
tags: ["javascript"]
---

# PURPOSE

To show that I do actually use Javascript sometimes. Although I may not be as succesful in convincing someone because I am not updating this often!

## [Iterating over Objects](https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object)

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

## [Check if Object is Empty](https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/)

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

## [Log Form Data](https://stackoverflow.com/questions/40062477/formdata-append-not-working)

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

## How to check whether a substring exists in an array elements

You can use the `includes` method

```js heading="Using includes to ceck subtring in Javascript"
var test_arr = ["element", "another_element", "one_more_element"]

//checking substring
for (var i = 0; i < test_arr.length; i++) {
  if (test_arr[i].includes("element")) {
    console.log(`Yes: ${test_arr[i]}`)
  }
}

//to check exact string, you can use simple equality check

//writing the same method but with ES6 syntax
test_arr.forEach((elem, index) => {
  if (elem.includes("element")) {
    console.log(`forEach method::${index}::${elem}`)
  }
  if (elem == "element") {
    console.log(`Exact Match::${index}::${elem}`)
  }
})
```
