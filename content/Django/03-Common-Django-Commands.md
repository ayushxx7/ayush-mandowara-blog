---
title: Common Django Commands
description:
date: "2021-01-07"
image: "django.png"
author: "Ayush"
tags: ["django"]
---

# Create Super User

If you delete your database, you won't be able to login back.
Just recreate your superuser

```
py manage.py createsuper
```

# Migrations

To convert your models to Database Tables, you need to create and apply migrations.

This will create the required migrations

```
py manage.py makemigrations
```

This will apply the created migrations

```
py manage.py migrate
```

# Running the Server

You can run the server using:

```
py manage.py runserver
```

