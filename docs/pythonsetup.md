---
title: How to install Python on your computer
---

Diese Seite ist auch [auf Deutsch](../pythonsetup_de) verfügbar.

# Preconditions

In order to install Python on your system you need to do the steps
in _"[Set up your installation environment](../envsetup)"_ first.   
See the _"[Start page](../index)"_ for an overview.

# Download the correct Python installer

**Mac-OS users**: please ignore this step. We will use Homebrew to install
the needed software.

The starting point for installing Python is the
[Download page on www.python.org](https://www.python.org/downloads/).

There you can select the version for your operating system. Unless you have a *very old*
computer the correct versions will be the ones marked as _64bit_.

For Windows this would be the *Windows x86-64 executable installer*.
The Windows installer does have "amd64" in it's name. Dont worry - this is the correct
installer even if you have a computer with an Intel CPU.

**Attention**: If you still use Windows XP (you really should not!) the latest supported
Python version is 3.4. Don't try to use a newer version on this operating system.

The Windows installer is a normal *.exe*-file which can be run from the download folder.

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
3. Close the windows shell and open a new one.
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

For the installation on the Mac we will use Homebrew. If you don't already use Homebrew
please have a look at [its homepage](https://brew.sh).

1. Open a terminal window (see [Set up your installation environment](../envsetup) how
   to do it).  
   Enter the following command:  
   ```Shell
   brew --version
   ```
   When the result is `brew: command not found` you don't have Homebrew installed. In this case
   do step 2.  If you already have Homebrew installed continue with step 3.
2. Copy the installation command from the Homebrew homepage or from here:  
   ```Shell
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```
   The command explains what it does - simply acknowledge all steps. Running the
   program make take some time. When the command finishes do point 1 again to check that
   Homebrew is working.
3. To install Python use the following command:   
   ```Shell
   brew install python
   ```
   It will take some time to install all the dependencies. Please ignore any messages about
   `keg-only` packages.
4. Run the following command:   
   ```Shell
   python3 --version
   ```
   This command must work without any error and it should print the version number of
   your Python installation.
5. The next command should also work without error and print the version number
   of the pip command:   
   ```Shell
   pip3 --version
   ```

Now you have two working Python installations on your Mac-OS:  Python 2.7 (provided by Apple)
and a Python 3 version installed by Homebrew. To use the newly installed version you have
to use the command names python3 and pip3 instead of python or pip.

# Result

You got a working Python installation which can be used for the next installation steps.

Now go back to the _"[Start page](../index)"_ and follow the instructions to install git.