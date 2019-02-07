---
title: How to set up your AWS account
---

Diese Seite ist auch [auf Deutsch](../awssetup_de) verfügbar.

# Create your root account

**A warning first:** This setup description is created to assist people with
average computer knowledge. That's why it doesn't make use of more advanced
(and more secure) features of the AWS security system. Namely MFA and
cross-account access are not used.   
This also means that you should **NOT** use the here created AWS account for
any other activities on AWS. If you need an additional account create one with
a different e-mail address!  
If you already own an AWS account please create a new one for Photo-forum.   
If you use multiple accounts you can simplify the handling by using different
browsers for the different accounts - for example Firefox for one acocunt and
Chrome for the other.

First go to the [AWS homepage](https://aws.amazon.com/free/). If you never
created an accout at AWS it looks like this:

![Create Amazon account](../img/Amazon-Free-Tier.jpg)

To start creating a new account click on `Create a Free Account`. The process to create
the account is relatively straightforward. Amazon
[describes the process](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
in its knowledge base.  
It is also possible to start the account creation from the login form (which you get if
you click on `Sign In on the Console`).

Simply follow the instructions in the
[Amazon document](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/). This creates your so called "root account".   
AWS requires you to give them a payment method in advance.
Don't be afraid to do that - you can set limits and alarms for your
costs and the software has a low footprint regarding costs.   
Usually you have to pay nothing within the first year and after that the costs
are very low.

If you created your root account you can login and logout to/from AWS within the AWS console.   
Please ensure that you keep your login credentials safe and accessible!

# IAM users

For security reasons we will use
[IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
users for the real work - these are
users within your root account which can get different rights. So you can create users
with admin rights, users with moderator rights, ordinary users and so on. These IAM users
are no "real" AWS users - think of them as users in a sub-system of your AWS-root account.

If you are interested in AWS account security please
have a look at the
[IAM best practices document](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
in the AWS documentation.

# IAM: create your administrative IAM user

In the AWS management console (the thing you see after logging in) select "Services" at the upper left
corner and choose the IAM service. You can use the search field at the top of the services overview.

You will see a page similar to this one:

![IAM dashboard](../img/IAM.jpg)

To be able to work with the necessary tools you need credentials for programs. AWS provides
access keys for this purpose.  
You save the keys on your computer and have then very easily access to your AWS account.  
For the management of these keys we will use the program aws-vault which you already installed
in the previous steps.

Please open a terminal window again (or the Windows shell on Windows). Enter the following
command (and do not enter anythin afterwards):
```Shell
aws-vault add forumadmin
```
The program now asks for your accesskey id. We have to generate it first in the AWS console.

In the AWS console look for your account name in the upper right corner (adjacent to the
bell symbol) - in my images this is `PhotoForum Root`.

Click on the name and select `My Security Credentials`.   

At the page now displayed select `Access keys (access key ID and secret access key)`.

![access keys](../img/accesskeys.jpg)

Now click on the blue button named `Create New Access Key`. The access key and secret key are
automatically created and the following window is displayed in the browser:

![access keys](../img/keycreated.jpg)

Please click on `Download Key File` and open the downloaded file with your favorite text
editor (possibly Excel is opened on Windows because the file is named rootkey.csv).  
The file contents look similar to this (of course the Id and Key are different from the following):

![access keys](../img/keys.jpg)

**Important**: These keys are the entry to your AWS account! So you don't have to show them
anybody else and you must store them securely. And here comes aws-vault into play. You have still
your window open where (terminal/Windows shell) where aws-vault asks for you access key Id.   
Please copy the Id (it's in the first line of your CSV file) and paste it into the aws-vault
program. Then press enter in this window.   
aws-vault now asks for the secret access key with `Enter Secret Access Key:`.   
Again copy the secret key from your CSV file to your aws-vault program and press enter.

aws-vault asks for a password which secures your aws-vault - either use your
user password on Mac or choose one on Windows.

![access keys](../img/vault-password.jpg)

Don't forget the password - if you
do, you have to create new access keys on AWS.  After entering the password your access keys
are stored in aws-vault - the program acknowledges this with
`Added credentials to profile "forumadmin" in vault`.

**Congratulations!** Now you are able to use programs to do things in AWS.

