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

## Step 1: [Optional] Creating a virtual environment for your project and installing the flask framework.

If you're on Windows, open command prompt and type:

```
py -m venv first_flask_app
cd first_flask_app/Scripts
./activate
```
Now you have activated your freshly created virtualenviornment.

2. Installing Flask framework using pip

```
# inside the venv
pip install flask
# if you have skipped the step of creating a virtual environment
py -m pip install flask
```

## Step 2: Creating a new project directory ("Hello-World-Flask") on your machine and creating basic app.

1. In you command prompt:

```
md Hello-World-Flask
cd Hello-World-Flask
gvim app.py
```

2. Inside the `app.py` file just created:

```
import Flask

app = Flask(__name__)

if __name__ == "__main__":
  app.run(debug=True)
```

3. Run the `app.py` file:

```
py app.py
```

Voila, you would seeing a message saying your server is running on localhost and port number (default is 5000 for python)
However, it does not do anything yet! Let's add the Hello World part now:

## Step 3: Making your Flask app do something

1. Open your `app.py` file and change the code to the following:

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

2. Run the app and visit localhost:portnumber on any browser in you machine (for ex: in the address bar, type localhost:5000).

The page would say:

```
Hello World!
```

Holy crap, it couldn't have been this simple! 
<h3>Well, IT IS!</h3>


Next Blog: How to configure your app to do some actual processing, and beautifying the webpage.


To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).


