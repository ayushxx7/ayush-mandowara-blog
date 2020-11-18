---
title: The power of Git Rebase
description:
date: "2020-11-12"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

## Introduction
Git, is the Version control system used by almost all the open-source (and many closed source) projects today. However, not everyone who uses Git, understands it's true potential. In fact, many people miss out on some of the core features due to which Git is such a popular choice among giant tech companies and nerdy-hackers alike.

To wit, one such feature would be the `interactive rebase` that Git provides.

[Rebasing with Git](https://www.youtube.com/watch?v=ElRzTuYln0M)
There may have been times when you thought, oh, I wish I could just move some fixes (such as typos) into the previous commit, maybe reordering the commits or deleting them all together. However, up until now, you just were in the habit of making the fixes and giving them a special commit instead.
Rebase can help with that.

Let's look at some of the options that rebase provides us.
Firstly, rebasing is essentially a form of rewriting history within Git. So, you would have a bunch of commits that you want to work upon and they can be referenced starting from the `HEAD` of the branch (i.e. the latest commit) till the commits you want to work upon.
To start an interactive rebase on the first 3 commits from `HEAD` you would type in your terminal
```
git rebase -i HEAD~3
```

Here, you will see a menu with a host of options.
```
pick 298c042 fix(Gvim): delete the vim way :muscle:
pick 5461769 feat(Git): rewriting history with Git rebase
pick 325fae6 feat(Git): :construction: rebase with git

# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

Let's go over some of them.
```
p (pick): this essentially means we want to use this commit as it is
r (reword): the commit message can be changed easily of the commit on which this operation is performed
f (fixup): join commits together
```

To reorder the commits, you can reorder them in the interactive window and it will refect when you save and quit (`:wq`).

Further, there might be times when you have merge conflicts, resolve them as you would normally would and commit it back.
Finally, force push so the rebase overrides the previous commits, `the history is rewriten` and the commits are exactly as you wanted them to be.
```
git push -f origin master
```


### Rewriting commit message
In case you want to rewrite the commit message for the most recent commit, using `amend`
```
git commit --amend
```
This will show a window with your most recent commit, and you can rewrite the message as needed.
If the default editor is vim, you would need to enter the `Insert` mode by hitting `i` and then make changes as required.
Once you are satisfied with the message, then use the `esc` key to move back to normal mode so that you can save and quit using `:wq`
That's it, your commit message is rewritten

In case you want to change the commit message for a commit that was made before the most recent one, the `HEAD` is no longer attached to that commit.
In that case, the easiest way to rewrite the commit message using the `reword` option in the `Interactive Rebase`.
Assuming that the commit message that you want to rewrite is 3 commits behind `HEAD` (`HEAD`->`most-recent-commit(#1)`->`#2`->`#3`)
First, enter rebase including the most recent 3 commits,
```
git rebase -i HEAD~3
```
You will see the commits in the reverse order.
```
pick 884e40a fix: remove pytube3
pick a7ddcca fix(ffmpeg): :exclamation: wrapper taking too long
pick e9036aa feat(run.bat): run in Admin mode by default
```
The top most commit will be the `#3` commit, or in other words, the commit that you want to operate upon.
Change the `pick` keyword with the `reword` keyword. You can also the shorthand version, i.e, `r` as well.
```
reword 884e40a fix: remove pytube3
pick a7ddcca fix(ffmpeg): :exclamation: wrapper taking too long
pick e9036aa feat(run.bat): run in Admin mode by default
```
Note: You will have to use vim keybindings explained to make the changes, save and quit.
Now, you will be shown a screen with the commit message on top
```
fix: remove pytube3

# Please enter the commit message for your changes. Lines starting
```
Change this to whatever is required, save and quit.
```
fix(requirements): remove pytube3

This library was interfering with the core library (`pytube`) and
YouTube videos were not being extracted. Removing this dependency using
`pip uninstall pytube3` fixed the issue.
Note: If it doesn't work
  - pip uninstall pytube3
  - pip uninstall pytube
  - pip install git+https://github.com/nficano/pytube

# Please enter the commit message for your changes. Lines starting
```
You would see a message such as `Successfully rebased and updated refs/head/master`

Now, if you were to do a `git status` or `git push`, you might see something like this:
```
Head: master
Push: origin/master

Unpulled from origin/master (3)
e9036aa feat(run.bat): run in Admin mode by default
a7ddcca fix(ffmpeg): :exclamation: wrapper taking too long
884e40a fix: remove pytube3

Unpushed to origin/master (3)
b802313 feat(run.bat): run in Admin mode by default
6e2da47 fix(ffmpeg): :exclamation: wrapper taking too long
3ea09ae fix(requirements): remove pytube3
```
Not to worry, all you need to do here is force push to master (or whichever branch you are operting on)
This is happening essentially because we have rewritten history (as can be seen from the commit hashes before and after rebase).
However, since we know that the current changes are what we want to show in Git, we will push these changes and override the original commits.
```
git push -f origin master
```

### Delete commit from history
In case you want to delete a commit (make it so it was never commited)
1. Find out (approximately) how far back is the commit from HEAD. Let's assume that number to be 10.
2. Open `interactive rebase`:
```
git rebase -i HEAD~10
```
You will see the last 10 commits in the reverse order.
```
pick ece4b89f feat(Robusta): Generate report and send mail
pick f75894be feat(Robusta): +install test case
pick 4da9b1dd feat(Robusta): move app installation to pagebase
pick 916a62f4 feat(Robusta): +initiate fixture +dl-install TCs
pick 06012a12 fix(Robusta): Play Store crashes on first launch
pick beba603c fix(Robusta): verify_player_launch
pick c85b27a1 fix(Robusta): url updated to latest
pick 7d97d783 Revert "fix(Robusta): url updated to latest"
pick 0ea8edff feat(Robusta): use email/pass from config
pick 2d8466da Uploaded to Already Uploaded For Months
pick a60b3592 feat(Robusta): use email/pass from config
pick e65b6531 feat(Robusta): App Launch Among US TC

# Rebase 5182efe3..0f330f45 onto 5182efe3 (12 commands)
```
Now, let's say that you want to remove the commits:
- `2d8466da` Uploaded to Already Uploaded For Months
- `a60b3592` feat(Robusta): use email/pass from config
Change the `pick` keyword with the `drop` (or `d`) keyword.
- Note: You can also comment out or delete the commits
```
pick ece4b89f feat(Robusta): Generate report and send mail
pick f75894be feat(Robusta): +install test case
pick 4da9b1dd feat(Robusta): move app installation to pagebase
pick 916a62f4 feat(Robusta): +initiate fixture +dl-install TCs
pick 06012a12 fix(Robusta): Play Store crashes on first launch
pick beba603c fix(Robusta): verify_player_launch
pick c85b27a1 fix(Robusta): url updated to latest
pick 7d97d783 Revert "fix(Robusta): url updated to latest"
pick 0ea8edff feat(Robusta): use email/pass from config
drop 2d8466da Uploaded to Already Uploaded For Months
d a60b3592 feat(Robusta): use email/pass from config
pick e65b6531 feat(Robusta): App Launch Among US TC

# Rebase 5182efe3..0f330f45 onto 5182efe3 (12 commands)
```
Once required changes have been made, save and quit (`:wq`)
You would see a message such as `Successfully rebased and updated refs/head/robusta-dev`
- Note: you might have to fix merge conflicts if new commits depended on the deleted ones in some way.

Now, if you were to do a `git status` or `git push`, you might see something like this:
```
Head: robusta-dev
Merge: origin/robusta-dev

Unpulled from origin/robusta-dev (5)
e65b6531 feat(Robusta): App Launch Among US TC
a60b3592 feat(Robusta): use email/pass from config
1b9cde13 Merge branch 'robusta-dev' of https://github.com/repo-full-path into robusta-dev
9b2042e3 Merge branch 'robusta-dev' of https://github.com/bluestacks/repo-full-path into robusta-dev
2d8466da Uploaded to Already Uploaded For Months

Unpushed to origin/robusta-dev (2)
e26ec27a feat(Robusta): App Launch Among US TC
0ea8edff feat(Robusta): use email/pass from config
```
Not to worry, all you need to do here is force push to branch (or whichever branch you are operting on)
This is happening essentially because we have rewritten history (as can be seen from the commit hashes before and after rebase).
However, since we know that the current changes are what we want to show in Git, we will push these changes and override the original commits.
```
git push -f origin robusta-dev
```
