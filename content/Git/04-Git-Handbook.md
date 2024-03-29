---
title: Tips and references for Git
description:
date: "2021-08-06"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

<br />

# PURPOSE
There are times when you have to do something related to your version history, but you forget which command to use. This is Handy Guide for times like those.

## [Merging when Git says that the histories are unrelated](https://www.educative.io/edpresso/the-fatal-refusing-to-merge-unrelated-histories-git-error)

Sometimes you might want to merge two repositories from different sources, or you might have a situation where both your local and cloud have some commits for the same project in the initial stages.
In such cases, Git throws an error about unrelated histories.
To resolve the issue, type the following in your terminal:

```
git pull origin master --allow-unrelated-histories
```

## [Commit a portion instead of the whole file](https://filip-prochazka.com/blog/git-commit-only-parts-of-a-file)

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

Then you can see the diff using `:Gdiff`, or by pressing `dd` on any file in the status window (invoked by `:Gstatus`)

Now, you can patch by copying contents from local pane to Git pane and saving.

You can use `do` (diff obtain) or `dp` (diff paste) for staging hunks.

## [Quick Fork Hyper Link](https://stackoverflow.com/a/32460729/7048915)

Add the end of your Git Repository, just add /fork. (<git_repo_https_link>/fork)
Ex: https://github.com/ayushxx7/ayush-mandowara-blog/fork

## [Ignore all files in a folder, but not the folder itself](https://stackoverflow.com/a/4250082)

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
- Now commit the `.gitignore` file.

The required tracking will be put in place.

## [Remove a branch from Git completely](https://stackoverflow.com/questions/5094293/git-remote-branch-deleted-but-still-it-appears-in-branch-a)

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

## [Push a file to GitHub but do not track it for changes](https://compiledsuccessfully.dev/git-skip-worktree/)

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

> Take a look at [Rebasing with Git](../07-Rebasing-with-Git)

## [Stashing with Git](https://stackoverflow.com/a/15197232/7048915)

To store the current state of your work, so that you can take a pull of the latest changes from the remote repository,
you can use the `git stash` command.
It will remove all the current changes in your work tree and store it in a stash list.

You can view the stash list using `git stash list`

Many times, you stash your changes because you mostly want to discard all the changes, but sometimes,
you may actually want to reapply the changes once you have taken a pull from remote repository.
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

## Always pull with rebase

It is generally good idea to pull with the `rebase` flag,

```
git pull --rebase
```

As this will avoid the unnecessary `merge` commit that always ends up being part of the git history whenever you pull from remote repository.

You can also set the default behaviour of Git such that it automatically does that for you.
Run this command in your terminal within the git repository you want to set this for:

```
git config --global pull.rebase true
```

## Identify if you Commit Title is correct

As a rule of thumb, you can see if your commit messages fits in the following sentence:

```
If applied, this commit will <your subject line here>
```

## [Extract commits after a specific date](https://stackoverflow.com/questions/37311494/how-to-get-git-to-show-commits-in-a-specified-date-range-for-author-date)

If you want to see commits after a certain date:

```
git log --oneline --after="2021-02-23"
```

## [Remove Untracked files](https://koukia.ca/how-to-remove-local-untracked-files-from-the-current-git-branch-571c6ce9b6b1)

To remove/delete untracked files from your local repository, we can use `git clean`
First, check what will be removed

```
git clean -n #files
git clean -nd #directory
```

Once sure, run

```
git clean -f #remove files
git clean -fd #remove directory
git clean -fX #removed ignored files
git clean -fx #remove ignored and untracked files
```

Do note that the title is always supposed be in imperative speech.

## Resolving another process is running

Suppose that you are trying to commit a file in git, but you face the error:
```
another git process is already running
```
First, close all active command prompts.  
Then, go to the root folder of the repository.  
Suppose that your repository is cloned at `C:\automation`  

In you command prompt:
```
cd C:\automation
cd .git #.git folder is present in root of repo
ls -al #show all files (including hidden)
# check if index.lock is present
rm index.lock
```

This should solve the problem.

## [Unable to merge branch due to untracked files](https://stackoverflow.com/a/51177844/7048915)
- To `git merge` while overwriting untracked files
- The files of interest (`FOI`) that we are going to remove:
  1. exist in the upstream repository,
  1. do not exist in the current branch,
  1. and are blocking the merge because they are present and untracked in your working directory.
```
git checkout -f donor-branch   # replace FOI with tracked `donor` versions
git checkout receiving-branch  # FOI are not in `receiving`, so they disapppear
git merge donor-branch  # now the merge works
```

## [Undo an amend](https://stackoverflow.com/questions/38001038/how-to-undo-a-git-commit-amend)
To get back to previous state before amending your commit:
```
git reset --soft @{1}
```

## Commits are missing from Local Repository
Sometimes, due to merges & rebases, older commits which are part of cloud repo, get removed from the local repo.
The best way to get those commits back is:

Before performing any steps,
- Make sure that there are no commits in local repo that are not part of cloud repo
    - If there are such commits, create a separate branch and cherry-pick those commits in that branch for recovery later

- Step 1: `hard reset` your local branch back by some large number of commits:
    ```
    git reset --hard HEAD~100
    ```

- Step 2: fetch changes from cloud repo using git pull
    ```
    git pull
    ```

You will see all commits (including the missing ones), are present in your local repository now.

## [Show what a stash contains without applying it](https://stackoverflow.com/questions/10725729/see-whats-in-a-stash-without-applying-it)
First, look the stash number using: 
```
git stash list
```

```
stash@{0}: WIP on thinvirt_fix: a0ad7550 feat(robusta): default shared mem should be >0
stash@{1}: WIP on thinvirt_fix: a0ad7550 feat(robusta): default shared mem should be >0
stash@{2}: WIP on sanity: 7df37924 WIP
stash@{3}: WIP on sanity: 0283067e feat(robusta):TC adb should be disabled by default
stash@{4}: WIP on sanity: 0283067e feat(robusta):TC adb should be disabled by default
stash@{5}: WIP on robusta-dev: 4240cd37 Merge branch 'master' into robusta-dev
stash@{6}: WIP on RP_tool_integration: 3d5ff6c2 fix(chatbot): Report Problem tool trigger
stash@{7}: WIP on RP_tool_integration: 3d5ff6c2 fix(chatbot): Report Problem tool trigger
```

Then, locate the stash you want. Suppose it is the second stash in the list. 
Then, we can identify the stash like so: `stash@{1}`

To view the contents of the stash without applying it:
```
git stash show stash@{1} -p
```

Note: if you are using powershell, see [this](https://stackoverflow.com/a/43386603/7048915).


## [Drop a stash](https://stackoverflow.com/questions/5737002/how-to-delete-a-stash-created-with-git-stash-create)

To delete the topmost stash:
```
git stash drop 
```

To delete a specific stash, say 'n':
```
git stash drop stash@{n}
```

## GitHub pull request showing commits that are already in target branch
If commits from base branch are visible in the pull request you can do the following:
```
git fetch origin
git checkout feature-01
git rebase origin/<base_branch_name>
git push --force
```
See [this question on StackOverflow](https://stackoverflow.com/questions/16306012/github-pull-request-showing-commits-that-are-already-in-target-branch) for more solutions.

# References
- [Every line of code is always documented](https://mislav.net/2014/02/hidden-documentation/)
- [Getting more from Git](https://www.youtube.com/watch?v=FQ4IdcrOUz0)
- [How to write a Git commit message](https://chris.beams.io/posts/git-commit/)
- [Intentional Git commit message](https://stevetarver.github.io/2016/02/19/intentional-git-comments.html)
- [Telling stories with your Git history](https://www.futurelearn.com/info/blog/telling-stories-with-your-git-history)
- [How To Write a Good Commit Message](http://api.coala.io/en/latest/Developers/Writing_Good_Commits.html)
- https://www.designcise.com/web/tutorial/how-to-apply-git-stash-to-a-different-branch#apply-stashed-changes-to-a-new-branch
