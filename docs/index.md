---
title: How to host a Photo-Forum
subtitle: 'posted: 2018-12-24'
---
Diese Seite ist auch [auf Deutsch](./index_de) verfügbar.

**Attention**: This is work in progress and in a very early stage. There is nothing usable yet.

# Introduction

[Photo-Forum](https://github.com/fte378/photo-forum)
is a set of documentation, configuration files, and software which enables
anyone to run a community with very low financial requirements and without the need
to accept restrictions and regulations of community providers.

Photo-Forum is designed to run on cloud services of Amazon Web Services (AWS). Only
cheap services are used - all of them serverless. So you pay only for what you use
and often there is a free contingent for many services on AWS.

# Prerequisites

If you want to host Photo-Forum you will need some things in advance. There are descriptions
how to set up all the needed stuff. The users of the forum will need their Internet browser
only - they don't have to set anything up. The following first requirement is only needed
for the person hosting a Photo-Forum. The users will use their usual device (PC, tablet, smartphone).

**Please** follow the installation steps to the point - don't omit things, don't do them differently.
This will only create frustration and support overhead.

1. **Computer**  
  This is a real requirement. You need a computer. A tablet or smartphone will not be enough.
  Any computer will do - running MS-Windows, Mac-OS, Linux or any other Unix like system.
2. **Installation environment**  
  To make all installation steps easier I will give you the exact steps for installation.  
  It will make available all needed software for your current system user and it will keep
  all needed pieces together as much as possible.   
  The whole installation will be done in your _home directory_.   
  Please follow the steps described in _"[Set up your installation environment](./envsetup)"_ first.
3. **Python**  
  Several used tools require an installed Python interpreter.
  [Python is a programming language](https://www.python.org/)
  which is available for nearly every computer system. Please use the most current Python version
  for installation. Even if your system already contains a Python version provided by your operating
  system (for example Mac-OS) you should install a private copy of Python to not interfere with
  system tools.  
  To set up Python on your computer follow the instructions in
  _"[How to install Python on your computer](./pythonsetup)"_.
4. **node.js and npm**   
   [node.js](https://nodejs.org/en/) is a JavaScript runtime which also contains the
   packet manager `npm` for Javascript packages. It will be used for management tasks.  
   To set up node.js on your computer follow the instructions in
   _"[How to install node.js on your computer](./nodesetup)"_.
5. **git**  
  [git](https://git-scm.com) is a modern decentralized source code management system. You will use
  it to get all needed files for your installation and to keep them up to date.   
  To set up git on your computer follow the instructions in
  _"[How to install git on your computer](./gitsetup)"_.
6. **AWS tools**  
  AWS is handled through the aws command line. To set up the needed tools follow the instructions in
  _"[How to install the aws tools on your computer](./awstoolssetup)"_.
7. **AWS-account**  
  Because you will run the service on AWS you need an account there. AWS requires you to give them
  a payment method in advance. Don't be afraid to do that - you can set limits and alarms for your
  costs and the software has a low footprint regarding costs. Usually you have to pay nothing
  within the first year and after that the costs are very low.   
  To set up an account follow the instructions in
  _"[How to set up your AWS account](./awssetup)"_.
