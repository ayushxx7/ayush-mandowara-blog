---
title: Python Tips
description: Easy fixes to common problems
date: "2020-10-09"
image: "python.png"
author: "Ayush"
tags: ["python"]
---

# Python Tips
#### A collection of quick references for Python

### [Supress error of Subprocess check Output](https://stackoverflow.com/a/31683402/7048915)
```
In case you call a process via subprocess, but do not wish to see the error in case it throws one,
Just redirect the standard error (stderr) to DEVNULL

import subprocess as subp
subprocess.check_output("<Call the Process>", stderr=subp.DEVNULL)
```

### [Using variables of Parent Class](https://www.geeksforgeeks.org/python-access-parent-class-attribute/#:~:text=Accessing%20Parent%20Class%20Functions&text=This%20is%20really%20simple%2C%20you,attributes%20of%20the%20parent%20class.&text=%23%20how%20parent%20constructors%20are%20called.)
#### To access variables from parent class in child class,
- Call the constructor (__init__ method) of the Parent class in the Child class's __init__ method.

```
# Example
class Parent:
  def __init__(self):
    self.parent_name = "Parent"

class Child(Parent):
  def __init__(sefl):
    self.child_name = "Child"
    Parent.__init__(self)

  def print_all(self):
    print("parent:", self.parent_name)
    print("child:", self.child_name)

Child().print_all()
```

```
# Running this example will print the following output:
parent: Parent
child: Child
```
