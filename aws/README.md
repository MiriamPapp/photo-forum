# AWS deployment

To deploy the infrastructure objects you need to install the aws-cli on your system.
See https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html for more
information.

You also need the aws-vault program which can be found here:
https://github.com/99designs/aws-vault   
The program makes it much easier to use multiple identities on
AWS.


To deploy the infrastructure components use the following command (all in one line):
`aws-vault exec <account> -- aws cloudformation deploy --stack-name photo-forum
     --template-file cloudformation.yml --capabilities CAPABILITY_IAM`

`<account>` is your AWS account or your IAM identity which is used for running the services.
 