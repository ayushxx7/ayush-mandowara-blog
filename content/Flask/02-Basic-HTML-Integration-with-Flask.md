---
title: Integrating HTML Pages with Flask 
description: Step two of creating your own web app 
date: "2020-07-10"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

## PURPOSE
### Understanding how to Render HTML Pages on a Flask based Web App

#### The Author assumes that you have read this blog [01] or have basic understanding of Flask, and HTML.

### Step 1: Creating a templates directory, where your HTML files will be placed
#### Create a `templates\` directory in your Project Root.
```
# assuming your project root is called 'flask_app' & app name is 'app.py'
flask_app
│   app.py 
└───templates <- create this folder
    │   index.html <- create this file
```

```
cd flask_app/
md templates
cd templates
gvim index.html
```

### Step 2: Let's write a simple HTML Page
#### In your `index.html` present in your `templates` directory, add the following code:
```
<h1> Hello World! </h1>
<h2> Made with <3 and Python </h2>
<em>by <b>Ayush Mandowara</b></em>
<!-- enter your name instead of mine! -->
```

### Step 3: Let's render the HTML Page just created through Flask
#### If you followed the previous tutorial, your `app.py` file looks something like this:
```
from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
  return 'Hello World!'


if __name__ == "__main__":
  app.run(debug=True)
```

#### Modify the file to:
```
from flask import Flask, render_template # adding template support

app = Flask(__name__)

# rendering HTML template

@app.route('/')
def index():
  return render_template('index.html') # pass the name of the HTML file you created.

if __name__ == "__main__":
  app.run(debug=True)
```


### Run the `app.py` file:
```
py app.py
```
- That's about it, just visit `localhost:5000` on your browser, and say hello to the first of many pages you will serve using this technique.

Next Blog: How to render Dynamic Data to your webpage.


# To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).
