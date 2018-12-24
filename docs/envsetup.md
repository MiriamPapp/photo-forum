---
title: Set up your installation environment
---

Diese Seite ist auch [auf Deutsch](./envsetup_de) verfügbar.

To make all installation steps easier I will give you the exact steps for installation.
It will make available all needed software for your current system user and it will keep
all needed pieces together as much as possible.   
The whole installation will be done in your _home directory_ and all the steps depend
on setting up an environment variable called `PHOTOFORUM`. The value of this variable
is the top level directory of your installation.

# Setup on MS Windows

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
   Click on "New" at the upper row of buttons. This opens the next dialogue where you can
   enter the name and the value of an environment variable.   
   ![Variable](../img/variable.png)
6. Enter `PHOTOFORUM` into the Variable name field.
   Then enter `%USERPROFILE%\PhotoForum` into the Variable value field. and click on OK.
7. Restart your computer.
8. After your computer comes up again do the things from step 1 again, so that you have
   an open shell window. Enter the following command:   
   ```Batchfile
   mkdir %PHOTOFORUM%
   ```
9. If you enter the following command it should work without any error.   
   ```Batchfile
   cd %PHOTOFORUM%
   ```

# Setup on Mac-OS (or Linux/Unix)

bla bla bla

# Result

The result of your work is the defined environment variable and the top level directory
which will contain all needed tools to run Photo form.

Now go back to the _"[Start page](../index)"_ anf follow the instructions to install Python.