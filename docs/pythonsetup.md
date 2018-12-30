---
title: How to install Python on your computer
---

Diese Seite ist auch [auf Deutsch](../pythonsetup_de) verfügbar.

# Preconditions

In order to install Python on yourt system you need to do the Steps
in _"[Set up your installation environment](../envsetup)"_ first.   
See the _"[Start page](../index)"_ for an overview.

# Download the correct Python installer

The starting point for installing Python is the
[Download page on www.python.org](https://www.python.org/downloads/).

There you can select the version for your operating system. Unless you have a *very old*
computer the correct versions will be the ones marked as _64bit_.

For Windows this would be the *Windows x86-64 executable installer*.   For Mac-OS it should
be the *macOS 64-bit installer*.   
The Windows installer does have "amd64" in it's name. Dont worry - this is the correct
installer even if you have a computer with an Intel CPU.

**Attention**: If you still use Windows XP (you really should not!) the latest supported
Python version is 3.4. Don't try to use a newer version on this operating system.

The Windows installer is a normal *.exe*-file which can be run from the download folder
or even directly from the download dialogue within your internet browser.   
The Mac-OS installer comes in package format which can be run by a double click.

# Installation on MS Windows

There is a whole
[section on installing Python](https://docs.python.org/3/using/windows.html) in the
*Python Setup and Usage* guide on docs.python.org.

It describes several ways to install Python so you would still have to decide
some things that you possibly can't decide because of missing information or experience.
So I will give you **one** method to install Python. It will be installed for the current
Windows user only and will be completely contained inside the directory marked by the
`PHOTOFORUM` environment variable.

1. When you download the Python installer don't run it directly from your browser
   but instead save it to your `Downloads` folder.
2. Now open a windows shell (see [Set up your installation environment](../envsetup) how
   to do it). Enter the following command (this is only one line!):   
   ```Shell
   %USERPROFILE%\Downloads\python-3.7.2-amd64.exe /passive TargetDir=%PHOTOFORUM%\py CompileAll=1 PrependPath=1 Include_test=0
   ```
   This installs Python and sets the PATH environment variable for the current Windows
   user.
3. Close the windwos shell and open a new one.
4. Enter the following command:   
   ```Shell
   python --version
   ```
   This command must work without any error and it should print the version number of
   your Python installation.
5. The next command should also work without error and print the version number
   of the pip command:   
   ```Shell
   pip --version
   ```

# Installation on Mac-OS
