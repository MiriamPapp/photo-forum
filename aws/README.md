# AWS deployment

To deploy the infrastructure objects you need to install the aws-cli on your system.
See https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html for more
information.

To deploy the infrastructure components use the following command (all in one line):
`aws cloudformation deploy --stack-name photo-forum
     --template-file cloudformation.yml --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
     --profile forumadmin`

