---
title: Python Tips
description: Easy fixes to common problems
date: "2020-10-09"
image: "python.png"
author: "Ayush"
tags: ["python"]
---

[Supress error of Subprocess check Output](https://stackoverflow.com/a/31683402/7048915)
```
In case you call a process via subprocess, but do not wish to see the error in case it throws one,
Just redirect the standard error (stderr) to DEVNULL

import subprocess as subp
subprocess.check_output("<Call the Process>", stderr=subp.DEVNULL)
```
