AWS infrastructure
==================

To keep the costs low the infrastructure is kept to a bare minimum.

The following services are used: 

* IAM   
  It was first planned to use Cognito to manage users. Cognito adds
  complexity to the setup, so this idea was abandoned.
  Self service is not necessary for users - the project is targeting closed
  groups where it is acceptable for the owner to add users through IAM.
* S3  
  The heart of the application. S3 is a cheap storage which provides interesting
  features.   
  It is planned to use S3 as a write-only storage for 'normal' users.
  Admin users have delete rights too to make management possible.
* CloudFront  
  The contents of the S3 bucket should be hosted through CloudFront - at least
  the Angular application.


Alternatively wasabi.com could be used. For a typical forum which is really used
the price structure of Wasabi's "Unlimited Egress Pricing Plan" should be **always**
a better fit than Amazon S3.   
I will think about supporting both or only wasabi.com.
