Learn technical skills
----------------------

1. Create a S3 bucket which can't be accessed by anyone but openly hosts the
   Angular application via CloudFront.
   Creation has to be done through serverless.
2. Through serverless define a Cognito user directrory with signup through
   invitations.
3. Define a policy which allows write-only access to S3 for Cognito-Users.