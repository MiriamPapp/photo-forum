"use strict";

var fs = require('fs');
var aws = require('aws-sdk');

var cloudformation = new aws.CloudFormation();

var template_exists = fs.existsSync('cloudformation.yml');
if (!template_exists) {
    console.log('File cloudformation.yml does not exist. You probably have to change into the aws subdirectory first');
    process.exit(1);
}

var template = fs.readFileSync('cloudformation.yml').toString();

var listparams = {
    StackStatusFilter: [
      'CREATE_IN_PROGRESS', 'CREATE_FAILED', 'CREATE_COMPLETE', 'ROLLBACK_IN_PROGRESS',
      'ROLLBACK_FAILED', 'ROLLBACK_COMPLETE', 'DELETE_IN_PROGRESS', 'DELETE_FAILED',
      'UPDATE_IN_PROGRESS', 'UPDATE_COMPLETE_CLEANUP_IN_PROGRESS', 'UPDATE_COMPLETE',
      'UPDATE_ROLLBACK_IN_PROGRESS', 'UPDATE_ROLLBACK_FAILED', 'UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS',
      'UPDATE_ROLLBACK_COMPLETE', 'REVIEW_IN_PROGRESS',
    ]
};

var stacks;
cloudformation.listStacks(listparams, function(err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
        process.exit(1);
    }
    else {
        stacks = data.StackSummaries;
    }
});

stacks.forEach(element => {
    console.log('Stack' + element.StackName + ': ' + element.StackStatus);
});

/*
var stackparam = {
    StackName: 'photo-forum',
    TemplateBody: template
};
// deploy stack
cloudformation.createStack(stackparam, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response  
});
*/
