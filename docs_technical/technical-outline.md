Required functions for the software
-----------------------------------

The software is meant to fulfill approximately the same functionality like
the Google+ communities.

The following functions must be supported:

* member only access
* posting of articles (possibly containing one or more images) by members
* organize posts in categories - like channels in Slack for example
* posting comments to posts
* mention other members, which triggers some kind of notification
* work without installation
* mobile friendly
* give "pluses" to posts
* give pluses to comments
* closed (not publicly visible) categories for admins
* multi-language support (German / English first)
* deletion of posts (only the own, except for admins)
* deletion of comments (only the own, except for admins)
* move posts between categories

The following functions will be ignored (for now):

* e-mail notifications
* local caching of content
* pinning articles at the top of a category

The following functionality should be supported some day:
* search
* public readability but member post only
* automatic preview fetch for posted links (http://ogp.me)
* notifications through different channels
* technical support for voting (doing contests)
* statistics

Technical idea
--------------

To be cost effective the solution uses a serverless setup on Amazon Web Services.
Storing a large number of data is possible with S3 which is also quite cheap. At the
same time S3 offers many interesting features including:

* a SQL like query language for JSON and CSV documents,   
  this is available for queries on a document only, unfortunately
  not for all documents within a bucket
* auto expire for documents (with automatic deletion)
* a REST API
* access control on document level (if necessary)

The idea is to allow any (authorized) client "create" access on the S3 bucket
but to disallow deletions and changes to existing documents.
Only administrators (or Lambda functions on AWS) are allowed to replace/change
documents.

Clients (the web application running in the browser) get the documents they are
interested in by selecting through names(?). They can also fetch linked but
missing documents (or ignore the linking documents).
To enable deletions of posts/comments a special document will be posted which
flags the deletion of another document. A periodically running Lambda function
can then do the real deletion (or an administrator may do it).

Old content can be cleaned up by auto-expire of S3. This feature works on paths,
so categories excluded from auto-expire must be placed under a special S3 path.

The application itself will be an Angular application running only locally
in the browser. The application is hosted from a S3 bucket too.
