---
title: Hello World Basic Flask App
description: The starting point of creating any flask based application in the easiest way possible.
date: "2020-07-09"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

<h2> PURPOSE </h2>
<h3> To start hosting your Python Apps on a Webserver, you would first need to deploy it locally. 
The starting point of any such project, is to create a basic web server, and host your app on your machine's localhost (127.0.0.1).
This article is intended to be a Hello World project for such a use case </h3>

<h4>The Author assumes that you have some basic understanding of working with Python 3.</h4>

## Step 0: [Optional] Creating a virtual environment

#### If you're on Windows, open command prompt and type:
```
py -m venv first_flask_app
cd first_flask_app/Scripts
./activate
```

#### Installing Flask framework using pip
```
# inside the venv
pip install flask
# if you have skipped the step of creating a virtual environment
py -m pip install flask
```

## Step 1: INITIAL SETUP

#### Create a new project directory, and open a file named `app.py` inside it.
```
md Hello-World-Flask
cd Hello-World-Flask
gvim app.py
```

## Step 2: CODING YOUR FIRST FLASK APP

#### Add the following to the `app.py` file:
```
from flask import Flask # importing the Flask module from the framework. 

app = Flask(__name__) # initializing an app

if __name__ == "__main__":
  app.run(debug=True) # running the server when the file is called directly.
```

#### Run the `app.py` file.
```
py app.py
```
- Flask would be telling that the server is running `port 5000`

### Let's Serve our First Web Page.

#### Modify your `app.py` file like so:

```
from flask import Flask

app = Flask(__name__)

# Adding your first endpoint
# the @decorator app.route can take multiple arguments.
# for now, we will just past the path at which we want to serve our page.
@app.route('/') # serving at localhost:5000/ (localhost:5000)
def index():
  # whenever we visit the endpoint, `index` function will be called.
  return 'Hello World!' # just returning a plain string for now.

if __name__ == "__main__":
  app.run(debug=True)
```

2. Run the app and visit localhost:portnumber on any browser in you machine (for ex: in the address bar, type localhost:5000).

The page would say:

```
Hello World!
```

Holy crap, it couldn't have been this simple! 
<h3>Well, IT IS!</h3>


Next Blog: How to configure your app to do some actual processing, and beautifying the webpage.


To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).


