---
title: Python Tips
description: Easy fixes to common problems
date: "2020-10-09"
image: "python.png"
author: "Ayush"
tags: ["python"]
---

<!-- vim-markdown-toc GFM -->

* [Quick Tips](#quick-tips)
      * [A collection of quick references for Python](#a-collection-of-quick-references-for-python)
    * [Supress error of Subprocess check Output](#supress-error-of-subprocess-check-output)
      * [In case you call a process via subprocess, but do not wish to see the error in case it throws one,](#in-case-you-call-a-process-via-subprocess-but-do-not-wish-to-see-the-error-in-case-it-throws-one)
    * [Using variables of Parent Class](#using-variables-of-parent-class)
      * [To access variables from parent class in child class,](#to-access-variables-from-parent-class-in-child-class)
    * [Add 0 padding to strings](#add-0-padding-to-strings)
      * [There are times when you would need to add a padding zeroes to the numbers you were converting to strings.](#there-are-times-when-you-would-need-to-add-a-padding-zeroes-to-the-numbers-you-were-converting-to-strings)
    * [Generating strings from lists after filtering False values](#generating-strings-from-lists-after-filtering-false-values)
      * [In case you want to join a list of string values while ignoring values that will evaluate to False](#in-case-you-want-to-join-a-list-of-string-values-while-ignoring-values-that-will-evaluate-to-false)
    * [Stripping values generated during a split operation](#stripping-values-generated-during-a-split-operation)
    * [Get files matching a regular expression](#get-files-matching-a-regular-expression)
      * [We can use glob and fnmatch for extracting files that match a specific pattern](#we-can-use-glob-and-fnmatch-for-extracting-files-that-match-a-specific-pattern)
    * [Delete keys from dictionary](#delete-keys-from-dictionary)
      * [You can use the `del` keyword to delete keys from dictionary](#you-can-use-the-del-keyword-to-delete-keys-from-dictionary)
    * [Get the first key from a dictionary](#get-the-first-key-from-a-dictionary)
      * [Use dict.keys() get the keys and then fetch first one using index](#use-dictkeys-get-the-keys-and-then-fetch-first-one-using-index)
    * [Make multilevel directories](#make-multilevel-directories)
    * [Store tempoary information to Temp Folder](#store-tempoary-information-to-temp-folder)
    * [Load value during Class Initialization using own function](#load-value-during-class-initialization-using-own-function)
    * [Getting System Details](#getting-system-details)
    * [Get current function's name](#get-current-functions-name)
    * [Accessing Function attributes if you know it's name](#accessing-function-attributes-if-you-know-its-name)

<!-- vim-markdown-toc -->

# Quick Tips

#### A collection of quick references for Python

### [Supress error of Subprocess check Output](https://stackoverflow.com/a/31683402/7048915)

#### In case you call a process via subprocess, but do not wish to see the error in case it throws one,

- Just redirect the standard error (stderr) to DEVNULL

```
import subprocess
subprocess.check_output("<Call the Process>", stderr=subp.DEVNULL)
```

### [Using variables of Parent Class](https://www.geeksforgeeks.org/python-access-parent-class-attribute/#:~:text=Accessing%20Parent%20Class%20Functions&text=This%20is%20really%20simple%2C%20you,attributes%20of%20the%20parent%20class.&text=%23%20how%20parent%20constructors%20are%20called.)

#### To access variables from parent class in child class,

- Call the constructor (**init** method) of the Parent class in the Child class's **init** method.

```py heading="Accessing Parent Class variables in Child Class"
class Parent:
  def __init__(self):
    self.parent_name = "Parent"

class Child(Parent):
  def __init__(self):
    self.child_name = "Child"
    Parent.__init__(self)

  def print_all(self):
    print("parent:", self.parent_name)
    print("child:", self.child_name)

Child().print_all()
```

### [Add 0 padding to strings](https://stackoverflow.com/questions/339007/how-to-pad-zeroes-to-a-string)

#### There are times when you would need to add a padding zeroes to the numbers you were converting to strings.

- Use zfill, a standard string function specifically designed for this use case
- For example, when calculating time differences and then printing the output

```py heading="Padding 0s with zfill"
hrs = 4
minutes = 3
time = f"{str(hrs).zfill(2)} hour(s) {str(minutes).zfill(2)} min(s)"
print(time)
```

You could also general string formatting over numbers as well:

```py heading="Padding 0s with string formatting"
hrs = 4
mins = 3
print(f"{hrs:02} hour(s) {mins:02} min(s)")
```

### [Generating strings from lists after filtering False values](https://stackoverflow.com/questions/8626694/joining-multiple-strings-if-they-are-not-empty-in-python)

#### In case you want to join a list of string values while ignoring values that will evaluate to False

- use a filter over join

```py heading="Join a list value while ignoring None type values"
x = ["a", "b", None, "4"]
y = " | ".join(filter(None, x))
print(y)
```

- Note that the filter function can also take `functions` as filterers.
- The passed function must return True/False over the passed sequence of values after evaluation.
- [Read example here](https://thepythonguru.com/python-builtin-functions/filter/)

### [Stripping values generated during a split operation](https://stackoverflow.com/a/4071407/7048915)

- Use list comprehension

```py heading="Generate list of stripped values while splitting a string"
test_str = "a, b,    c,d"
out_list = [val.strip() for val in test_str.split(',')]
print(out_list)
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

### [Delete keys from dictionary](https://www.geeksforgeeks.org/python-ways-to-remove-a-key-from-dictionary/)

#### You can use the `del` keyword to delete keys from dictionary

```py heading="Delete Keys from dictionary"
test_dict = {'one':"val1", 'two':'val2'}
print(test_dict)
del test_dict['one']
print(test_dict)
```

### [Get the first key from a dictionary](https://www.geeksforgeeks.org/python-get-the-first-key-in-dictionary/)

#### Use dict.keys() get the keys and then fetch first one using index

```py heading="First Key from Dictionary"
test_dict = {'one': 'val1', 'two': 'val2'}
print(test_dict)
print(test_dict.keys())
first_key = list(test_dict.keys())[0]
print(first_key)
```

### [Make multilevel directories](https://www.geeksforgeeks.org/python-os-makedirs-method/)

Suppose you want to create folders in a path such as `test\inner_folder\main\`, but `inner_folder` does not exist,
you can use `os.makedirs`

```py
import os

base = os.getcwd()
dir_structure = 'test/inner_folder/main/'
print(base)

path = os.path.join(base, dir_structure)
os.makedirs(path, exist_ok=True)
# Note: exist_ok -> suppress OSError if path already exists

for d in os.walk('test'):
    print(d)
```

### [Store tempoary information to Temp Folder](https://stackoverflow.com/questions/847850/cross-platform-way-of-getting-temp-directory-in-python)

There could be situtation where you are generating files that are only relevant during the execution of your script and are not meant to be stored for long term purposes.
Moreover, you don't want these files to be tracked by Git. While you could add these to .gitignore, a much cleaner way would be to use the Temp folder provided by the OS itself.
Let's say you want to create a lock file during the execution of a particular script so that another instance of the script does not override current execution,

```py
import tempfile
from os.path import join, exists

tempfolder = tempfile.gettempdir() #Locate Temp Folder
lock_file = 'script_lock.lck'
lock_file_path = join(tempfolder, lock_file)
with open(lock_file_path, 'w') as f:
  f.write('Locking')

if exists(lock_file_path):
  print("Lock found.")
```

You can also use the `tempfile.TemporaryFile()` function to generate a temp file during run-time if you do not want a particular file name.

```py
import tempfile
f = tempfile.TemporaryFile()
f.write('temporary info')
```

### [Load value during Class Initialization using own function](https://stackoverflow.com/questions/12646326/calling-a-class-function-inside-of-init)

```py
class A:
  def __init__(self):
    self.a = self.load_from_func()

  def load_from_func(self):
    return "test_value"

  def print_a(self):
    print(self.a)

obj = A()
obj.print_a()
```

This can be useful when you are going to read a file, such as a JSON, to fill values of your class variables.

### [Getting System Details](https://stackoverflow.com/questions/3103178/how-to-get-the-system-info-with-python)

```py
import platform,socket,re,uuid,json,psutil,logging

def getSystemInfo():
    try:
        info={}
        info['platform']=platform.system()
        info['platform-release']=platform.release()
        info['platform-version']=platform.version()
        info['architecture']=platform.machine()
        info['hostname']=socket.gethostname()
        info['ip-address']=socket.gethostbyname(socket.gethostname())
        info['mac-address']=':'.join(re.findall('..', '%012x' % uuid.getnode()))
        info['processor']=platform.processor()
        info['ram']=str(round(psutil.virtual_memory().total / (1024.0 **3)))+" GB"
        return json.dumps(info)
    except Exception as e:
        logging.exception(e)

sys_info = json.loads(getSystemInfo())
print(sys_info)
```

Note: If your OS is Windows, you can get GPU details like so:

```
import wmi
computer = wmi.WMI()
gpu_info = computer.Win32_VideoController()[0].name
print(gpu_info)
```

Further, to get BIOS Virtualization info:

```
process = subprocess.Popen(["powershell",'Get-ComputerInfo -property "HyperVRequirementVirtualizationFirmwareEnabled"'],stdout=subprocess.PIPE);
decoded = process.communicate()[0].decode('utf-8')
result = decoded.strip().split('\n')[2].strip()
print(result)
```

### [Get current function's name](https://stackoverflow.com/a/13514318/7048915)

There may be times where you want to dynamically get the current function's name, for example, when trying add functionality to test suite such as pytest. The simplest way is to use the inspect module.

```py
import inspect

this_function_name = inspect.currentframe().f_code.co_name
print(this_function_name)
```

You can also inspect the stack to get the complete function

```py
fn_name = inspect.stack()[1][3] #current
parent_fn_name = inspect.stack()[2][3] #parent
```

[Further Reading](https://stackoverflow.com/questions/251464/how-to-get-a-function-name-as-a-string)

### [Accessing Function attributes if you know it's name](https://stackoverflow.com/a/3071/7048915)

Suppose you have a function name which belongs to a class and you want to call it or access it's attributes, you can use the getattr method to generate the function from name.

```py
# Assuming that function belongs to class TestRobustaRegistry

def fill_fn_dict(self, value):
    fn_name = inspect.stack()[1][3]
    fn = getattr(TestRobustaRegistry, fn_name) #`fn` becomes the function
    fn.__dict__['value'] = value #Adding attributes to function dictionary
    print(f"{value} added to {fn}.__dict__")
    test_doc_string = fn.__doc__ #get the docstring of the function
    print(f'Test docstring: {test_doc_string}')
```

[Further Reading](https://stackoverflow.com/questions/3061/calling-a-function-of-a-module-by-using-its-name-a-string)

[Unpacking lists to individual values](https://stackoverflow.com/a/34308407)
To unpack list and store in individual variables:

```py
row = ["Title", "url", 33, "title2", "keyword"]
title, url, price, title2, keyword = row
print(title, url, price, title2, keyword)
```

[Combining lists together]()
To combine list together you can use the plus (+) operator

```py
a = [1, 2]
b = [3, 4]
c = a + b

print(c)
```

Bonus: You can also use the multiply (\*) operator to generate a list with duplicate elements

```py
n = 10
a = [0]
b = a*n
print(b)
```

[Sending List/Array as data while making a request](https://stackoverflow.com/a/35535240/7048915)
Suppose you want to send something like:

```
[{'name': 'ayush'}, {'name': 'mandowara'}]
```

as data, when making a request. You can do this very easily with the `requests` library.

```
url = 'https://thaturlwhichneeds.array/asparam'
headers = {"auth-token": "xyz-auth-token"}
data = [
    {
      'name': 'ayush'
    },
    {
      'name': 'mandowara'
    }
]
requests.post(url, json=data, headers=headers)
```

The `json` keyword will encode the data to (you guessed it) JSON. It will also set the `Content-Type` to `application/json`.
I guess that's why `requests` has the tag line `HTTP for Humans`

[Python not able to detect folders as packages](https://stackoverflow.com/questions/24722212/python-cant-find-module-in-the-same-folder)
There are times when you have a proper folder structure for a project, but python cannot interpret that you are importing a file from within the project directory.
One way is to make calls from a proper starting point, which as the root of the directory and change your import statements relative to the starting point. However, this is a tedious process.
A better hack is to append your project folder in system path using the `sys` module.
In the file where you are importing the other file as a module, add this to the top:

```
import sys
sys.path.append('/path/to/project_folder')
```

Now, Python will look for this folder when importing modules as well.

[Pretty print dictionaries while logging](https://stackoverflow.com/questions/11093236/use-logging-print-the-output-of-pprint)
When logging data structures such as dictionaries, you can't really decipher the contents unless you look very hard. This defeats the purpose of why you were logging in the first place.
You might have used `pprint.pprint` for printing dictionaries to command line. Similary, we can use `pprint.pformat`. It takes the input, and generates a pretty printed string, which can then be passed to the logger.
Furthermore, you can use the `\n` character, so that the dictionary is printed isn't awkwardly starting directly after the timestamp.

```
from pprint import pformat
ds = [{'hello': 'there'}]
logging.debug(f"logging datastructure:\n{pformat(ds)}")
```
