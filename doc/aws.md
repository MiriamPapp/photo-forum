AWS infrastructure
==================

To keep the costs low the infrastructure is kept to a bare minimum.

The following services are used: 

* Cognito   
  Using the service through AWS accounts would be much more difficult and would
  make creation of users through invitations nearly impractical. The target
  users are not photographers, not programmers. Hopefully Cognito provides
  a good user experience (to be explored).
  The alternative (using AWS accounts) would require more complex policies
  and cut out many users because of the necessary technical skills. But it
  would also provide the possibility to distribute the costs through the users.
* S3  
  The heart of the application. S3 is cheap and has SQL like select capabilities.
  It is planned to use S3 as a write-only storage for 'normal' users.
  Admin users have delete rights too to make management possible.
* CloudFront  
  The contents of the S3 bucket should be hosted through CloudFront - at least
  the Angular application.