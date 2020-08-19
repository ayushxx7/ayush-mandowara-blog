---
title: Information Passing between your Frontend and Backend.
description: How to pass variables/data to and fro between flask and html.
date: "2020-07-11"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

## PURPOSE
### To pass dynamic information from your server to your front end and vice-versa

#### The Author assumes that you have read this blog [02] and have basic understanding of integrating HTML with Flask.

# [PART ONE] Sending Information from Frontend HTML to your Python Server Script.

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
@app.route('/about', methods=['POST'])
def about_me():
  '''
  Since our form's action is set to trigger '/about' endpoint,
  this function will be triggered on form submission.

  To access the form data we use the request module imported from Flask.
  The format is:
  element_name = request.form['name_attribute_of_the_element_in_the_form']
  '''
  name = request.form['my_name']
  choice = request.form['dd']
  reason = request.form['reason']

  sentence = f'My name is {name} and I would rather have {choice} because {reason}'
  return sentence
```

#### Run the `app.py` file:

```
py app.py
```

- Now, visit `localhost:5000` on your browser, you will see the form just created in `index.html`
- Fill up the information and hit the submit button.


## Topic 2: Sending Information from Backend Flask to HTML.


1. Modify your main `app.py` file like so:  

```
from flask import Flask, render_template, request # importing request to fetch info from form

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html') 

@app.route('/run', methods=['POST']) 
def run_suite_util():

  suite_name = request.form['suite']
  build_url = request.form['build_url']
  host_url = request.form['host_url']

  print('The Suite that is going to be triggered is:',suite_name)
  print('The Suite that is going to be triggered is:',build_url)
  print('The Suite that is going to be triggered is:',host_url)

  return render_template('suite_run.html', suite_info = [suite_name,build_url,host_url])
  # we are rendering an HTML template, and passing a list of values that will be parsed by our HTML.


if __name__ == "__main__":
 app.run(debug=True)
```


2. Create a new `suite_run.html` in your `templates` directory, and add the following to it:

```
<h1> Suite Triggered </h1>

<h2> A suite was triggered with the following specifications: </h1>

<ul>
{% for val in suite_info %}
  <li> {{val}} </li>
{% endfor %}
<!-- We are using Jinja Templating here, to parse values passed from script and render them in the HTML. 
As you may have noticed, we recieved the variable named suite_info, and ran a simple for loop.
Then we added some semantic Sugar to for it be rendered as as an HTML List. -->
</ul>
```

<h4> Key Points to Note here: </h4>
  - <b>The name of the variable passed in render_template can be accessed by the HTML using Jinja2 Templating.</b>
  - To let the HTML know, that this is a python variable, use {{python_variable}}. 
  - For Loop: {% for x in python_variable %} {{x}} {% endfor %}
  - If: {% if x in y %} {{x}} {% endif %}

<br>

3. Run the `app.py` file:

```
py app.py
```

<br>

Voila, a fully functioning Web App where both the backend and frontend can communicate with each other easily is ready!
Visit localhost:5000, and input any information into the fields. 

Once you hit submit
  - You will see the data you passed being logged into the command prompt (via the print statements).
  - You will also be able to see that you receive, a rather bland but nevertheless relevant HTML webpage on your browser, which has parsed the backend variables with ease.

I encourage you to pass a dictionary {key:value} information, instead of a list and play around with it. See how you can render the info to HTML in that case.


<br><br>
<em>
Holy crap, it couldn't have been this simple! 
<h3>Well, IT IS!</h3>
</em>

To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).

