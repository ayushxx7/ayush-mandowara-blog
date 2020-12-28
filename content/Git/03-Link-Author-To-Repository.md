---
title: How to Assign a specific Author for a specific repository.
description: If you have multiple accounts on your machine, chances are you end up making commits from the wrong author in a repository. To avoid that read on.
date: "2020-07-04"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

### PURPOSE

If you have multiple accounts on your machine, chances are you end up making commits from the wrong author in a repository.
To avoid having to change it afterwards, which is possible (Read: 02-How-to-Change-Author), follow these simple steps.

1. Open Terminal.

2. Change the current working directory to your local project.

Note: Make sure you are in the root directory, i.e., the directory containing [.git] folder.

3. Open the <b>.git\config</b> file of the repository.

```
gvim .git\config
```

4. Enter the following:

```
[user]
        name = <your name as on GitHub>
        email = <your email id used on Git>
        username = <your git username>
```

5. Optionally, you can also modify Remote URL for a branch like so:

```
[remote "origin"]
	url = https://user_name:password@github.com/ayushxx7/ayush-mandowara-blog
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

Note: Notice, the url field has additional git username:git password followed by @ symbol.

This helps skip the prompt for Sign In even if you don't have credentials configured properly. Of course, you need to make sure that the username you are going to type in the above URL, has Edit rights.

6. Hit Save and you're done.

#### Some Points to Note about the config file changes </h4>

- It is mandatory to add the [user] block for this to work. The <b>"email"</b> is the unique indentifier for the commit author in the repo. However, ensure to use the correct "username" and "name" for the changes to reflect properly.
- Adding a URL like shared in the above file will help in never having to enter credentials for Git again. However, at the same time, this is not very safe, and you should only do this if it's your personal machine. Your credentials are basically being stored in the repo as plain text.

### CREDITS

[StackOverflow Answer](https://stackoverflow.com/a/55096250/7048915)

