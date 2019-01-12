# Storage of forum content

This solution has two goals:

* be manageable by "average" persons without deep computer knowledge
* have a really low price tag for hosting a forum

The second goal somewhat dictates which AWS services are to be used.
One of the cheapest services for storing information is S3.

At the same time S3 is als very flexible regarding rights management,
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

That's why the S3 bucket will be set to "append only". This way users
only need the right to create new objects on the S3 bucket (and read
rights of course).

People can create posts and comments. Changes and deletions require
special handling.

Over time the S3 bucket my be filled by update and delete objects.
The owner of the forum gets a maintenance program which consolidates
all images/posts/comments/pluses/votings.

## Cases for content changes

1. **Creation of new posts**   
   Creating of new posts is simple. They will be created as new
   objects on the S3 bucket.
2. **Adding comments**   
   Comments will be added as new objects to the S3 Bucket.
3. **Deletion of content**   
   Deletion of posts or comments is handled by creating "deletion
   objects" on the S3 bucket. Of course a deletion object can be
   created by any user for any object. Therefor clients reading
   and interpreting the contents have to check if the deletion
   object was created by the same user as the object which should
   be deleted.
4. **Changes to posts and comments**  
   Changes are implemented by creating new versions of older content.
   This **does not** use the versioning feature of S3 objects.   
   A new version is created by creating a new "update object" on the
   S3 bucket. Of course an update object can be
   created by any user for any object. Therefor clients reading
   and interpreting the contents have to check if the update
   object was created by the same user as the object which should
   be updated.   
   The update object contains the full new content for the object.

## Format of the objects

All objects are stored in JSON format because this easily usable
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
* **images** (optional)   
  A list of references to image objects (text). The list may also be empty.

### Comment object

Fields:

* **text** (mandatory)   
  text of the comment
* **ref_post** (mandatory)   
  reference to the post the comment was made on

### Post update object

A post update object can only be used to update the text. Updating the
image is not supported.

Fields:

* **text** (mandatory)   
  The new text of the post.
* **ref_post** (mandatory)  
  The reference to the post which will be updated.

### Comment update object

Fields:

* **text** (mandatory)   
  The updated text of the comment.
* **ref_comment** (mandatory)  
  The reference to the comment which will be updated.
* **ref_post** (mandatory)  
  The reference to the post where the updated comment is added.

### Post delete object

A post may have comments. The deletion of a post doesn't delete
the comments also. Because clients don't display the post anymore
the comments are also not displayed. The maintenance program has
to collect and delete all dependent objects for a post which is deleted
(including comments).

Fields:

* **ref_post** (mandatory)  
  The reference to the post which should be deleted.

### Comment delete object

Fields:

* **ref_comment** (mandatory)  
  The reference to the comment which should be deleted.

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

### Plus delete object for posts

Pluses can also be deleted again.

Fields:

* **ref_pluspost** (mandatory)   
  Reference to the plus which should be deleted.
* **ref_post** (mandatory)   
  Reference to the post on which the plus should be deleted.

### Plus delete object for comments

Fields:

* **ref_pluscomment** (mandatory)   
  Reference to the plus which should be deleted.
* **ref_comment** (mandatory)   
  Reference to the post on which the plus should be deleted.

