---
title: Git Revert (Quick Reference)
description:
date: "2020-09-17"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

###PURPOSE
Reverting to a previous state of your codebase can be challenging and at times scary, but mistakes do happen and in times like those, Git's version history is our best bet at recovery.

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

# [Reverting commits](http://gitready.com/intermediate/2009/03/16/rolling-back-changes-with-revert.html)
```
# To revert the most recent change
git revert HEAD
# To revert the change made before the most recent change
git revert HEAD~
# To revert changes made in a specific commit, say, 12345678
git revert 12345678

If you are reverting to a merge commit, add the -m flag, with the number specifying to which commit you want to go to
```

# [Reverting a Git Stash Pop](https://stackoverflow.com/a/22207257/7048915)
- There are times when you accidentaly end up popping your git stash
- For example, when you wanted to stash pop your changes to a different branch
- Follow these steps to keep your stash saved, and remove the conflicts
```
git reset HEAD .
git stash
git checkout other_branch
git stash apply stash@{1}
```
- Note: Mostly an unwanted stash pop would result in a merge conflict, due to which your stash will still be preserved
- Still, it is better to stash the merge conflict as well, to avoid losing your stashed progress


[Moving commits from one branch to another](https://stackoverflow.com/questions/3492536/point-branch-to-new-commit)

Imaging that you want to raise a PR for a hotfix. So, you first the original work for tracking, and then commit the actual changes. That's a reasonable way to do things. However, when you push your changes, you realize, you never actually pushed the original work! In essence, what you want to do is, go from this state:

```
dev            C - D
             /
master A - B
```

to this state:
```
dev                D
                 /
master A - B - C
```

To do so, we can use the `merge` command, on a specific commit:
```
git checkout master
git merge C

# Result:
                 D (dev)
                /
master A - B - C (move master HEAD)
```
If you have raised a PR before doing these changes, chances are, you will not see the changes reflected after pushing them to master.
To show the `true-diff` as it should be given that some changes have been merged in the base branch,
- Use the Edit button when viewing the PR in GitHub
- Change the base branch from master (if it was master) to some other branch
- Change the base branch back to the original branch (master in our example)
- [Reference](https://stackoverflow.com/a/46782679/7048915)

Note: The solution for the opposite scenario can be found [here](https://stackoverflow.com/questions/1628563/move-the-most-recent-commits-to-a-new-branch-with-git)

[Cancelling a Merge](https://stackoverflow.com/questions/10697463/resolve-git-merge-conflicts-in-favor-of-their-changes-during-a-pull)
Sometimes, your dev branches are behind master branch, either because of directly commiting to master, or because the commits were made in devbranch2, and then pushed to master, making devbranch1 behind.
Nevertheless, In such cases, you try to pull changes from master back to dev branch so you can continue working on a feature.
And lo-behold, you get a merge conflict!
You can either fix the conflicts, or cancel a merge by using `git merge --abort` to look for other methods.
If you know that the merge should keep the pulled changes, and discard the local changes, you can specify the `--theirs` parameter
```
git pull -X theirs
```
If you are already in a conflicted state, worry not, just use
```
git checkout --theirs path/to/file
```
