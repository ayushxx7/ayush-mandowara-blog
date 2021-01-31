---
title: Hello World Basic Flask App
description: The starting point of creating any flask based application in the easiest way possible.
date: "2020-07-09"
image: "flask.png"
author: "Ayush"
tags: ["flask"]
---

```toc
# This code block gets replaced with the TOC
```

## PURPOSE

### To start hosting your Python Apps on a Webserver, you would first need to deploy it locally.

### The starting point of any such project, is to create a basic web server, and host your app on your machine's localhost (127.0.0.1).

### This article is intended to be a Hello World project for such a use case

#### The Author assumes that you have some basic understanding of working with Python 3.

## Step 0: [Optional] Creating a virtual environment

#### If you're on Windows, open command prompt and type:

```
py -m venv first_flask_app
cd first_flask_app/Scripts
./activate
```

## Step 1: INITIAL SETUP

#### Installing Flask framework using pip

```
# inside the venv
pip install flask
# if you have skipped the step of creating a virtual environment
py -m pip install flask
```

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

- Your command prompt will be telling you that a server is up and running on `port 5000`

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

- That's about it, just visit `localhost:5000` on your browser

```
Hello World!
```

- And bask in the glory of your simple yet powerful creation.

Next Blog: [How to Serve HTML Pages using Flask](https://ayush-blog.netlify.app/Flask/02-Basic-HTML-Integration-with-Flask/)
