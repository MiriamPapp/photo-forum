---
title: How to set up your AWS account
---

Diese Seite ist auch [auf Deutsch](../awssetup_de) verfügbar.

First go to the [AWS homepage](https://aws.amazon.com). If you never
created an accout at AWS it looks like this:

![Windows shell](../img/Amazon-Free-Tier.jpg)

Creating an AWS account seems to be somewhat complicated. Amazon
[describes the process](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
in its knowledge base.

Simply follow the instructions in the
[Amazon document](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/). This creates your so called "root account".   
For security reasons we will use
[IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
users for the real work - these are
users within your root account which can get different rights.

If you are interested in AWS account security please
have a look at the
[IAM best practices document](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
in the AWS documentation.