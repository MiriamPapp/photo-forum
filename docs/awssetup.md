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

# Create your administrative IAM user

Please note ...