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

### [Identifying when Enter key is pressed]()

There can be situations where you are building a Search UI, and have a button which on clicking uses the input value for further processing.
Naturally, you would want that the search should also be possible when the user presses enter as well.
Fortunately, this is trivially easy. All you need to do, is capture all the keypress events, and target a specific one. In our case, that would be the enter key.
The modern way to do this would be to capture the key name directly, using the event.key attribute.

```
if (event.key == "Enter") {console.log('captured enter');}
```

Older implementations might use the event.charCode event, however, it is _Deprecated_

```
if (even.charCode == '13') {console.log('captured enter using charCode');}
```

### [Checkbox whose default state is checked](https://www.w3schools.com/tags/att_input_checked.asp)

To set the default state of checkbox to be `true` or `checked` we can pass in the `checked` property

```
<!DOCTYPE html>
<html>
<body>

<h1>The input checked attribute</h1>

<form action="/action_page.php" method="get">
  <input type="checkbox" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" name="vehicle3" value="Boat" checked>
  <label for="vehicle3"> I have a boat</label><br><br>
  <input type="submit" value="Submit">
</form>

</body>
</html>

```

### [Show Hand when hovering over a clickable element](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor)

There are various properties you can apply to the mouse pointer.
It's as simple as setting up a css style.
For instance, to show a pointing hand on a clickable element such as a link,

```
a:hover {
  cursor: pointer
}
```

To try this, enter the following in an html file:

```
<a href="www.google.com" style="cursor:pointer">Google</a>
```

There are a lot of other styles you can try. Click the heading of this tip to see them all.
