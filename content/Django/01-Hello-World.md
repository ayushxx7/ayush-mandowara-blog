---
title: Hello World Basic Django App
description: The starting point of creating any Django based application in the easiest way possible.
date: "2020-08-12"
image: "django.png"
author: "Ayush"
tags: ["django"]
---

<h2> PURPOSE </h2>
<h3>To create a full fledged Web App with a strong backend core, that provides a lot of features out of the box, and takes care of securtiy from the ground "Django" is the go to choice. It's built for scalability & essentially forces you to follow best practices.</h3>

<h4>The Author assumes that you have some basic understanding of working with Python 3.</h4>

Step 0: [Optional] Creating a virtual environment for your project and installing the django framework.

If you're on Windows, open command prompt and type:

```
py -m venv django_env
cd django_env/Scripts
./activate
```
Now you have activated your freshly created virtualenviornment.

1. Installing Flask framework using pip

```
# inside the venv
pip install django
# if you have skipped the step of creating a virtual environment
py -m pip install django
```

## Step 2: Creating a new project directory ("Hello-World-Flask") on your machine and creating basic app.

2. In you command prompt:

```
md Hello-World-Django
cd Hello-World-Django
djangoadmin startproject learning_django
py manage.py runserver
```

- See the directory structure, you will see a bunch of files. We will discuss them as well proceed.
- Now visit `localhost:8000`, Django will let you know that your project has been setup.

3. Now back to your command prompt to create your first app:

```
djangoadmin startapp first_app
```
- You will see that a subdirectory by name of `first_app` was created inside the `learning_django` folder.

4. Open your project in your favorite text editor. 

```
gvim .
```

5. Inside your `first_app` folder, you will see a `views.py` file. Modify it like so:

```
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the first_app index.")
```

- Views are like a parent file, where all your scripting will happen. 
- To compare it with `flask`, this is where you would write your `@decorated` functions.
- To map the `views` a.ka. `functions` we need to create a `urls.py` file inside the `first_app` directory, and add a mapping for it.


6. Create & Open `first_app\urls.py` and add:
```
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

- Now, to complete the mapping, we have to add this apps 'urls' to our main app `learning_django`'s URLs.

7. Open `learning_django\urls.py` and add:
```
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('first_app/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```

8. Open your `learning_django\settings.py` and add `first_app` to your installed apps:

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'first_app'
]
```

9. Now, run the server again and visit localhost:8000\first_app
```
py manage.py runserver
```
- You would see that the page is returning whatever you wrote in the views.py index function.

# Voila! You have successfully hosted a Django Web App on your local machine and served your own response on an endpoint!

- Next Blog: Integrating the App with a DB.

To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).

