---
title: Get Machine Information using Python
description: A collection of commands required to be run using Python 3 to extract all relevant Information about a user's machine
date: "2021-04-28"
image: "windows.png"
author: "Ayush"
tags: ["windows", "python"]
---

# PUPROSE

Extracting Information such as OS, RAM, Virtualization State, GPU from a Windows Machine.

## Prerequisites

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

- Simulate running commands in Windows Command Prompt
- Run Powershell Commands for information that cannot be directly or reliably extracted using Python modules

Usage can be broken down into these steps:

- Create a list filled with parameters that would be joined to form a command such as:

  `os_info_cmd = ["powershell", "Get-WmiObject Win32_OperatingSystem | select Caption -ExpandProperty Caption"]`

- Pass the list to subprocess.Popen & Open a pipe to standard stream

  `subprocess.Popen(os_info_cmd, stdout=subprocess.PIPE)`

- Decode the response and ignore errors

  `decode('utf-8', 'ignore')`

- Use Split operation to extract the relevant portion of the output
- Strip the output received

### [platform](https://docs.python.org/3/library/platform.html)

- Provides system level information
- Provides access to underlying platform's identifying data

### [requests](https://pypi.org/project/requests/)

- HTTP for Humans
- Make GET/POST/PUT/DELETE requests with ease

### [psutil](https://psutil.readthedocs.io/en/latest/)

- To get information about running processes
- Get system utilization details such as CPU, memory, disk space, network usage etc.

### [wmi](https://pypi.org/project/WMI/)

- WMI stands for Windows Mangement Instrumentation
- wmi library is a wrapper for pywin32
- Helps in managing devices and applications

### [ctypes](https://docs.python.org/3/library/ctypes.html)

- provides C Compatible [data types](https://docs.python.org/3/library/ctypes.html#fundamental-data-types) for Python
- Helps in calling functions from DLLs or shared libraries

### [locale](https://docs.python.org/3/library/locale.html)

- [`LOCALE`](<https://en.wikipedia.org/wiki/Locale_(computer_software)>) is a set of parameters that defines the user's language, region and any special variant preferences that the user wants to see in their user interface. Usually a locale identifier consists of at least a language code and a country/region code.
- Things like Case Convention, Number Formatting, Date-Time Formats etc. depend on user's locale
- The `locale` module exposes POSIX locale database
- It simplifies the process of developing an app or system that can be used by people with different cultural backgrounds and/or locations.

### [os](https://docs.python.org/3/library/os.html)

Provides OS independent utility functions such as:

- listing files in a directory
- changing/removing/adding directories
- extracting file paths
- joining paths
- checking if a file exists

## Extracting Machine Information

### OS

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

### CPU

```py heading="CPU Name"
cpu = subprocess.check_output(["wmic","cpu","get", "name"]).decode('utf-8').split('\n')[1].strip()
```

```py heading="Number of Processors"
num_cpus = os.cpu_count()
```

### GPU

```py heading="GPU Name"
computer = wmi.WMI()
gpu_info = computer.Win32_VideoController()[0].name
```

```py heading="GPU Driver Version"
process = subprocess.Popen(["powershell", "Get-WmiObject Win32_PnPSignedDriver | select devicename, driverversion"], stdout=subprocess.PIPE)
decoded = process.communicate()[0].decode('utf-8', 'ignore')
gpu_ver = decoded.split(gpu_name)[1].split('\n')[0].strip()
```

### RAM

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

### LOCALE

```py heading="OS Locale (like en-in)"
windll = ctypes.windll.kernel32
current_locale = locale.windows_locale[windll.GetUserDefaultUILanguage()]

# To get output similar what you will get in C# current system culture library
localization = locale.getdefaultlocale()
```

### IP

```py heading="Public IP Address"
ip_address = requests.get("https://api.ipify.org/?format=json").json()['ip']
```

### VIRTUALIZATION

```py heading="Virtualization (Raw/Plus)"
process = subprocess.Popen(["powershell",'Get-ComputerInfo -property "HyperVRequirementVirtualizationFirmwareEnabled"'],stdout=subprocess.PIPE);
decoded = process.communicate()[0].decode('utf-8')
result = decoded.strip().split('\n')[2].strip()

if "HyperVRequirementVirtualizationFirmwareEnabled" in decoded and not str(result) == "False":
  virtualization = "Raw Mode"
else:
  virtualization = "Plus Mode"
```

### DOT NET VERSION

```py heading="Dot Net Version (Full)"
process = subprocess.Popen(["powershell", r'Get-ChildItem "HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP" -Recurse | Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match "^(?!S)\p{L}"} | Select PSChildName, version | grep "Full"'], stdout=subprocess.PIPE)
decoded = process.communicate()[0].decode('utf-8')
dot_net_ver = decoded.split('Full ')[1].strip()
```

---

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
