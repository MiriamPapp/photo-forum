---
title: How to set up your AWS account
---

Diese Seite ist auch [auf Deutsch](../awssetup_de) verfügbar.

# Create your root account

First go to the [AWS homepage](https://aws.amazon.com). If you never
created an accout at AWS it looks like this:

![Windows shell](../img/Amazon-Free-Tier.jpg)

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

For security reasons we will use
[IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
users for the real work - these are
users within your root account which can get different rights.

If you are interested in AWS account security please
have a look at the
[IAM best practices document](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
in the AWS documentation.

# Create your administrative IAM user

