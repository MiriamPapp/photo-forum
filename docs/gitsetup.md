---
title: How to install git on your computer
---

Diese Seite ist auch [auf Deutsch](../gitsetup_de) verfügbar.

# Preconditions

In order to install Python on your system you need to do the Steps
in _"[Set up your installation environment](../envsetup)"_ first.   
See the _"[Start page](../index)"_ for an overview.

# Installation on MS Windows

1. Open the [git download page](https://git-scm.com/downloads). There you see a monitor
   displayed at the right side which contains a button to start the download. Click on
   this button. Your download should start now. Save the git installer to your `Downloads` folder.
2. Now open a windows shell (see [Set up your installation environment](../envsetup) how
   to do it). Enter the following command (this is only one line!):   
   ```Shell
   %USERPROFILE%\Downloads\Git-2.20.1-64-bit.exe /SILENT /DIR=%PHOTOFORUM%\git
   ```
   This installs git and modifies the PATH environment variable for the current Windows
   user.  
   Of course replace the file name (`Git-2.20.1-64-bit.exe`) with the name of the installer
   that you downloaded.
3. Close the windows shell and open a new one.
4. Enter the following command:   
   ```Shell
   git --version
   ```
   This command must work without any error and it should print the version number of
   your git installation.

# Installation on Mac-OS

For the installation on the Mac we will use Homebrew. You already needed
Homebrew for the [Python installation](../pythonsetup).

1. Open a terminal window (see [Set up your installation environment](../envsetup) how
   to do it).  
   Enter the following command:  
   ```Shell
   brew install git
   ```
   This will install git under /usr/local
2. Run the following command:   
   ```Shell
   git --version
   ```
   This command must work without any error and it should print the version number of
   your git installation.

# Result

You got a working git installation which can be used for the next installation steps.

Now go back to the _"[Start page](../index)"_ and follow the instructions to install the aws tools.