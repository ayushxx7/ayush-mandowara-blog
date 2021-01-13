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

### [Revert last commit](https://stackoverflow.com/a/2846154/7048915)

```
# to uncommit but keep the changes intact
git reset --soft HEAD^
# to uncommit and remove the changes from the file as well
git reset --hard HEAD^
```

### [Revert to a Commit](https://stackoverflow.com/a/21718540/7048915)

```
# To see what commit you want to revert to, first check all the commits.
git log
# once you have a commit hash, let's say 0123456

git revert --no-commit 0123456..HEAD
git commit -m "some relevant message to why you reverted to this one. since you are essentially rewriting history"
```

### [Reverting commits](http://gitready.com/intermediate/2009/03/16/rolling-back-changes-with-revert.html)

```
# To revert the most recent change
git revert HEAD
# To revert the change made before the most recent change
git revert HEAD~
# To revert changes made in a specific commit, say, 12345678
git revert 12345678

If you are reverting to a merge commit, add the -m flag, with the number specifying to which commit you want to go to
```

### [Reverting a Git Stash Pop](https://stackoverflow.com/a/22207257/7048915)

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

### [Moving commits from one branch to another](https://stackoverflow.com/questions/3492536/point-branch-to-new-commit)

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

### [Cancelling a Merge](https://stackoverflow.com/questions/10697463/resolve-git-merge-conflicts-in-favor-of-their-changes-during-a-pull)

Sometimes, your dev branches are behind master branch, either because of directly commiting to master, or because the commits were made in devbranch2, and then pushed to master, making devbranch1 behind.

Nevertheless, In such cases, you try to pull changes from master back to dev branch so you can continue working on a feature.
And lo-behold, you get a merge conflict!

You can either fix the conflicts, or cancel a merge by using `--abort` flag to look for other methods.

```
git merge --abort #when facing a merge conflict due to pull or merge
git cherry-pick --abort #when conflict came due to cherry pick operation
```

If you know that the merge should keep the pulled changes, and discard the local changes, you can specify the `--theirs` parameter

```
git pull -X theirs
```

If you are already in a conflicted state, worry not, just use

```
git checkout --theirs path/to/file
```

### [Move commit from one branch to another](https://stackoverflow.com/questions/2369426/how-to-move-certain-commits-to-be-based-on-another-branch-in-git/11965051)

#### Merge Commit onto the required branch

Firsty, identify the commit hash that you want to move.

```
git checkout feature_branch #branch from which commit will be picked
git log #identify commit hash
```

Let's say the hash is `#0123456`
Switch to the branch to which you want to move the commit.

```
git checkout master #branch to which commit will be applied
```

Use the `cherry-pick` command to apply the commit

```
git cherry-pick #0123456
```

This will apply the commit to the correct branch, after which you can push these changes

```
git push origin master #branch to which commit will be applied
```

Now your commit has been copied to the required branch, however, it is still there in the original branch as well.

#### Delete commit from the original branch

To finish the move, we should delete the commit from the feature_branch (original branch).
To do so, we can use git rebase and drop the commit.

```
git checkout feature_branch
git rebase -i HEAD~3 #the number represents how far back the commit is from the head
```

The interactive rebase window will open up.

```
pick ece4b89f feat(Robusta): Generate report and send mail
pick 0123456 feat(Robusta): +install test case
pick 4da9b1dd feat(Robusta): move app installation to pagebase
```

Replace pick with drop

```
pick ece4b89f feat(Robusta): Generate report and send mail
drop 0123456 feat(Robusta): +install test case
pick 4da9b1dd feat(Robusta): move app installation to pagebase
```

Save and quit
You would see a message such as `Successfully rebased and updated refs/head/robusta-dev`

Now, push your changes to the feature branch

```
git push <remote> <branch>
```

Use force (`-f`) if required.

### Revert a single file to HEAD when there are multiple files with changes(https://stackoverflow.com/questions/7147270/hard-reset-of-a-single-file)

There are times when you wish that only some files loose their changes and be reset to HEAD.

- One way would be to commit the rest of the files first and then `git reset --hard`
  However, this is an awkward compromise. What if you didn't want to commit the other files just yet?
- `Git checkout` comes to rescue in such a situataion.
- `Git checkout HEAD -- file_name.extension`
  The `--` operator implies that further arguments are filenames. Also, please mind the `space` after the `--`.

### Unstage deleted file (https://stackoverflow.com/questions/9591407/unstage-a-deleted-file-in-git)

We can use the `--` operator to pass in file name in any git command.
Here, we will use that feature to revert our accidental deletion.
Note that you cannot use tab completion to fill in the file name because the file is deleted from the system.

```
git reset -- <name_of_file.extenstion>
git checkout -- <name_of_file.extenstion>
```
