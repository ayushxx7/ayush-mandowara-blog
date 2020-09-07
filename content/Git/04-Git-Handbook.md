---
title: Common but hard to remember Git Commands.
description:
date: "2020-08-12"
image: git.png
author: "Ayush"
tags: ["git"]
---

<br />

<h3>PURPOSE</h3>
There are times when you have to do something related to your version history, but you forget which command to use. This is Handy Guide for times like those. 


# [Revert last commit](https://stackoverflow.com/a/2846154/7048915)
```
# to uncommit but keep the changes intact
git reset --soft HEAD^
# to uncommit and remove the changes from the file as well
git reset --hard HEAD^
```

# [Revert to a Commit](https://stackoverflow.com/a/21718540/7048915)

```
# To see what commit you want to revert to, first check all the commits.
git log 
# once you have a commit hash, let's say 0123456

git revert --no-commit 0123456..HEAD
git commit -m "some relevant message to why you reverted to this one. since you are essentially rewriting history"
```

# [Merging when Git says that the histories are unrelated](https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error)
```
# Sometimes you might want to merge two repos from different sources, or you might have a situation where both your local and cloud have some commits for the same project in the initial stages.
# In such cases, Git throws an error about unrelated histories.

git pull origin master --allow-unrelated-histories
```

# [Commit a portion instead of the whole file](https://filip-prochazka.com/blog/git-commit-only-parts-of-a-file)
```
# There are times when you have made several changes in a file, but you only want to commit part of it at the moment.
git add -p <filename>
# This will show you a comprehensive menu, where your changes will be divided into so called `hunks`
# if you want to commit a specific hunk, press `y`, else press `n`
# To split the changes into even smaller hunks, press `s`
# Press `?` to know what each option does
```

# [Playing Detective](https://vimeo.com/280579162)
```
# There are times when you need to figure out exactly who made the changes in a file
# Sometimes, the standard `git log` command will suffice, but there are times when 
# you need to dig deeper and find out why was a change made? 

# To check who changed what line in a file and when, use:
git blame <filename>
# This will show you who made the last change in a file, when and with what commit.

# To search for a string, like a function name, in your entire git commit history:
git log -S "search_string"
# This will show a complete history of when this line was introduced, along with 
# every time it was changed, who changed it and with what commit hash.

# Once you have a commit hash, you can use:
git diff <commit_hash>
# to learn what all changes were part of the commit history.
```

### Further Reading
#### [Every line of code is always documented](https://mislav.net/2014/02/hidden-documentation/)
#### [Getting more from Git](https://www.youtube.com/watch?v=FQ4IdcrOUz0)
#### [How to write a Git commit message](https://chris.beams.io/posts/git-commit/)
#### [Intentional Git commit message](https://stevetarver.github.io/2016/02/19/intentional-git-comments.html)
#### [Telling stories with your Git history](https://www.futurelearn.com/info/blog/telling-stories-with-your-git-history)


# To thank the author, give a star to [this repo](https://github.com/ayushxx7/ayush-mandowara-blog).
