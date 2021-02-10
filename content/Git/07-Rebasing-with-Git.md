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

## [Rebasing with Git](https://www.youtube.com/watch?v=ElRzTuYln0M)

There may have been times when you thought, oh, I wish I could just move some fixes (such as typos) into the previous commit, maybe reordering the commits or deleting them all together. However, up until now, you just were in the habit of making the fixes and giving them a special commit instead.
Rebase can help with that.

#### Let's look at some of the options that rebase provides us.

### Firstly, rebasing is essentially a form of rewriting history within Git.

So, you would have a bunch of commits that you want to work upon and they can be referenced starting from the `HEAD` of the branch (i.e. the latest commit) till the commits you want to work upon.

### To start an interactive rebase on the first 3 commits from `HEAD` you would type in your terminal

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
r (reword): change the commit message (maybe add more explanation or context to it)
f (fixup): join commits together
```

### To reorder the commits

You can reorder them in the interactive window.
It will refect when you save and quit (`:wq`).

#### Note that there might be times when you have merge conflicts, resolve them as you normally would and commit it back.

### Finally, force push so the rebase overrides the previous commits, `the history is rewriten` and the commits are exactly as you wanted them to be.

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
Change the `pick` keyword with the `reword` keyword. You can use the shorthand version, i.e, `r` as well.

```
reword 884e40a fix: remove pytube3
pick a7ddcca fix(ffmpeg): :exclamation: wrapper taking too long
pick e9036aa feat(run.bat): run in Admin mode by default
```

Note: You will have to use vim keybindings explained above to make the changes, save and quit.

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

##### [Why can't I push right after rebase?](#common-note)

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

<h3 id="common-note">Common Note</h3>

If you do `git status` or `git push` after a rebase, you might see something like this:

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

### [Splitting commit into smaller commits](https://stackoverflow.com/questions/6217156/break-a-previous-commit-into-multiple-commits)

There could be a situation where you committed a lot of changes as a signle commit, and later realized that they should be separate commits instead.
To fix this, we can use interactive rebase.
Suppose that you want to break the last commit into smaller commits.
Start interactive rebase on HEAD~

```
git rebase -i HEAD~
```

Interative rebase window will show:

```
pick 12345 feat(my_feature): lots of changes
```

Change the pick keyword to edit:

```
edit 12345 feat(my_feature): lots of changes
```

At this point, your rebase will be in halted state.
Here you can unstage the changes using `reset`

```
git reset HEAD~
```

`git status` will show something of this sort:

```
Unstaged:
  modified: test.txt
```

Now, you can commit the changes as per your liking maybe using the patch option

```
git add test.txt -p
```

Once you made the commits as per your original requirement, you can continue the rebase opertaion

```
git rebase --continue
```

### [Combining Commits together](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history)

You can combine commits together using the interactive rebase.
Suppose you run interactive rebase on 4 commits,

```
git rebase -i HEAD~4
```

The interactive rebase window will show:

```
pick 123 feat(123): 123's commit message
pick 456 feat(456): 456's commit message
pick 789 feat(789): 789's commit message
pick 101112 feat(101112): 101112's commit message
```

Now if I want to combine commit 123, and 789 together

- First I will reorder the commmits

```
pick 123 feat(123): 123's commit message
pick 789 feat(789): 789's commit message
pick 456 feat(456): 456's commit message
pick 101112 feat(101112): 101112's commit message
```

- Then I will change the pick keyword for 789 commit to squash

```
pick 123 feat(123): 123's commit message
squash 789 feat(789): 789's commit message
pick 456 feat(456): 456's commit message
pick 101112 feat(101112): 101112's commit message
```

Saving this state will open a window such as this:

```
# This is a combination of 2 commits.
# This is the 1st commit message:

fix(internal_notes): vm_name check for conf file

checking for vm_name will return true since a tuple with following
values: (False, False) will be returned. Hence, we should check for
vm_name[0] entry.

# This is the commit message #2:

fix(internal_notes): vm_name[0] instead of vm_name

since we only need the name of the vm in fill_dict function, and do not
need information about where it is coming from, we will pass vm_name[0]
directly instead of (vm_name, flag) tuple. This way, we can directly
check for vm_name (instead of vm_name[0]), and don't need to convert the
value to str once passed through the check.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Feb 5 00:14:05 2021 +0530
#
# interactive rebase in progress; onto 69ffdf10
# Last commands done (2 commands done):
#    pick 6b1955a7 fix(internal_notes): vm_name check for conf file
#    squash 4446ca98 fix(internal_notes): vm_name[0] instead of vm_name
# Next commands to do (2 remaining commands):
#    pick 7051983e fix(internal_notes): Installed Apps for Robusta
#    pick 0096c78d feat(internal_notes): compliant with robusta build
# You are currently rebasing branch 'robusta_notes' on '69ffdf10'.
#
# Changes to be committed:
#	modified:   SupportZendesk/InternalNotes/EN/sandbox_windows.py
#

```

Here, we can decide on what commit message we want to keep.
Once the commit message is finalized,

```
fix(internal_notes): vm_name check for conf file

checking for vm_name will return true since a tuple with following
values: (False, False) will be returned. Hence, we should check for
vm_name[0] entry.

However, since we only need the name of the vm in fill_dict function,
and do not need information about where it is coming from, we will
pass vm_name[0] directly instead of (vm_name, flag) tuple. This way,
we can directly check for vm_name (instead of vm_name[0]), and don't
need to convert the value to str once passed through the check.
```

just save and quit

You will see a message "Successfully rebased and updated refs"
Finally, force push to master (if required), and you're done!

# [Change Commit Date of an Earlier Commit](https://stackoverflow.com/a/5017265/7048915)

Open interactive rebase:

```
git rebase -i HEAD~4
```

```
pick 123 feat(123): 123's commit message
pick 789 feat(789): 789's commit message
pick 456 feat(456): 456's commit message
pick 101112 feat(101112): 101112's commit message
```

Change the pick keyword with `edit` (or `e`)

```
pick 123 feat(123): 123's commit message
edit 789 feat(789): 789's commit message
pick 456 feat(456): 456's commit message
pick 101112 feat(101112): 101112's commit message
```

Now when I save this, the rebase prompt will close.
Here, you would currently be in the commit "789" (i.e. the commit on which you wrote edit).
Now, in your terminal you will type:

```
git commit --amend --date="Feb 08, 2021"
```

This will set the commit date to "Febuaray 8th, 2021"

Finally, type the following in your terminal:

```
git rebase --continue
```

For the changes to reflect on remote branch, force push to master.

Do note that this might cause other commit's to have the date of your rebase, since you are essentially rewriting history, so maybe you want to use the "edit" keyword on all the commits. You can also try to use the `--committer-date-is-author-date` flag, but I haven't tried this myself.

You can also try the method mentioned in this [answer](https://stackoverflow.com/a/454750/7048915) for changing the commit date.
