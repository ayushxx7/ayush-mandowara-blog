---
title: Information Passing between your Frontend and Backend (PART TWO).
description: How to pass variables/data to and fro between flask and html.
date: "2020-07-21"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

## PURPOSE
### To pass dynamic information from the server to the front end. [Jinja Templating]

#### The Author assumes that you have read [PART ONE] of this blog and have basic understanding of integrating HTML with Flask.

# Sending Information from Flask Server to HTML.


## Python/Flask
```
# assuming your project structure looks like this:
flask_app
│   app.py <- open this file
└───templates
    │   index.html

gvim app.py
```

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

  # Generate a dict object that will be processed and rendered on the frontend
  about_info = {'name': name,
                'choice': choice,
                'reason': reason,
                'sum_first_second': sum_first_second
                }

  # Render an HTML Template, and pass the dict generated as a parameter

  return render_template('jinja_to_html.html', about_dict = about_info)

if __name__ == "__main__":
 app.run(debug=True)
```

## HTML
```
# assuming your project structure looks like this:
flask_app
│   app.py 
└───templates
    │   index.html
    │   about.html <- create and open this file

cd flask_app/templates
gvim index.html
```
### Create an `about.html` file in your `templates` directory
#### Add the following to it:

```
<h1> JINJA 101 </h1>

<!-- To access Python functions and variables in HTML
     You would use the Jinja Templating Syntax. 
     Here, we are using:
     1. Variables: {{variable}}
     2. For Loops: {% for key_name_of_your_choice in passed_variable_from_server %}

<br>
<b>The following Keys were received from the Server:</b>
<ul>
    {% for i in about_dict %}
    <li>{{i}}</li>
    {% endfor %}
</ul>
<b>Genrating a sentence from the information</b>
<hr>
<p>
    Hi, My name is <mark>{{about_dict['name']}}</mark>. I chose <em>{{about_dict['choice']}}</em> because
    <u>{{about_dict['reason']}}</u>.
</p>
<p>
    The machine says the sum of the numbers that I entered is <b>{{about_dict['sum_first_second']}}</b>, and I certainly
    agree
    with it!
</p>
```

<br>

#### Run the `app.py` file:

```
py app.py
```

- Now, visit `localhost:5000` on your browser, you will see the form just created in `index.html`
- Fill up the information and hit the submit button.
- Marvel at simple yet beautiful HTML you created.


# To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).
