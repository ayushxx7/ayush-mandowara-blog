---
title: The power of Git Reflog
description:
date: "2021-04-16"
image: "git.png"
author: "Ayush"
tags: ["git"]
---

## Introduction

Reflog is a powerful tool provided by Git and helps us in solving a variety of problems. This blog will try to address some of the scenarios that I face which are solved by Reflog.

### What is Reflog?

A local version history which records each & every move you make in the repository. It keeps track of all commits, even those that were rewritten. It stores information such as which branch you checked out from, which stash you applied, what commits you ammend, your merges, your rebases, every little detail about what happens in your local repository.
Suffice to say, it is really helpful in cases when you mess up history, or even to reference old commits or changes that are no longer part of the "main" history of the project.

Ready? Run the following in your command to see what I mean:

### How to access reflog?

```
git reflog
```

```
0d818eb HEAD@{0}: checkout: moving from master to test_branch
0d818eb HEAD@{1}: commit (amend): feat(Win): darcula theme for Powershell
6b1c0a7 HEAD@{2}: commit: feat(Win): darcula theme for Powershell
91fbc4c HEAD@{3}: commit: feat(Git): +blog: Reflog INIT
d98e625 HEAD@{4}: commit: feat(Python): numbers with fixed floating point
19e3184 HEAD@{5}: commit: feat(Python): bytes to human readable format
c7ca5db HEAD@{6}: commit: feat(Python): convert numbers to hexadecimal
c9c7021 HEAD@{7}: commit: feat(Python): restore timestamps after extraction
```

Here, you can see all of what you have done in your local repository.

### Recover a lost commit due to accidental reset

Now, let's take an example.
Your current repository looks like this:

```
git log
```

```
commit 0d818eba72bc9c546d59d8965fcd389951ed8e4d
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Sat Apr 10 00:10:45 2021 +0530

    feat(Win): darcula theme for Powershell

commit 91fbc4cea653149739d5a845fda693a03b6c3d31
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Thu Apr 1 01:21:57 2021 +0530

    feat(Git): +blog: Reflog INIT

commit d98e62532489934d6db72d10894d2106bd940fda
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Fri Mar 26 02:08:43 2021 +0530

    feat(Python): numbers with fixed floating point


```

Let's say you did a `git reset --hard HEAD~` to remove everything from the most recent commit.
You realize that you actually wanted some part of the code or maybe it's commit message as you don't want to rewrite it.

If you do a `git log` now, as you would expect, the commit is gone!

```
commit 91fbc4cea653149739d5a845fda693a03b6c3d31
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Thu Apr 1 01:21:57 2021 +0530

    feat(Git): +blog: Reflog INIT

commit d98e62532489934d6db72d10894d2106bd940fda
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Fri Mar 26 02:08:43 2021 +0530

    feat(Python): numbers with fixed floating point

commit 19e3184ebd8297e95cf611ed093b9263714fbd72
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Fri Mar 26 02:08:08 2021 +0530

    feat(Python): bytes to human readable format
```

Here, you can do a `git reflog`

```
git reflog
```

```
91fbc4c HEAD@{0}: checkout: moving from master to test_branch
0d818eb HEAD@{1}: checkout: moving from test_branch to master
91fbc4c HEAD@{2}: reset: moving to HEAD~
0d818eb HEAD@{3}: reset: moving to HEAD
0d818eb HEAD@{4}: checkout: moving from master to test_branch
0d818eb HEAD@{5}: commit (amend): feat(Win): darcula theme for Powershell
6b1c0a7 HEAD@{6}: commit: feat(Win): darcula theme for Powershell
91fbc4c HEAD@{7}: commit: feat(Git): +blog: Reflog INIT
d98e625 HEAD@{8}: commit: feat(Python): numbers with fixed floating point
19e3184 HEAD@{9}: commit: feat(Python): bytes to human readable format
```

As you can see, the commit `0d818eb` can be seen here.
Now, we have a commit hash. As long as we have a commit hash, we can do pretty much anything.

Suppose you wanted to see what changes were made:

```
git show 0d818eb
```

```
commit 0d818eba72bc9c546d59d8965fcd389951ed8e4d
Author: Ayush Mandowara <ayushxx7@gmail.com>
Date:   Sat Apr 10 00:10:45 2021 +0530

    feat(Win): darcula theme for Powershell

diff --git a/content/Windows/01-win-tips.md b/content/Windows/01-win-tips.md
index b37ef17..b549692 100644
--- a/content/Windows/01-win-tips.md
+++ b/content/Windows/01-win-tips.md
@@ -120,3 +120,67 @@ powershell -command bl.ps1 -BluetoothStatus On

+
+### [Change PowerShell Theme to Dracula](https://github.com/dracula/powershell) +
+
```

You can checkout to the commit

```
git checkout 0d818eb
```

You can reset back to this commit. It will make so as if you never deleted the commit in the first place.

```
git reset --hard 0d818eb
```

### Recover lost commit due to force push [Reflog + Cherry Pick]

Suppose your colleague didn't know that you pushed some commits, and they are trying to fix their commit history.
They amend their most recent commit (which was already pushed), now, when try to push normally, they will see a message about diverged histories.
They force push out of habit, which fixed their commit history, but had the accidental effect of losing your commit.
Now, you have pulled from the remote repository and you lost the commit as well.
What a mess! Now you feel the only option left is to redo whatever you original committed.
Fear not, `reflog` comes to rescue.

Assuming you have lost the commit after pull.

```
git reflog
```

You can see the original commit that was made by you.

```
4c74a2e3 HEAD@{5}: pull (finish): returning to refs/heads/robusta-dev
4c74a2e3 HEAD@{6}: pull (start): checkout 4c74a2e33552463cdc9f5f9dd4c6b1f9e28ca7ca
7d9dc22f HEAD@{7}: pull (finish): returning to refs/heads/robusta-dev
7d9dc22f HEAD@{8}: pull (pick): fix(robusta): os_locale stat #<--- commit you were looking for
7bd8a090 HEAD@{9}: pull (start): checkout 7bd8a0900b7642daf36db0597a654bddbb8e728a
dcd6ff55 HEAD@{10}: commit: fix(robusta): os_locale stat
ba346631 HEAD@{11}: checkout: moving from master to robusta-dev
```

Now, since you have the commit hash, you can apply it using cherry-pick.

```
git cherry-pick 7d9dc22f
```

You will see a message such as the patch was successfully applied.

```
git reflog
```

```
62bb7cd3 HEAD@{4}: cherry-pick: fix(robusta): os_locale stat
4c74a2e3 HEAD@{5}: pull (finish): returning to refs/heads/robusta-dev
4c74a2e3 HEAD@{6}: pull (start): checkout 4c74a2e33552463cdc9f5f9dd4c6b1f9e28ca7ca
7d9dc22f HEAD@{7}: pull (finish): returning to refs/heads/robusta-dev
7d9dc22f HEAD@{8}: pull (pick): fix(robusta): os_locale stat
7bd8a090 HEAD@{9}: pull (start): checkout 7bd8a0900b7642daf36db0597a654bddbb8e728a
dcd6ff55 HEAD@{10}: commit: fix(robusta): os_locale stat
```

Your lost changes have now been recovered!
