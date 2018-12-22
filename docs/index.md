---
---
Diese Seite ist auch [auf Deutsch](./index_de) verfügbar.

**Attention**: This is work in progress and in a very early stage. There is nothing usable yet.

# Introduction

Photo forum is a set of documentation, configuration files, and software which enables
anyone to run a community with very low financial requirements and without the need
to accept restrictions and regulations of community providers.

Photo forum is designed to run on cloud services of Amazon Web Services (AWS). Only
cheap services are used - all of them serverless. So you pay only for what you use
and often there is a free contingent for many services on AWS.

# Prerequisites

If you want to host Photo forum you will need some things in advance. There are descriptions
how to set up all the needed stuff.

* **computer**  
  This is a real requirement. You need a computer. A tablet or smartphone will not be enough.
  Any computer will do - running MS-Windows, Mac-OS, Linux or any other Unix like system.
* **AWS-account**  
  Because you will run the service on AWS you need an account there. AWS requires to give them
  a payment method in advance. Don't be afraid to do that - you can set limits and alarms for your
  costs and the software has a low footprint regarding costs. Normally you have to pay nothing
  within the first year and after that the costs are very low.   
  To set up an account follow the instructions in
  _"[How to set up your AWS account](../awssetup)"_.
* **Python**  
  Several used tools require an installed Python interpreter.
  [Python is a programming language](https://www.python.org/)
  which is available for nearly every computer system. Please use the most current Python version
  for installation. Even if your system already contains a Python version provided by your operating
  system (for example Mac-OS) you should install a private copy of Python to not interfere with
  system tools.  
  To set up Python on your computer follow the instructions in
  _"[How to install Python on your computer](../pythonsetup)"_.
* **git**  
  [git](https://git-scm.com) is a modern decentralized source code management system. You will use
  it to get all the files for your installation and to keep them up to date.   
  To set up git on your computer follow the instructions in
  _"[How to install git on your computer](../gitsetup)"_.