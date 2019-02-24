# Storage of forum content

This solution has two goals:

* be manageable by "average" persons without deep computer knowledge
* have a really low price tag for hosting a forum

The second goal somewhat dictates which AWS services are to be used.
One of the cheapest services for storing information is S3.

At the same time S3 is also very flexible regarding rights management,
features and access methods. That's why we will use S3 to store the
forum's contents.   
To avoid other services the clients directly write to and read from
the S3 bucket.

## Security considerations

When every client directly accesses the S3 bucket the solution has
to ensure that people can't mess with the content of other people.   
Of course the application can ensure this but it will be a Javascript
application running in the users browser. Anybody would be able to
change the application or to create a new one which doesn't guarantee
any security at all.

That's why the S3 bucket gets a security policy where users get their
own paths where only they (and the administrator) can write. Unfortunately
S3 policies don't support regular expressions for paths so there is
still the possibility that users can "hide" content to use the storage
at the expense of the forum owner. To lower this risk there will be
a maintenance script which analyses the bucket for potential misuse
by the end users and cleans up any unwanted objects.

Because users store content in their "own" paths deletions and updates
are easy - the old object will be deleted in case of content deletions
or deleted and created in the new form again when updating an object.

## Format of the objects

All objects are stored in JSON format because this is easily usable
in JavaScript applications. It would be possible to use more
efficient storage formats (for example Google Protocol Buffers)
but this would make debugging through the AWS console extremely
difficult. JSON is human readable, so it's possible to inspect
the objects on the S3 bucket manually.

### Image object

The image object is simply the image content of the displayed image.

### Post object

Fields:

* **text** (mandatory)
  The text of the post.
* **reflist_images** (optional)   
  A list of references to image objects (references are in text format). The list may also be empty.

### Comment object

Fields:

* **text** (mandatory)   
  text of the comment
* **ref_post** (mandatory)   
  reference to the post the comment was made on

### Plus object for posts

Google+ has "Pluses" on posts and comments. This object represents
a "plus" on posts.

Fields:

* **ref_post** (mandatory)  
  The reference to the post the plus is for.

### Plus object for comments
Fields:

* **ref_comment** (mandatory)  
  The reference to the post the plus is for.
