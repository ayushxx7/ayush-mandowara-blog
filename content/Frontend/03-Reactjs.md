---
title: React.js QuickTips
description: Collection of Tips for React.js based on my personal work experience
date: "2021-04-18"
image: "react.jpg"
author: "Ayush"
tags: ["javascript", "react", "reactjs"]
---

# PURPOSE

Storing Tips here for future reference

## [Returning Multiple Rows in same Function without warning or error](https://stackoverflow.com/a/51875412)

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

---

## [React not identifying function as React Component](https://stackoverflow.com/questions/55846641/react-hook-usestate-is-called-in-function-app-which-is-neither-a-react-funct)

If you see an error such as:

```
React Hook “useState” is called in function “app”
which is neither a React function component or a
custom React Hook function
```

All you need to do this, capitalize the first letter of your component due to react conventions.

So this:

```js
import React, { useState } from "react"
import "./App.css"
import Person from "./Person/Person"

const app = props => {
  const [personState, setPersonSate] = useState({
    person: [
      { name: "bishnu", age: "32" },
      { name: "rasmi", age: "27" },
      { name: "fretbox", age: "4" },
    ],
  })
  return (
    <div className="App">
      <h2>This is react</h2>
      <Person name={personState.person[1].name} age="27"></Person>
      <Person name={personState.person[2].name} age="4"></Person>
    </div>
  )
}

export default app
```

becomes this:

```js
import React, { useState } from "react"
import "./App.css"
import Person from "./Person/Person"

const App = props => {
  const [personState, setPersonSate] = useState({
    person: [
      { name: "bishnu", age: "32" },
      { name: "rasmi", age: "27" },
      { name: "fretbox", age: "4" },
    ],
  })
  return (
    <div className="App">
      <h2>This is react</h2>
      <Person name={personState.person[1].name} age="27"></Person>
      <Person name={personState.person[2].name} age="4"></Person>
    </div>
  )
}

export default App
```
