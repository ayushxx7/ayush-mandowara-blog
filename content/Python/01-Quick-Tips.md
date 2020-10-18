---
title: Python Tips description: Easy fixes to common problems
date: "2020-10-09"
image: "python.png"
author: "Ayush"
tags: ["python"]
---

# Python Tips
#### A collection of quick references for Python

### [Supress error of Subprocess check Output](https://stackoverflow.com/a/31683402/7048915)
#### In case you call a process via subprocess, but do not wish to see the error in case it throws one,
- Just redirect the standard error (stderr) to DEVNULL
```
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

### [Add 0 padding to strings](https://stackoverflow.com/questions/339007/how-to-pad-zeroes-to-a-string)
#### There are times when you would need to add a padding zeroes to the numbers you were converting to strings.
- Use zfill, a standard string function specifically designed for this use case
- For example, when calculating time differences and then printing the output

```
hrs = 4
minutes = 3
time = f"{str(hrs).zfill(2)} hour(s) {str(minutes).zfill(2)} min(s)"
print(time)
```

The output will look like this:
```
04 hour(s) 03 min(s)
```

You could also general string formatting over numbers as well:
```
print(f"{hrs:%02}")
```

### [Generating strings from lists after filtering False values](https://stackoverflow.com/questions/8626694/joining-multiple-strings-if-they-are-not-empty-in-python)
#### In case you want to join a list of string values while ignoring values that will evaluate to False
- use a filter over join
```
x = ["a", "b", None, "4"]
y = " | ".join(filter(None, x))
```
- Printing `y` will produce the following output:
```
a | b | 4
```
- Note that the filter function can also take `functions` as filterers.
- The passed function must return True/False over the passed sequence of values after evaluation.
- [Read example here](https://thepythonguru.com/python-builtin-functions/filter/)
<<<<<<< HEAD


=======


>>>>>>> 26c2c7bf3eedeb9caebeed3483036ee5420c046d
### [Stripping values generated during a split operation](https://stackoverflow.com/a/4071407/7048915)
- Use list comprehension
```
test_str = "a, b,    c,d"
out_list = [val.strip() for val in test_str.split(',')]
print(out_list)
```
- Output
```
['a', 'b', 'c', 'd']
```

### [Get files matching a regular expression](https://docs.python.org/3/library/glob.html)
#### We can use glob and fnmatch for extracting files that match a specific pattern

Let's say you have a list of files
```
test_dir
│   test.txt
|   test2.txt
|   other.txt
|   test.py
```
And you want to extract files that have the name test in them,
or in other words, files that match the pattern: `test*`

- Using glob
```
files = glob.glob(os.getcwd()+'/test*')
print(files)
```
Output:
```
['C:\\Users\\ayush\\OneDrive\\Desktop\\blog\\test\\test.py', 'C:\\Users\\ayush\\OneDrive\\Desktop\\blog\\test\\test.txt', 'C:\\Users\\ayush\\OneDrive\\Desktop\\blog\\test\\test2.txt']
```
- We get a list of files with their exact paths

- Using fnmatch
```
files = fnmatch.filter(os.listdir(), 'test*')
print(files)
```

Output:
```
['test.py', 'test.txt', 'test2.txt']``
```
- We can see that fnmatch returns the filename only
- To create the fullpath, we would need to use `os.path.join` on current_dir and filename

Note: The `glob` module uses the os and fnmatch module internally.
