---
title: Integrating HTML Pages with Flask 
description: Step two of creating your own web app 
date: "2020-07-10"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

<h2> PURPOSE </h2>
<h3>Understanding how to Render HTML Pages on a Flask based Web App</h3>

<h4>The Author assumes that you have read this blog [01] or have basic understanding of Flask, and HTML.</h4>

## Step 1: Setting up Flask to Render HTML. 

1. Create a `templates\` directory in your Project Root.

```
# assuming your project root is called 'flask app'.
cd flask_app/
md templates
```

2. Assuming your flask app is called `app.py`, and contains the following:

```
from flask import Flask

app = Flask(__name__)

# Adding your first endpoint

@app.route('/')
def index():
  return 'Hello World!'


if __name__ == "__main__":
  app.run(debug=True)
```

- Modify the file to:

```
from flask import Flask, render_template # adding template support

app = Flask(__name__)

# rendering HTML template

@app.route('/')
def index():
  return render_template('index.html') 
  # instead of rendering plain text, we are rendering a proper HTML page now.

if __name__ == "__main__":
  app.run(debug=True)
```

3. Add `index.html` in your `templates` directory and add the following code to it:

```
<h1> Hello World! </h1>
<h2> Made with <3 and Python </h2>
<em>by <b>Ayush Mandowara</b></em>
<!-- enter your name instead of mine! -->
```

4. Run the `app.py` file:

```
py app.py
```

Voila, you have successfully created a web app, and are able to render actual HTML instead of plain old text. 
Visit localhost:5000 to bask in the glory of your simple yet powerful creation!

Holy crap, it couldn't have been this simple! 
<h3>Well, IT IS!</h3>

Next Blog: How to add some sassiness to your webpage.


To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).


