---
title: Set up your installation environment
---

Diese Seite ist auch [auf Deutsch](./envsetup_de) verfügbar.

To make all installation steps easier I will give you the exact steps for installation.
The first step is the preparation of your environment. All other steps depend on this
first step.     
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

1. Open your terminal application - either by looking for it in the Applications/Utilities folder
   or by using Spotlight. For using Spotlight simply press Cmd-Space and type the first letters
   of your application name - `ter` should be enough to find the Terminal application. If it's
   selected press Enter.
   On Linux or other Unix system it highly depends on your environment how to do it. On text
   only systems you don't have to do anything special - you are using a terminal right after logging
   into the system.  
   
2. On Mac-OS your running shell should be the `Bourne again shell`(bash). If you use Linux it should
   be bash too - on other Unix like systems you have to adapt the following steps for your shell.   
   To check your running shell exec ute the following command:
   ```Shell
   env | grep ^SHELL=
   ```
   This should print out: `SHELL=/bin/bash`  or `SHELL=/usr/bin/bash`  or even `SHELL=/usr/local/bin/bash`  
   The important part is that the last word is `bash`.  
   
3. Enter the following commands:
    ```Shell
    cd
    echo "export PHOTOFORUM=${HOME}/PhotoForum" >> .bash_profile
    ```   
    
4. Close your terminal window and open a new one (see step one). Enter the following command:
   ```Shell
   env | grep PHOTOFORUM
   ```
   This should print out something like: `PHOTOFORUM=/Users/Tim/PhotoForum` where Tim is your
   user name. On Linux and other Unix like systems it is more likely: `PHOTOFORUM=/home/Tim/PhotoForum`.   
   
5. Now enter the following commands:
   ```Shell
   mkdir ${PHOTOFORUM}
   cd ${PHOTOFORUM}
   ```
   This should work without any errors. The command `pwd` should print out `/Users/Tim/PhotoForum` or
   `/home/Tim/PhotoForum` now.


# Result

The result of your work is the defined environment variable and the top level directory
which will contain all needed tools to run Photo-Forum.

Now go back to the _"[Start page](../index)"_ and follow the instructions to install Python.
