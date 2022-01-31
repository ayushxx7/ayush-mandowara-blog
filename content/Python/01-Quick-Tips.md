---
title: Python Tips
description: Easy fixes to common problems
date: "2021-06-03"
image: "python.png"
author: "Ayush"
tags: ["python"]
---

<!-- vim-markdown-toc GFM -->

* [PURPOSE](#purpose)
  * [CLASSES](#classes)
    * [Using variables of Parent Class](#using-variables-of-parent-class)
    * [Load value during Class Initialization using own function](#load-value-during-class-initialization-using-own-function)
  * [FUNCTIONS](#functions)
    * [Get current function's name](#get-current-functions-name)
    * [Accessing Function attributes if you know it's name](#accessing-function-attributes-if-you-know-its-name)
  * [DICTIONARIES](#dictionaries)
    * [Delete keys from dictionary](#delete-keys-from-dictionary)
    * [Get the first key from a dictionary](#get-the-first-key-from-a-dictionary)
    * [Pretty print dictionaries while logging](#pretty-print-dictionaries-while-logging)
    * [Use `copy` to make duplicate dictionaries](#use-copy-to-make-duplicate-dictionaries)
    * [Dictionary to JSON](#dictionary-to-json)
  * [LISTS](#lists)
    * [List slicing](#list-slicing)
    * [Convert list to indexed tuple list](#convert-list-to-indexed-tuple-list)
    * [Unpacking lists to individual values](#unpacking-lists-to-individual-values)
    * [Combining lists together](#combining-lists-together)
    * [Generating strings from lists after filtering False values](#generating-strings-from-lists-after-filtering-false-values)
    * [Sort by length](#sort-by-length)
  * [FORMATTING](#formatting)
    * [Add 0 padding to strings](#add-0-padding-to-strings)
    * [Stripping values generated during a split operation](#stripping-values-generated-during-a-split-operation)
    * [Convert Numbers to Hex](#convert-numbers-to-hex)
    * [Convert bytes to Human Readable format](#convert-bytes-to-human-readable-format)
  * [Testing via Python](#testing-via-python)
    * [Good Testcase pattern to follow](#good-testcase-pattern-to-follow)
    * [Skip Test Cases based on command line arguments in Pytest](#skip-test-cases-based-on-command-line-arguments-in-pytest)
  * [MISC UTIL](#misc-util)
    * [Round Robin Ticket Assigner](#round-robin-ticket-assigner)
    * [Using map to get sum of a 2D array](#using-map-to-get-sum-of-a-2d-array)
    * [Get files matching a regular expression](#get-files-matching-a-regular-expression)
      * [We can use glob and fnmatch for extracting files that match a specific pattern](#we-can-use-glob-and-fnmatch-for-extracting-files-that-match-a-specific-pattern)
    * [Sending List/Array as data while making a request](#sending-listarray-as-data-while-making-a-request)
    * [Supress error of Subprocess check Output](#supress-error-of-subprocess-check-output)
    * [Make multilevel directories](#make-multilevel-directories)
    * [Store temporary information to Temp Folder](#store-temporary-information-to-temp-folder)
    * [Restore Timestamps of Extracted Files](#restore-timestamps-of-extracted-files)
    * [Binomial Coefficent - <sup>n</sup>C<sub>r</sub>](#binomial-coefficent---supnsupcsubrsub)
    * [Python not able to detect folders as packages](#python-not-able-to-detect-folders-as-packages)
    * [Upgrade Pip in Venv](#upgrade-pip-in-venv)

<!-- vim-markdown-toc -->


# PURPOSE

Sharing a collection of quick references for common issues encountered when coding in Python


## CLASSES

### [Using variables of Parent Class](https://www.geeksforgeeks.org/python-access-parent-class-attribute/#:~:text=Accessing%20Parent%20Class%20Functions&text=This%20is%20really%20simple%2C%20you,attributes%20of%20the%20parent%20class.&text=%23%20how%20parent%20constructors%20are%20called.)

To access variables from parent class in child class,

- Call the constructor (`__init__` method) of the Parent in the Child class's `__init__` method.

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

---

### [Load value during Class Initialization using own function](https://stackoverflow.com/questions/12646326/calling-a-class-function-inside-of-init)

```py heading="Load value during Class INIT"
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

## FUNCTIONS

### [Get current function's name](https://stackoverflow.com/a/13514318/7048915)

There may be times where you want to dynamically get the current function's name, for example, when trying add functionality to test suite such as pytest. The simplest way is to use the inspect module.

```py heading="Using inspect to get function name"
import inspect

this_function_name = inspect.currentframe().f_code.co_name
print(this_function_name)
```

You can also inspect the stack to get the complete function

```py heading="Using inspect to get function name from call stack"
import inspect
fn_name = inspect.stack()[0][3] #here 0 represents the depth of stack
print(fn_name)
```

[Further Reading](https://stackoverflow.com/questions/251464/how-to-get-a-function-name-as-a-string)

---

### [Accessing Function attributes if you know it's name](https://stackoverflow.com/a/3071/7048915)

Suppose you have a function name which belongs to a class and you want to call it or access it's attributes, you can use the getattr method to generate the function from name.

```py heading="Access attributes such as dictionary of a function in a class"
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

## DICTIONARIES

### [Delete keys from dictionary](https://www.geeksforgeeks.org/python-ways-to-remove-a-key-from-dictionary/)

You can use the `del` keyword to delete keys from dictionary

```py heading="Delete Keys from dictionary"
test_dict = {'one':"val1", 'two':'val2'}
print(test_dict)
del test_dict['one']
print(test_dict)
```

---

### [Get the first key from a dictionary](https://www.geeksforgeeks.org/python-get-the-first-key-in-dictionary/)

Use `dict.keys()` get the keys and then fetch first one using index

```py heading="First Key from Dictionary"
test_dict = {'one': 'val1', 'two': 'val2'}
print(test_dict)
print(test_dict.keys())
first_key = list(test_dict.keys())[0]
print(first_key)
```

---

### [Pretty print dictionaries while logging](https://stackoverflow.com/questions/11093236/use-logging-print-the-output-of-pprint)

When logging data structures such as dictionaries, you can't really decipher the contents unless you look very hard. This defeats the purpose of why you were logging in the first place.
You might have used `pprint.pprint` for printing dictionaries to command line. Similary, we can use `pprint.pformat`. It takes the input, and generates a pretty printed string, which can then be passed to the logger.
Furthermore, you can use the `\n` character, so that the dictionary is printed isn't awkwardly starting directly after the timestamp.

```py heading="Pretty Print dictionary"
import logging
from pprint import pformat
ds = [{'hello': 'there'}]
logging.debug(f"logging datastructure:\n{pformat(ds)}")
```

---

### [Use `copy` to make duplicate dictionaries](https://www.programiz.com/python-programming/methods/dictionary/copy)

There could be times when you want to compare if a dictionary is changed.
For this you think that you will store the current state in a temp dictionary, and do operations in the original one.
After the operation, you think you can use a simple `==` check. Overall, a reasonable approach.
So you start by saying,

```py heading="Snippet to show failing scenario of making duplicate dictionary"
current = {'1':'one'}
temp = current
current['2'] = {'two'}

if temp == current:
  print("Something's wrong I can feel it!")
else:
  print("State has changed")
```

You run the above code and you wonder, why the equality check is passing?
The reason is, when you use the `=` operator to make a tempory copy, you are actually only creating a reference! _Pointer Nightmares intensify_

For this specific purpose, what you want is a `shallow copy` of the original dictionary and not a reference.
In Python, you can do that by using the copy function.

```py heading="Using inbuilt 'copy' method to make duplicate dictionary"
current = {'1':'one'}
temp = current.copy()
current['2'] = {'two'}

if temp == current:
  print("Something's wrong I can feel it!")
else:
  print("State has changed")
```

Voila, you can now compare state between dictionaries!

---

### Dictionary to JSON

```py heading="Convert Dictionary to JSON"
import json

data = {
    'catbs5': {
        'en': [
            {'article_id': '123', 'title': '123title'},
            {'article_id': '1234', 'title': '1234title'},
        ],
        'tw': [
            {'article_id': '123', 'title': '123title'},
            {'article_id': '1234', 'title': '1234title'},
        ],
    },
    'catbs4': {
        'en': [
            {'article_id': '123', 'title': '123title'},
            {'article_id': '1234', 'title': '1234title'},
        ],
        'tw': [
            {'article_id': '123', 'title': '123title'},
            {'article_id': '1234', 'title': '1234title'},
        ],
    }
}

json_data = json.dumps(data)

print(json_data)
```

## LISTS

### List slicing

Lists have special property where you can specify index from which you want to access the list.
```
[start:stop:step]
```
- start: read list starting from this index (inclusive)
- stop: stop reading list just before this index (exclusive)
- step: by default, lists will be iterated one element at time. To increase the step size, pass in the this input.

```py heading="List start, stop, step"
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(a)
print(a[1:])
print(a[1:3])
print(a[4:-2])
print(a[1::2])
```

### [Convert list to indexed tuple list](https://www.geeksforgeeks.org/python-convert-list-to-indexed-tuple-list/)

Say you want to sort the elements of a list, but don't want to lose the original index,   
you can convert your list to an indexed tuple list.

```py heading="list to indexed tuple list"
num_list = [0, 1, 2, 3, 3, 4, 3]
indexed_num_list = list(enumerate(num_list))
print(num_list)
print(indexed_num_list)

sorted_list_with_index_stored = sorted(indexed_num_list, key=lambda tuple_elem: tuple_elem[1], reverse=True)
print(sorted_list_with_index_stored)
```

### [Unpacking lists to individual values](https://stackoverflow.com/a/34308407)

To unpack list and store in individual variables:

```py heading='Unpack list to individual values'
row = ["Title", "url", 33, "title2", "keyword"]
title, url, price, title2, keyword = row
print(title, url, price, title2, keyword)
```

---

### Combining lists together

To combine list together you can use the plus (+) operator

```py heading='Combining lists using "+" operator'
a = [1, 2]
b = [3, 4]
c = a + b

print(c)
```

Bonus: You can also use the multiply (\*) operator to generate a list with duplicate elements

```py heading="Generating lists with duplicate values by overloading multiplication"
n = 10
a = [0]
b = a*n
print(b)
```

---

### [Generating strings from lists after filtering False values](https://stackoverflow.com/questions/8626694/joining-multiple-strings-if-they-are-not-empty-in-python)

In case you want to join a list of string values while ignoring values that will evaluate to False

- use a filter over join

```py heading="Join a list value while ignoring None type values"
x = ["a", "b", None, "4"]
y = " | ".join(filter(None, x))
print(y)
```

- Note that the filter function can also take `functions` as filterers.
- The passed function must return True/False over the passed sequence of values after evaluation.
- [Read example here](https://thepythonguru.com/python-builtin-functions/filter/)

---

### [Sort by length](https://developers.google.com/edu/python/sorting)

There is a pythonic way to sort elements by their length, and it is to use the `key` param in the `sorted` function.

```py heading="Sort list elements by length"
list_of_elems = ['ccc', 'aaaa', 'd', 'bb']
print(sorted(list_of_elems, key=len))

data = [
  {
    'len': 12,
    'name': 33
  },
  {
    'len': 1,
    'name': 33
  }
]

print(sorted(data, key=lambda elem: elem['len']))
```

The `key` param can also be passed in `max` function

```py heading="Using 'key' attribute in 'max' function"
list_of_elems = ['ccc', 'aaaa', 'd', 'bb']
print(max(list_of_elems, key=len))

data = [
  {
    'len': 12,
    'name': 33
  },
  {
    'len': 1,
    'name': 33
  }
]

print(max(data, key=lambda elem: elem['len']))
```

## FORMATTING

### [Add 0 padding to strings](https://stackoverflow.com/questions/339007/how-to-pad-zeroes-to-a-string)

There are times when you would need to add a padding zeroes to the numbers you were converting to strings.

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

---

### [Stripping values generated during a split operation](https://stackoverflow.com/a/4071407/7048915)

- Use list comprehension

```py heading="Generate list of stripped values while splitting a string"
test_str = "a, b,    c,d"
out_list = [val.strip() for val in test_str.split(',')]
print(out_list)
```

---

### [Convert Numbers to Hex](https://stackoverflow.com/a/45640808/7048915)

The `int` method used for converting values to numbers also supports base conversion.
To convert any string to hexadecimal number, just pass in the base number as 16.

```py heading="Converting numbers to Hex"
num_hex = int('fff', 16)
print(num_hex)

#Similarly for octal numbers, we can pass base 8
num_oct = int('66', 8)
print(num_oct)
```

Note that the number should be a valid hexadecimal (i.e. chars 0-9 & letters a-f are allowed when forming the number)

---

### [Convert bytes to Human Readable format](https://stackoverflow.com/a/49361727)

To convert bytes to human readable format, we simply divide the number by 2 (pow) 10 until we can no longer divide.
This way, we can obtain the power label (KB/MB/GB) from the original input bytes.

```py heading="Bytes to KB/MB/GB"
def format_bytes(size):
    """Convert bytes to Human Readable Sizes"""
    try:
        power = 2**10
        n = 0
        power_labels = {0 : '', 1: 'K', 2: 'M', 3: 'G', 4: 'T'}
        while size > power:
            size /= power
            n += 1
        return f"{size:.2f} {power_labels[n]}B"
    except:
        logging.error(f"{traceback.format_exc()}")
        return size

print(format_bytes(12345))
print(format_bytes(12345678910))
```

## Testing via Python

### Good Testcase pattern to follow
```py heading="Testcase Structure to follow"
import traceback

try:
  status = False
  # verification logic
  # if required, use internal try/except clause
  # if happy, then set status to true and break out of any loop that is running
except:
  log.error(traceback.format_exc())

return status
```

### [Skip Test Cases based on command line arguments in Pytest](https://stackoverflow.com/a/55769818/7048915)
We can use pytest hook (`pytest_collection_modifyitems`) to dynamically skip test cases based on argument values.

```py heading="Pytest skipif based on arguments"
# In conftest.py

def pytest_addoption(parser):
    parser.addoption(
        "--host", action="store_true", default=False, help="Environment Prod or Engg"
    )

def pytest_collection_modifyitems(config, items):
    host_marker = config.getoption("--host"):
    if host_marker in ['prod', '']:
        return
    skip_if_host_engg = pytest.mark.skip(reason="host should be prod")
    for item in items:
        if "skip_if_host_engg" in item.keywords:
            item.add_marker(skip_if_host_engg)


# In testfile

@pytest.mark.skip_if_host_engg
def test_stats_for_live_chat():
  pass
```

## MISC UTIL

### Round Robin Ticket Assigner

We have an `{agent_name:weightage}` dictionary with us based on which we need to assign tickets in a round robin manner.

1. go over each agent one by one
1. if agent has capacity to accept ticket
    1. give them one ticket
    1. reduce capacity by one
1. repeat step 1 & 2 till all agents have reached 0 capacity

```py heading="Round Robin Assigner"
agent_ticket_dict = {'Rahul': 3, 'Ramesh': 1, 'Rajesh': 0, 'Rakesh': 3, 'Brijesh': 4}
tags_list = []
sum_counts = sum(agent_ticket_dict.values())
print("Agent:Number of Tickets:"+ str(agent_ticket_dict))
print(f"Number of Agents for this run: {len(agent_ticket_dict)}")
print(f"Total Tickets that will be assigned: {sum_counts}")

assigner_exhausted = False
while not assigner_exhausted:
    for agent in agent_ticket_dict:
        if agent_ticket_dict[agent]:
            tags_list.append('to_do_'+agent)
            agent_ticket_dict[agent] -= 1
    print(f"Assigner State:\n{agent_ticket_dict}")
    sum_counts = sum(agent_ticket_dict.values())
    print(f"Remaining Tickets that will be assigned: {sum_counts}")
    if not sum_counts:
        assigner_exhausted = True
```

---

### Using map to get sum of a 2D array

```py heading="use map to get sum of 2d array"
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
sum_arr = sum(map(sum, arr))
print('Sum of 2D Array:', sum_arr)
```

```py heading="Using map to get count of elements starting with specified letter"
test_list = ['Start', 'SSS', 'Strong', 'Table']
total_elems_starting_with_S = sum(map(lambda x:1 if x[0] == "S" else 0, test_list))
print(total_elems_starting_with_S)
```

---

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

```py heading="Get files using glob module"
import glob, os
with open('test.py', 'w') as f:
  f.write('import os')
files = glob.glob(os.getcwd()+'/*.py')
print(files)
```

- We get a list of files with their exact paths

- Using fnmatch

```py heading="Get files using fnmatch"
import fnmatch, os
with open('test.py', 'w') as f:
  f.write('import os')
files = fnmatch.filter(os.listdir(), '*.py')
print(files)
```

- We can see that fnmatch returns the filename only
- To create the fullpath, we would need to use `os.path.join` on current_dir and filename

Note: The `glob` module uses the os and fnmatch module internally.

---

### [Sending List/Array as data while making a request](https://stackoverflow.com/a/35535240/7048915)

Suppose you want to send something like:

```json heading="Sample JSON"
[{"name": "ayush"}, {"name": "mandowara"}]
```

as data, when making a request. You can do this very easily with the `requests` library.

```py heading="Making post request with array in request body"
import requests

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

---

### [Supress error of Subprocess check Output](https://stackoverflow.com/a/31683402/7048915)

In case you call a process via subprocess, but do not wish to see the error in case it throws one,

- Just redirect the standard error (`stderr`) to `DEVNULL`

```py heading="Supress subprocess error output"
import subprocess as subp
subp.check_output("<Call the Process>", stderr=subp.DEVNULL)
```

---

### [Make multilevel directories](https://www.geeksforgeeks.org/python-os-makedirs-method/)

Suppose you want to create folders in a path such as `test\inner_folder\main\`, but `inner_folder` does not exist,
you can use `os.makedirs`

```py heading="Multilevel dictionary generation using 'os' module"
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

---

### [Store temporary information to Temp Folder](https://stackoverflow.com/questions/847850/cross-platform-way-of-getting-temp-directory-in-python)

There could be situtation where you are generating files that are only relevant during the execution of your script and are not meant to be stored for long term purposes.
Moreover, you don't want these files to be tracked by Git. While you could add these to .gitignore, a much cleaner way would be to use the Temp folder provided by the OS itself.
Let's say you want to create a lock file during the execution of a particular script so that another instance of the script does not override current execution,

```py heading="Creating lock file in temporary folder"
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

```py heading="Creating tempory file using 'tempfile.TemporaryFile'"
import tempfile
f = tempfile.TemporaryFile()
f.write('temporary info')
```

---

### [Restore Timestamps of Extracted Files](https://stackoverflow.com/a/48129136/7048915)

Usually when a zip is extracted, the timestamps of the files are the ones corresponding
to the time the file was extracted at. This causes problems when we want to find out the
most recent file from a list of files. To fix this problem, we can restore the timestamps
of the file by reading them from the original zip file.

Just call the `restore_timestamps_of_zip_contents` function after extraction is done:

```py heading="Restore Timestamps of extracted files"
def restore_timestamps_of_zip_contents(self, zipname, extract_dir):
    """Restores the timestamps of zipfile contents after extraction

    Parameters
    ----------
    zipname: str
        zipname path which was extracted
    extract_dir: str
        where the zip was extracted

    Returns
    -------
    None
    """

    try:
        for f in ZipFile(zipname, 'r').infolist():
            # path to this extracted f-item
            fullpath = os.path.join(extract_dir, f.filename)
            # still need to adjust the dt o/w item will have the current dt
            date_time = time.mktime(f.date_time + (0, 0, -1))
            # update dt
            os.utime(fullpath, (date_time, date_time))
    except:
        logging.warning(traceback.print_exc())

```

---

### [Binomial Coefficent - <sup>n</sup>C<sub>r</sub>](https://stackoverflow.com/a/4941932/7048915)

To calculate `nCr`, use the inbuilt moduel in the math library:

```py
from math import comb
comb(10,3)
```

---

### [Python not able to detect folders as packages](https://stackoverflow.com/questions/24722212/python-cant-find-module-in-the-same-folder)

There are times when you have a proper folder structure for a project, but python cannot interpret that you are importing a file from within the project directory.
One way is to make calls from a proper starting point, which as the root of the directory and change your import statements relative to the starting point. However, this is a tedious process.
A better hack is to append your project folder in system path using the `sys` module.
In the file where you are importing the other file as a module, add this to the top:

```py heading="Add project root to Python Path during run-time"
import sys
sys.path.append('/path/to/project_folder')
```

Now, Python will look for this folder when importing modules as well.

---

### [Upgrade Pip in Venv](https://stackoverflow.com/a/58627923/7048915)

While using Python, you will see the warning about how you are using an old version of pip quite a lot.
This is especially annoying because you cannot seemingly upgrade pip in a venv due to an `Acess Denied` eror.
Well worry not, the fix is more simple than you think.

Just run this

```
py -m pip install --upgrade pip #this is correct
```

Instead of this

```
pip install --upgrade pip
```

This is because when you run without the `py` command, `pip` is trying replace itself,
i.e. a running process is supposed to be uninstalled, which is denied by some Operating Systems.
When you use it with `py`, the upgrade command is running inside a python shell, and hence this problem is avoided.

---
