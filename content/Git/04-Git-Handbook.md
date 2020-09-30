---
title: Tips and references for Git
description:
date: "2020-09-17"
image: git.png
author: "Ayush"
tags: ["git"]
---

<br />

###PURPOSE
There are times when you have to do something related to your version history, but you forget which command to use. This is Handy Guide for times like those.

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

If you use Vim, add the `fugitive` plugin
Plug 'tpope/vim-commentary' " to quickly comment and uncomment statements.

Then you can see the diff using `:Gdiff`. Now, you can patch by copying contents from local pane to Git pane and saving.
```

# [Quick Fork HyperLink](https://stackoverflow.com/a/32460729/7048915)
```
# Add the end of your Git Repo, just add /fork.
Ex: https://github.com/ayushxx7/ayush-mandowara-blog/fork
```

# [Ignore all files in a folder, but not the folder itself](https://stackoverflow.com/a/4250082)
```
Ex: Assume that you want to ignore all files from `test` folder but keep the folder in tracking.
In your `.gitignore` file, add the following:
- First, in the `test` folder, add a `.gitkeep` file
- Next in your `.gitignore` add:
test/*
!test/.gitkeep
- Now commit the gitignore file. The required tracking will be put in place.
```
# [Remove a branch from Git completely](https://stackoverflow.com/questions/5094293/git-remote-branch-deleted-but-still-it-appears-in-branch-a)
```
There will be times, where you created a branch just for a hotfix.
In such cases, when the hotfix is merged into master, you can delete the branch.
To completely remove the branch from local as well as remote, type in command prompt:

git branch –D branch-name #remove branch locally
git push origin :branch-name #remove branch from online repo

To pull changes on a different machine, where the branch is deleted:
git fetch -p
```

### Further Reading
#### [Every line of code is always documented](https://mislav.net/2014/02/hidden-documentation/)
#### [Getting more from Git](https://www.youtube.com/watch?v=FQ4IdcrOUz0)
#### [How to write a Git commit message](https://chris.beams.io/posts/git-commit/)
#### [Intentional Git commit message](https://stevetarver.github.io/2016/02/19/intentional-git-comments.html)
#### [Telling stories with your Git history](https://www.futurelearn.com/info/blog/telling-stories-with-your-git-history)
