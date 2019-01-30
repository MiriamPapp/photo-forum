#!/bin/sh

# Deployment of the necessary AWS-infrastructure for Photo-forum

# Effectively this runs the following command:
# aws-vault exec forumdev -- aws cloudformation deploy --stack-name photo-forum
#      --template-file cloudformation.yml --capabilities CAPABILITY_IAM`

# compile the deployment script
tsc

# run the script
node deploy.js

