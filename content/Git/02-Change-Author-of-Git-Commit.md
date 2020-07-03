---
title: How to change Author of a previous Git Commit.
description: If you've made a commit from a different account, and want to change the author (essentially rewriting history) follow these steps.
date: "2020-07-03"
image: git.png
author: "Chris"
tags: ["git"]
---

<br />

This article is from a StackOverflow Answer [here](https://stackoverflow.com/a/30737248/7048915) I am adding it here to quickly reference it when I inevitably forget how to do it.

If you want to change the Author of a commit in your repo you can ammend the commit author and rebase it reflect in the commit history.

1. Open Terminal.

2. Change the current working directory to your local project.

Note: The accepted answer to this question is a wonderfully clever use of interactive rebase, but it unfortunately exhibits conflicts if the commit we are trying to change the author of used to be on a branch which was subsequently merged in. More generally, it does not work when handling messy histories.

Since I am apprehensive about running scripts which depend on setting and unsetting environment variables to rewrite git history, I am writing a new answer based on this post which is similar to this answer but is more complete.

The following is tested and working, unlike the linked answer. Assume for clarity of exposition that 03f482d6 is the commit whose author we are trying to replace, and 42627abe is the commit with the new author.

4. Checkout the commit we are trying to modify.

```
git checkout 03f482d6
```

5. Make the author change.

```
git commit --amend --author "New Author Name <New Author Email>"
```

6. Now we have a new commit with hash assumed to be 42627abe.

7. Checkout the original branch. For example if the original branch was master.

```
git checkout master
```

8. Replace the old commit with the new one locally.

```
git replace 03f482d6 42627abe
```

9. Rewrite all future commits based on the replacement.

```
git filter-branch -- --all
```

10. Remove the replacement for cleanliness.

```
git replace -d 03f482d6
```

11. Push the new history (only use --force if the below fails, and only after sanity checking with git log and/or git diff).

```
git push --force-with-lease
```

Note: Instead of 8-10 you can just rebase onto new commit:

```
git rebase -i 42627abe
```

Next Blog: How to set a specific username for a specific repository. https://stackoverflow.com/a/55096250/7048915
