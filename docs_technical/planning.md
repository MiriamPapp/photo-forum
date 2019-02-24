Topics to implement
-------------------
  3. Authenticate the AWS connection in the browser (static credentials).
  4. Create a login form to authenticate to AWS and use the credentials.
  5. List the (accessible) contents of the content bucket
  6. create a post object in a channel
  7. show a timeline
  8. delete a post object
  9. create a post with an image and show it in the timeline
 10. delete a post object with an image
 11. update a post object (not the image)

Not to implement:
-----------------
* change the image of a post


Done
----
  1. Create a S3 bucket which can't be accessed by anyone but openly hosts the
     Angular application via CloudFront.
     Creation has to be done through CloudFormation.
  2. Set up different policies/groups through CloudFormation.
