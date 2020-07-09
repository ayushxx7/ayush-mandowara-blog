---
title: How to change Author of a previous Git Commit.
description: If you've made a commit from a different account, and want to change the author (essentially rewriting history) follow these steps.
date: "2020-07-03"
image: git.png
author: "Ayush"
tags: ["git"]
---

<br />

<h3>PURPOSE</h3>
To change the Author of a previous commit in a Repository. 
<h4>Many times you end up commiting and pushing changes to a repository from a different account than you originally intended to do. You can ignore that commit, and move on in life Or You can follow these steps below:</h4>


<h5>Assume for clarity of exposition that 03f482d6 is the commit whose author we are trying to replace, and 42627abe is the commit with the new author.</h5>

1. Open Terminal.

2. Change the current working directory to your local project.

3. Checkout the commit we are trying to modify.

```
git checkout 03f482d6
```

4. Make the author change.

```
git commit --amend --author "New Author Name <New Author Email>"
```

5. Now we have a new commit with hash assumed to be 42627abe.

6. Checkout the original branch. For example if the original branch was master.

```
git checkout master
```

7. Replace the old commit with the new one locally.

```
git replace 03f482d6 42627abe
```

8. Rewrite all future commits based on the replacement.

```
git filter-branch -- --all
```

9. Remove the replacement for cleanliness.

```
git replace -d 03f482d6
```

10. Push the new history (only use --force if the below fails, and only after sanity checking with git log and/or git diff).

```
git push --force-with-lease
```

Note: Instead of 7-9 you can just rebase onto new commit:

```
git rebase -i 42627abe
```

<h3>CREDITS</h3>
<br>
This article is from a StackOverflow Answer [here](https://stackoverflow.com/a/30737248/7048915)  
<br>
I am adding it here to quickly reference it when I inevitably forget how to do it.

