---
title: Docker Basics on Windows
description: The starting point of creating any docker project in the easiest way possible.
date: "2020-07-25"
image: "docker.png"
author: "Ayush"
tags: ["docker"]
---

<h2> PURPOSE </h2>
<h3> To start hosting your Apps using Docker.
This article is intended to be a Hello World project for such a use case </h3>

<h4>The Author assumes that you have some basic understanding of working on Windows Machine (familiar with Command Line).</h4>

## Step 1: Create a Docker Engine VM.

Open 'cmd' and type:

```
docker-machine create box
```

This will take a while, get up from your seat and take a walk. Maybe think about how beautiful the world is?

2.  To connect the current instance of 'cmd' to the VM created in point #1.

```
docker-machine env box
@FOR /f “tokens=*” %i IN (‘docker-machine env box’) DO @%i
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
from flask import Flask

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
