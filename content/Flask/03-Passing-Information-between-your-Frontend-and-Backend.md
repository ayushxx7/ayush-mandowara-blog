---
title: Information Passing between your Frontend and Backend.
description: How to pass variables/data to and fro between flask and html.
date: "2020-07-11"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

<h2> PURPOSE </h2>
<h3>To pass dynamic information from your server to your front end and vice-versa</h3>

<h4>The Author assumes that you have read this blog [02] and have basic understanding of integrating HTML with Flask.</h4>

## Topic 1: Sending Information from Frontend HTML to your Python Server Script.

1. Creating a basic form in HTML, that triggers an endpoint when submitted. 

```
# assuming your project root is called 'flask app', and has a 'templates/index.html' file in it.
cd flask_app/templates
gvim index.html
```

- Modify your index.html so that it contains a basic form:

```
<h1> Hello World! </h1>
<h2> Made with <3 and Python </h2>
    <em>by <b>Ayush Mandowara</b></em>
    <!-- enter your name instead of mine! -->

    <div>
      <div class="container text-left">
        <h3> Suite Runner </h3>
        <form id="my_form" action="/run" method="post">
          <!-- /run is the endpoint that will be triggered on form submission -->
          
          <!-- The "name" attribute is "key" for getting the form information from HTML to Python -->
          <div class="form-group">
            <label for="Suite">Choose a Suite:</label>
            <select id="suite" name="suite">
              <option value="regression">Regression</option>
              <option value="html_home">HTML Home Page</option>
            </select>
          </div>
          <div class="form-group">
            <h3>Build URL:
              <input type="text" name="build_url" placeholder="Enter Build URL" size="100"></input>
            </h3>
            <h3>Host URL:
              <input type="text" name="host_url" placeholder="Leave Empty for Production" size="100"></input>
            </h3>
            <br><br>
          </div>
          <div class="form-group">
            <button type="submit" value="Run" class="btn" name="submit_button">Run Suite</button>
          </div>
        </form>
      </div>
    </div>

```

2. Modify your main `app.py` file like so:  

```
from flask import Flask, render_template, request # importing request to fetch info from form

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html') 

# This function will be triggered as the form action is set to /run in the HTML file.
# Flask simply provides us a decaorator to make it easy for us to trigger specific functions.
# Note: The name of the function doesn't matter in this context.

@app.route('/run', methods=['POST']) # specificying POST is important, else you will get 'Method not allowed' error.
def run_suite_util():

  suite_name = request.form['suite'] # accessing variables from your form elements.
  build_url = request.form['build_url'] # notice, we are using the "name" attribute to access the values.
  host_url = request.form['host_url']

  print('The Suite that is going to be triggered is:',suite_name)
  print('The Suite that is going to be triggered is:',build_url)
  print('The Suite that is going to be triggered is:',host_url)

  return f"{suite_name} triggered successfully, with Build URL: {build_url} and Host URL: {host_url}"


if __name__ == "__main__":
 app.run(debug=True)
```

<h4> Key Points to Note here: </h4>
  - <b>The name of the endpoint in your server should be same as the name of the action in the HTML.</b>
  - The name of the function that is being decorated as an endpoint is irrelavant.
  - <b>Since we are submitting (POSTing) the data from the HTML, we need to notify our endpoint that the method should support POST requests.</b>

<br>

4. Run the `app.py` file:

```
py app.py
```

<br>

Voila, a fully functioning Web App that receives information from the HTML and processes it in the backend has been created.
Visit localhost:5000, and input any information into the fields. 

Once you hit submit
  - You will see the data you passed being logged into the command prompt (via the print statements).
  - You will also be able to see that you receive, a rather bland but nevertheless relevant HTML response on your browser (via the return statement).

As you know from the previous [02] blog, this reponse can be rendered as an HTML as well.


<br><br>
<em>
Holy crap, it couldn't have been this simple! 
<h3>Well, IT IS!</h3>
<h6> Let's move to the next topic, to finish this easy but useful lesson </h6>
</em>



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

