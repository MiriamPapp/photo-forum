---
title: How to install node.js on your computer
---

Diese Seite ist auch [auf Deutsch](../nodesetup_de) verfügbar.

# Installation on MS Windows

1. Open the [node.js download page](https://nodejs.org/). There you see two download
   buttons - one for the LTS (Long Term Support) version, one for the current version.
   Please use the LTS version - simply click on the green field to save the node.js
   installer to your `Downloads` folder.
2. Use the Windows Explorer to navigate to your Downloads folder and double click on
   the downloaded file (its name is something like `node-v10.15.0-x64.msi`).
3. During the installation you have to accept the license terms.
4. Accept all settings during installation (don't change anything). Especially the
   setting to add node to the PATH has to be kept.
5. Now open a windows shell (see [Set up your installation environment](../envsetup) how
   to do it). Enter the following command:   
   ```Shell
   node --version
   ```
   This command must work without errors and it has to display the version number
   of your node command.   
   Now enter this command:   
   ```Shell
   npm --version
   ```
   This command must also work without any error and it should print the version number of
   your npm command.
6. Now install the Typescript compiler globally. Use the following command:   
   ```Shell
   npm install -g typescript
   ```
   If all went well, the following command prints the version number of the Typescript compiler - it must be higher than 3.2:  
   ```Shell
   tsc -v
   ```
7. Now install the Angular-CLI (also globally);
   ```Shell
   npm install -g @angular/cli
   ```
   The result can be checked with the following command. It must print out some informations about
   your Angular install:  
   ```Shell
   ng version
   ```


# Installation on Mac-OS

For the installation on the Mac we will use Homebrew. You already needed
Homebrew for the [Python installation](../pythonsetup).

1. Open a terminal window (see [Set up your installation environment](../envsetup) how
   to do it).  
   Enter the following command:  
   ```Shell
   brew install nodejs
   ```
   This will install node and npm under /usr/local
2. Run the following command:   
   ```Shell
   node --version
   ```
   This command must work without any error and it should print the version number of
   your node command.
3. Run the following command:   
   ```Shell
   npm --version
   ```
   Also this command must work without any error and it should print the version number of
   your node package manager.
4. Now install the Typescript compiler globally. Use the following command:   
   ```Shell
   npm install -g typescript
   ```
   If all went well, the following command prints the version number of the Typescript compiler - it must be higher than 3.2:  
   ```Shell
   tsc -v
   ```
5. Now install the Angular-CLI (also globally);
   ```Shell
   npm install -g @angular/cli
   ```
   The result can be checked with the following command. It must print out some informations about
   your Angular install:  
   ```Shell
   ng version
   ```


# Result

You got a working node.js installation which can be used for your administrative tasks.
You have also install Angular-cli and the compiler for the Typescript language.

Now go back to the _"[Prerequisites page](../prerequisites)"_ and follow the instructions to install git.