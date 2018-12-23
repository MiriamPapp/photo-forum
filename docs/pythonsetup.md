---
title: How to install Python on your computer
---

Diese Seite ist auch [auf Deutsch](./pythonsetup_de) verfügbar.

# Download the correct Python installer

The starting popint for installing Python is the
[Download page on www.python.org](https://www.python.org/downloads/).

There you can select the version for your operating system. Unless you have a *very old*
computer the correct versions will be the ones marked as _64bit_.

For Windows this would be the *Windows x86-64 executable installer*.   For Mac-OS it should
be the *macOS 64-bit installer*.   
The Windows installer does have "amd64" in it's name. Dont worry - this is the correct
installer even if you have a computer with an Intel CPU.

The Windows installer is a normal *.exe*-file which can be run from the download folder
or even directly from the download dialogue within your internet browser.   
The Mac-OS installer is in the package format which can be run by a double click.

# Installation on MS Windows

There is a whole
[section on installing Python](https://docs.python.org/3/using/windows.html) in the
*Python Setup and Usage* guide on docs.python.org.

It describes several ways to install Python so you would still have to decide
some things that you possibly can't decide because of missing information or experience.

To make all installation steps easier I will give you the exact steps for installation.
It will make available all needed software for your current system user and it will keep
all needed pieces together as much as possible.   
The whole installation will be done in your _home directory_.

1. Open a shell window (called command line on windows). On Windows 7 click on the
   *Start*-Button and enter `cmd` into the serch field, then press Enter.  On Windows 8
   and Windows 10 there should be a search field for Cortana where you can enter `cmd`
   and press Enter then.   
   The System should display some results now which contain the entry `cmd.exe`.   
   Click on the `cmd.exe` entry end press Enter. This should open a black window
   which displays something like `C:\Users\Tim` - where Tim is your user name on
   the Windows system:    
   ![Windows shell](../img/Cmd_in_Windows_8.png)
2. If the window is too small you can use the `mode` command to set a new window size:   
   `mode 140,5000`   
   The above command sets the width of the window to 140 characters and the history buffer
   to 5000 lines. You should adjust the window height after that - most likely it will
   exceed your desktop after the mode command.
3. Enter the command:  
   `SystemPropertiesAdvanced`  and press Enter.  
   This opens the following window:  
   ![Advanced System properties](../img/SystemPropertiesAdvanced.png)
4. Click on `Environment Variables...`.  
   This shows the next window:   
   ![Environment variables](../img/winpath.jpg)
5. At the upper field you can set environment variables for the current user. Variables
   set here also survive system reboots.  
   We will use one variable for all following installation steps so even if you want to use
   an existing Python installation on your system you have to do the variable definition.   
   Click on "New" at the upper row of buttons. This opens the next dialogue where you can
   enter the name and the value of an environment variable.   
   ![Variable](../img/variable.png)
6. Enter `PHOTOFORUM` into the Variable name field.
   Then enter `%USERPROFILE%\PhotoForum` into the Variable value field. and click on OK.
7. Restart your computer.
8. After your computer comes up again do the things from step 1 again, so that you have
   an open shell window.