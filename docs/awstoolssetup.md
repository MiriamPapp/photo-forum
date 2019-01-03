---
title: How to install the aws tools on your computer
---

Diese Seite ist auch [auf Deutsch](../awstoolssetup_de) verfügbar.

# Preconditions

In order to install the aws tools on your system you need to do the steps
in _"[Set up your installation environment](../envsetup)"_ 
and in _"[How to install Python on your computer](../pythonsetup)"_ first.   
See the _"[Start page](../index)"_ for an overview.

Amazon describes the
[installation of aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
on its website.

# Installation on MS Windows

1. Open a windows shell (see [Set up your installation environment](../envsetup) how
   to do it). Enter the following command (this is only one line!):   

   ```Shell
   pip install awscli --upgrade
   ```
   This installs the `aws` command. It is installed globally in your new Python installation.
2. Enter the following command:   
 
   ```Shell
   aws --version
   ```
   This command must work without any error and it should print the version number of
   your aws commandline installation.

# Installation on Mac-OS

1. Open a terminal window (see [Set up your installation environment](../envsetup) how
   to do it).  
   Enter the following command:

   ```Shell
   pip3 install awscli --upgrade
   ```
   This will install the AWS commandline tool in your Python installation and the
   binary in /usr/local/bin.
2. Run the following command:   
   
   ```Shell
   aws --version
   ```
   This command must work without any error and it should print the version number of
   your aws command line tool.
3. Now run the following command:

   ```Shell
   brew cask install aws-vault
   ```
   To check if the installation worked enter the following command:

   ```Shell
   aws-vault --version
   ```
   This command must work without any error and it should print the version number of
   your aws-vault tool.
   
# Result

You got a working aws tools installation which will be used for handling the AWS infrastructure setup.

Now go back to the _"[Start page](../index)"_ and follow the instructions to create your AWS accounts.