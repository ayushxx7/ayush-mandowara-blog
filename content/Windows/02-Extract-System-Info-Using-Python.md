---
title: Get Machine Information using Python
description: A collection of commands required to be run using Python 3 to extract all relevant Information about a user's machine
date: "2021-04-19"
image: "windows.png"
author: "Ayush"
tags: ["windows", "python"]
---

# PUPROSE

Extracting Information such as OS, RAM, Virtualization State, GPU.

There are a couple of modules in Python that we will require to extract information about user's machine.

```py
import ctypes
import locale
import platform
import subprocess
import requests
import psutil
import wmi
import os
```

## About the Libraries

### [subprocess](https://docs.python.org/3/library/subprocess.html)

- Subprocess is a module that helps us run commands like we were running them in the Windows sheel (Command Prompt)
- We can use this feature to run Powershell Commands for information that cannot be directly or reliably extracted using Python modules

Whenever using the subprocess module, the approach will be:

- Create a list like command
- Pass the list to subprocess.Popen
- PIPE out the standard output
- Decoded the response using `utf-8`
- Use Split operation to extract the relevant portion of the output
- Strip the output received

### [platform](https://docs.python.org/3/library/platform.html)

- Provides system level information

### [requests](https://pypi.org/project/requests/)

- to make HTTP requests (GET/POST)

### [psutil](https://psutil.readthedocs.io/en/latest/)

- To get information about running processes & system utilization (CPU, memory, disk space, network usage etc.)

### [wmi](https://pypi.org/project/WMI/)

- A wrapper for pywin32
- WMI stands for Windows Mangement Instrumentation, and it helps in managing devices and applications

### [ctypes](https://docs.python.org/3/library/ctypes.html)

- call functions from DLLs or shared libraries
- It provides C Compatible [data types](https://docs.python.org/3/library/ctypes.html#fundamental-data-types) for Python

### [locale](https://docs.python.org/3/library/locale.html)

- A locale is the definition of the subset of a user's environment that depends on language and cultural conventions.
- Things like Case Convention, Numberic Formatting, Date-Time Formats etc. depend on user's locale
- The locale module exposes POSIX locale database
- It simplifies issues when developing an app/system that can be used by people with different cultural backgrounds/locations

### [os](https://docs.python.org/3/library/os.html)

Provides common utility functions such as

- listing files in a directory,
- changing/removing/adding directories
- extracting file paths
- joining paths (OS independent)
- checking if a file exists
- and many more...

## Extracting Machine Information

```py heading="Full Operating System Name"
process = subprocess.Popen(["powershell", "Get-WmiObject Win32_OperatingSystem | select Caption -ExpandProperty Caption"], stdout=subprocess.PIPE)
operating_sytem = process.communicate()[0].decode('utf-8').strip()
```

```py heading="OS Version (like 10.0, 8.1)"
uname = platform.uname()
os_ver = str(float(uname.release))
```

```py heading="OS Version (similar to running version on cmd)"
# To get Version that will be received when enter the `ver` command in command prompt, we can use platform.platform()

ver_list = platform.platform().split('-')[2].split('.')
os_ver = f"{ver_list[0]}.{ver_list[1]}"
```

```py heading="CPU Name"
cpu = subprocess.check_output(["wmic","cpu","get", "name"]).decode('utf-8').split('\n')[1].strip()
```

```py heading="Number of Processors"
num_cpus = os.cpu_count()
```

```py heading="GPU Name"
computer = wmi.WMI()
gpu_info = computer.Win32_VideoController()[0].name
```

```py heading="GPU Driver Version"
subprocess.Popen(["powershell", "Get-WmiObject Win32_PnPSignedDriver | select devicename, driverversion"], stdout=subprocess.PIPE)
decoded = process.communicate()[0].decode('utf-8', 'ignore')
gpu_ver = decoded.split(gpu_name)[1].split('\n')[0].strip()
```

```py heading='Extracting RAM (excludes ram consumed by Partitions)'
process = subprocess.Popen('systeminfo', stdout=subprocess.PIPE)
decoded = process.communicate()[0].decode('utf-8', 'ignore')
if 'Mmoire physique totale:' in decoded:
  ram = decoded.split('Mmoire physique totale:')[1].split('Mo')[0].strip().replace(',', '')
else:
  ram = decoded.split('Total Physical Memory:')[1].split('MB')[0].strip().replace(',', '')
```

```py heading="RAM (Total Machine Ram)"
ram = str(round(psutil.virtual_memory().total / (1024.0 **3)))+" GB"
ram = platform.machine()
```

```py heading="OS Locale (like en-in)"
windll = ctypes.windll.kernel32
current_locale = locale.windows_locale[windll.GetUserDefaultUILanguage()]

# To get output similar what you will get in C# current system culture library
localization = locale.getdefaultlocale()
```

```py heading="Public IP Address"
ip_address = requests.get("https://api.ipify.org/?format=json").json()['ip']
```

```py heading="Virtualization (Raw/Plus)"
process = subprocess.Popen(["powershell",'Get-ComputerInfo -property "HyperVRequirementVirtualizationFirmwareEnabled"'],stdout=subprocess.PIPE);
decoded = process.communicate()[0].decode('utf-8')
result = decoded.strip().split('\n')[2].strip()

if "HyperVRequirementVirtualizationFirmwareEnabled" in decoded and not str(result) == "False":
  virtualization = "Raw Mode"
else:
  virtualization = "Plus Mode"
```

```py heading="Dot Net Version (Full)"
process = subprocess.Popen(["powershell", r'Get-ChildItem "HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP" -Recurse | Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match "^(?!S)\p{L}"} | Select PSChildName, version | grep "Full"'], stdout=subprocess.PIPE)
decoded = process.communicate()[0].decode('utf-8')
dot_net_ver = decoded.split('Full ')[1].strip()
```
