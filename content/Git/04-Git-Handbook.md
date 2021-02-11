---
title: Tips and references for Git
description:
date: "2020-12-22"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

<br />

###PURPOSE
There are times when you have to do something related to your version history, but you forget which command to use. This is Handy Guide for times like those.

# [Merging when Git says that the histories are unrelated](https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error)

Sometimes you might want to merge two repos from different sources, or you might have a situation where both your local and cloud have some commits for the same project in the initial stages.
In such cases, Git throws an error about unrelated histories.
To resolve the issue, type the following in your terminal:

```
git pull origin master --allow-unrelated-histories
```

# [Commit a portion instead of the whole file](https://filip-prochazka.com/blog/git-commit-only-parts-of-a-file)

There are times when you have made several changes in a file, but you only want to commit part of it at the moment.

You can stage your files using the -p (--patch) option:

```
git add -p <filename>
```

This will show you a comprehensive menu, where your changes will be divided into so called `hunks`

- Press `y` to commit current hunk
- Press `n` to ignore the current hunk
- Press `s` to split current hunk into smaller hunks
- Press `?` to know more about what each of the options does

If you use Vim, add the `fugitive` plugin

```
Plug 'tpope/vim-fugitive'  " git plugin
```

Then you can see the diff using `:Gdiff`.

Now, you can patch by copying contents from local pane to Git pane and saving.

You can use `do` (diff obtain) or `dp` (diff paste) for staging hunks.

# [Quick Fork HyperLink](https://stackoverflow.com/a/32460729/7048915)

Add the end of your Git Repo, just add /fork. (<git_repo_https_link>/fork)
Ex: https://github.com/ayushxx7/ayush-mandowara-blog/fork

# [Ignore all files in a folder, but not the folder itself](https://stackoverflow.com/a/4250082)

Ex: Assume that you want to ignore all files from `test` folder but keep the folder in tracking.

- First, in the `test` folder, add a `.gitkeep` file

  ```
  test
  │   .gitignore
  └─── test
      │   .gitkeep  <-- add this file
      │   ignore-this-file
      │   ignore-this-file-as-well
  ```

- In your `.gitignore` file, add the following:
  ```
  test/\*
  !test/.gitkeep
  ```
- Now commit the gitignore file.

The required tracking will be put in place.

# [Remove a branch from Git completely](https://stackoverflow.com/questions/5094293/git-remote-branch-deleted-but-still-it-appears-in-branch-a)

There will be times, where you created a branch just for a hotfix.
In such cases, when the hotfix is merged into master, you can delete the branch.
To completely remove the branch from local as well as remote, type in command prompt:

```
git branch –D branch-name #remove branch locally
git push origin :branch-name #remove branch from online repo
```

To pull changes on a different machine, where the branch is deleted:

```
git fetch -p
```

# [Push a file to GitHub but do not track it for changes](https://compiledsuccessfully.dev/git-skip-worktree/)

#### !NOTE! You should consider not using this method. Maybe there is something else you can do if you want to keep a static config file. Like, say, having a `config.prod` which is tracked and `config.dev` which is not tracked.

If you want to keep a file in it's original state in Git, i.e., you don't want to update it even if it changes, you can use the `--skip-worktree` flag

```
git update-index --skip-worktree <file_name>
```

# [Change the commit date of last commit](https://stackoverflow.com/a/5017265/7048915)

Suppose you wanted to change the date of the last commit to `December 25, 2019`.
You will look up the day in the calendar, (Wednesday in our case), and run the following command in your terminal:

```
git commit --amend --date="Wed Dec 25 16:00 2019 +0530"
```

This will set your commit date to Dec 25, 2019 with the time as 4PM (IST)
Pretty sweet hack if you want an all-green GitHub, no?

Further, you can also use the `interactive rebase` to make changes in earlier commits as well.

# [Stashing with Git](https://stackoverflow.com/a/15197232/7048915)

To store the current state of your work, so that you can take a pull of the latest changes from the remote repository,
you can use the `git stash` command.
It will remove all the current changes in your work tree and store it in a stash list.

You can view the stash list using `git stash list`

Many times, you stash your changes because you mostly want to discard all the changes, but sometimes,
you may actually want to reapply the changes once you have taken a pull from remote repo.
If you want to apply changes as soon as you stash and pull, you can go do so with `git stash pop`
However, there may be times when you want to keep the stash as it is, and take a look at it later on.
In such a case, it would be better to name your stash instead.
To do so, you can:

```
git stash push -m "name_of_the_stash"
```

You can then later view the stash with the aforementioned `list` command:

````
stash@{0}: On update_passmarks: cpu scraping stash
stash@{1}: WIP on update_passmarks: 8cb9b452 fix(passmarks): renamestash@{2}: WIP on update_passmarks: be334fb4 Merge branch 'update_passmarks' of https://github.com/bluestacks/automation into update_passmarks
stash@{3}: WIP on update_passmarks: 651e83ee Merge branch 'master' of https://github.com/bluestacks/automation into update_passmarks
stash@{4}: WIP on master: fff9583a Added Migration as jp , kr and tw will get approved automatically
stash@{5}: WIP on navbar_lightbox: f2d672e9 fix(img): navbar + lightbox compatibility
stash@{6}: WIP on master: ca85de4c feat(img): store docker settings as comment
stash@{7}: WIP on master: 143edced fix(img): approve all toast message```
````

Do note that stashes are not specific to branches.
Moreover, not naming the stash will store it in format such as this:

```
WIP on <branch_name>: <commit-hash> <commit-message>
```

While naming the stash will store it like:

```
On <branch_name>: <name of the stash you set using the -m flag>
```

## Get better at Git

#### [Every line of code is always documented](https://mislav.net/2014/02/hidden-documentation/)

#### [Getting more from Git](https://www.youtube.com/watch?v=FQ4IdcrOUz0)

#### [How to write a Git commit message](https://chris.beams.io/posts/git-commit/)

#### [Intentional Git commit message](https://stevetarver.github.io/2016/02/19/intentional-git-comments.html)

#### [Telling stories with your Git history](https://www.futurelearn.com/info/blog/telling-stories-with-your-git-history)

#### [How To Write a Good Commit Message](http://api.coala.io/en/latest/Developers/Writing_Good_Commits.html)
