---
title: Windows Tips
description: Some generic tips and tricks that will make life easier as a Windows User
date: "2020-11-14"
image: "windows.png"
author: "Ayush"
tags: ["windows"]
---

# [Run apps in Admin Mode](https://superuser.com/questions/453409/how-can-i-always-run-the-command-prompt-as-administrator)

```
- Press `Win` key to open taskbar search
- Type in app name, ex, `CMD`
- To open the highlighted app in ADMINISTRATOR Mode,
  -> Press: `<ctrl>`+`<shift>`+`<enter>`

Note: If you don't want see the UAC prompt all the time,
- Type `UAC` in taskbar search
- Open `Change User Account Settings`
  -> Lower the setting to `Never Notify`
```

# [Run BAT files with Admin Privileges](https://stackoverflow.com/a/52517718/7048915)

At the top your `bat` file, add the following:

```
set "params=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )
```

It will elevate to admin and also stay in the correct directory.
If you want to kill the prompt after execution, you can add `exit` at the end of your `bat` file. [Source](https://stackoverflow.com/questions/6811372/how-to-code-a-bat-file-to-always-run-as-admin-mode/52517718#comment105688977_52517718)

# [Store Powershell output](https://www.windowscentral.com/how-save-command-output-file-using-command-prompt-or-powershell)

There might be times where you want to run a powershell command, and store it's output to be used in another script.
You can use the Out-File parameter to store the output in a text file.
For example, to store whether BIOS Virtualization is enabled or disabled in a system

```
Get-ComputerInfo -property "HyperVRequirementVirtualizationFirmwareEnabled" | Out-File -FilePath $HOME\virtualization.txt
# <powershell command> | Out-File -FilePath <FilePath>
```

The command out will be saved in the filepath mentioned (here: C:\users\<username>\virtualization.txt as \$HOME is expanded automatically)

# [Disabling Cursor Blink](https://stackoverflow.com/a/59807009)

In apps such as command promt, inside which you can open programs such as nvim, you will see a blinking cursor.
If you are like me, you don't really want the cursor to blink, it is visible on it's own.
To disable cursor blink,

1. Go to Run prompt (`Win+R`)
2. Paste this in the prompt:
   ```
   control main.cpl keyboard
   ```
3. Press Enter/Ok to open the Keyboard Properties Dialogbox
4. Set cursor blink rate to None in the slider
5. Select Ok and the cursor will stop blinking.

Note: In gVim, you can disable cursor blinking via adding the following in your .vimrc

```
set guicursor=a:blinkwait0      " remove cursor blinking
```

# [Enable/Disable BlueTooth using Command Line](https://superuser.com/a/1293303/1242234)

If you are like me and live inside the terminal, your taskbar will always be hidden.
It is therefore a pain when you have to enabe/disable bluetooth.
For that, you can use this powershell script below:

```
[CmdletBinding()] Param (
    [Parameter(Mandatory=$true)][ValidateSet('Off', 'On')][string]$BluetoothStatus
)
If ((Get-Service bthserv).Status -eq 'Stopped') { Start-Service bthserv }
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | ? { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
Function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}
[Windows.Devices.Radios.Radio,Windows.System.Devices,ContentType=WindowsRuntime] | Out-Null
[Windows.Devices.Radios.RadioAccessStatus,Windows.System.Devices,ContentType=WindowsRuntime] | Out-Null
Await ([Windows.Devices.Radios.Radio]::RequestAccessAsync()) ([Windows.Devices.Radios.RadioAccessStatus]) | Out-Null
$radios = Await ([Windows.Devices.Radios.Radio]::GetRadiosAsync()) ([System.Collections.Generic.IReadOnlyList[Windows.Devices.Radios.Radio]])
$bluetooth = $radios | ? { $_.Kind -eq 'Bluetooth' }
[Windows.Devices.Radios.RadioState,Windows.System.Devices,ContentType=WindowsRuntime] | Out-Null
Await ($bluetooth.SetStateAsync($BluetoothStatus)) ([Windows.Devices.Radios.RadioAccessStatus]) | Out-Null
```

Store this file as `bl.ps1`

Now, you can call it from within powershell or command prompt.
To enable Bluetooth

```
.\bl.ps1 -BluetoothStatus On
```

To disable Bluetooth

```
.\bl.ps1 -BluetoothStatus Off
```

To simplify the process even further, you can store the path of this file in path so you can access it from anywhere.
Moreover, you can create batch scripts for both the scenarios, and add these batch scripts to path as well.

```heading="blon.bat"
powershell -command bl.ps1 -BluetoothStatus On
```

```heading="bloff.bat"
powershell -command bl.ps1 -BluetoothStatus Off
```
