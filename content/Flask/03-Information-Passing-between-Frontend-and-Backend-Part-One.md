---
title: Information Passing between your Frontend and Backend (PART ONE).
description: How to pass variables/data to and fro between flask and html.
date: "2020-07-11"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

## PURPOSE
### To pass dynamic information from your server to your front end and vice-versa

#### The Author assumes that you have read this blog [02] and have basic understanding of integrating HTML with Flask.

# Sending Information from Frontend HTML to your Python Server Script.

## HTML
```
# assuming your project structure looks like this:
flask_app
│   app.py 
└───templates
    │   index.html <- open this file

cd flask_app/templates
gvim index.html
```

#### To pass data from Frontend we need to `POST` it. Forms provide a way to do so.

##### Modify your `index.html` so that it contains a basic form:

```
<h1> Hello World! </h1>
<h2>
  <pre>Made with &lt;3 and Python</pre>
</h2>
<em>by <b>Ayush Mandowara</b></em>

<hr>

<div>
  <h3>About `Me`</h3>
  <!-- Creating an About Me HTML Form -->
  <!-- on form submission, form data will be posted and page will be redirected to /about endpoint -->
  <!-- We specify post method when submitting data to the server -->
  <form action='/about' method='post'>
    My Name is <input type="text" placeholder="NAME" name="my_name">
    <br>
    <label>I would rather have </label>
    <select name="dd">
      <option value="money">Money</option>
      <option value="fame">Fame</option>
    </select>
    <br>
    because <input type="text" placeholder="Reason" name="reason"></input>
    <br>
    I can do simple math,
    like adding <input type="number" name="first_number" placeholder="Enter First Number">
    with <input type="number" name="second_number" placeholder="Enter Second Number">
    but I would rather have the machine do it for me.
    <br>
    <!-- element of type submit submits the form -->
    <button type="submit">Submit</button>
  </form>
</div>
```

## Python/Flask
```
# assuming your project structure looks like this:
flask_app
│   app.py <- open this file
└───templates
    │   index.html

gvim app.py
```

#### To receive data from the frontend we need to create an endpoint that accepts `POST` requests.
##### Modify your main `app.py` file like so:

```
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about', methods=['POST'])
def about_me():
  '''
  Since our form's action is set to trigger '/about' endpoint,
  this function will be triggered on form submission.

  To access the form data we use the request module imported from Flask framwork.
  The format is:
  element_name = request.form['name_attribute_of_the_element_in_the_form']
  '''
  name = request.form['my_name']
  choice = request.form['dd']
  reason = request.form['reason']
  first_number = request.form['first_number']
  second_number = request.form['second_number']
  sum_first_second = int(first_number)+int(second_number)

  sentence = f'My name is {name} and I would rather have {choice} because {reason}. The machine says, that the sum of the numbers entered is: {sum_first_second} and I certainly agree with it.'
  return sentence
```

#### Run the `app.py` file:

```
py app.py
```

- Now, visit `localhost:5000` on your browser, you will see the form just created in `index.html`
- Fill up the information and hit the submit button.
- Rejoice at your creation!

Next Blog: Information Passing between your Frontend and Backend (PART TWO).


# To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).
