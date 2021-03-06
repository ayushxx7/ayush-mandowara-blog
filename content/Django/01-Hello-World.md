---
title: Hello World Basic Django App
description: The starting point of creating any Django based application in the easiest way possible.
date: "2020-08-12"
image: "django.png"
author: "Ayush"
tags: ["django"]
---

## PURPOSE

### To create a Web App that focuses on scalabality & securtiy, "Django" is the go to framework in Python. It's a feature rich solution that enforces best practices from the ground up.

#### The Author assumes that you have some basic understanding of working with Python 3.

### Step 0: [Optional] Creating a virtual environment and activating it.

If you're on Windows, open command prompt and type:

```
py -m venv django_env
cd django_env/Scripts
./activate
```

## Step 1. Initial Setup:

#### Installing Django framework using pip

```
# inside the venv
pip install django
# if you have skipped the step of creating a virtual environment
py -m pip install django
```

#### Creating a new project

```
md Hello-World-Django
cd Hello-World-Django
djangoadmin startproject learning_django
py manage.py runserver
```

- Take a look at your project directory. Why so many files, I wonder?
- Visit `localhost:8000` on your browser. Oh look, it's Django, saying hello to you!

#### Creating an app inside the project

```
djangoadmin startapp first_app
```

- Take a look at your directory structure again. Wonderful, isn't it? Confusing, but wonderful!

## Step 2: Let's some write code:

#### Open your project in ~~your favorite text editor~~ Vim!

```
gvim .
```

### Inside your `first_app` folder, you will see a `views.py` file

```
Hello-World-Django
│
└───learning_django
    │
    └───learning_django
    └───first_app
    │   admin.py
    │   models.py
    │   views.py <- Open this file.
```

#### Open it, and modify the code so it looks like this:

```
from django.http import HttpResponse # simple html response. no templates.

# in flask, you would use @app.route decorator here.
# in django, we keep the route/url path in a separate file called "urls.py"
def index(request): # our first view/function that will have some logic.
    # this is where you would write some operational logic like
    # split_text = some_text_to_split.split(',')
    # for now, we will just return Hello World, without any additional processing.

    return HttpResponse("Hello, world. You're at the first_app index.")
```

- The comments can be ommited, they are for explanatory purposes only.

### Create & Open `first_app\urls.py`

```
Hello-World-Django
│
└───learning_django
    │
    └───learning_django
    └───first_app
    │   admin.py
    │   models.py
    │   views.py
    │   urls.py <- create this file and open it.
```

#### Add the following to it:

```
from django.urls import path # standard django function for defining url paths

from . import views # importing the views.py file that we just modified.

urlpatterns = [
    path('', views.index, name='index'),
    # !IMPORTANT: We are importing and serving the index function at /first_app endpoint.
    # in flask, you would just add the path like @app.route('/first_app') in your function.
    # to replicate the same behavior.
]
```

## We must add `first_app` app's urls to our `learning_django` app's `urls.py` file

### Open `learning_django\urls.py`:

```
Hello-World-Django
│
└───learning_django
    │
    └───learning_django
    │   asgi.py
    │   settings.py
    │   urls.py <- Open this file.
    └───first_app
```

#### Modify it to:

```
from django.contrib import admin # for the admin routes
from django.urls import include, path # include is used to include paths from other apps.

urlpatterns = [
    path('first_app/', include('first_app.urls')),
    # we are serving this app's endpoints at /first_app
    path('admin/', admin.site.urls),
]
```

- A separate `urls` file for each app adds clarity.
- We can scan through all the `urls` files to know what all endpoints are there
- To understand the routes, we don't need to view the internal logic (i.e. views) and vice-versa.
- It is also easier to mantain and update paths this way.

### Open `learning_django\settings.py`

```
Hello-World-Django
│
└───learning_django
    │
    └───learning_django
    │   asgi.py
    │   settings.py <- Open this file.
    │   urls.py
    └───first_app
```

#### Add `first_app` to your installed apps:

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'first_app' # Add your app name here.
]
```

## Step 3: Now, run the server again and visit `localhost:8000\first_app`

```
py manage.py runserver
```

- You would be greeted with the `Hello World` message that you wrote in your views.

# Voila! You have successfully hosted a Django Web App on your local machine and served your own response on an endpoint!
