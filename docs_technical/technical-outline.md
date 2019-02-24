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
* access control on paths (sort of)

The idea is to allow any (authorized) client to create, update and delete object
in paths where it got the right to. To (most) other paths the client has
read access to. There are also some protected paths which are only accessible by
moderators.

Clients (the web application running in the browser) get the documents they are
interested in by selecting through paths. They can also fetch linked but
missing documents (or ignore the linking documents).    
Because clients only can write to their own paths posts and comments to these
posts don't have the same path. The post may be in the path of client A and
the comments to this post may be distributed through all paths of other users.

Old content can be cleaned up by auto-expire of S3. This feature works on paths,
so categories excluded from auto-expire must be placed under a special S3 path.

The application itself will be an Angular application running only locally
in the browser. The application is hosted from a S3 bucket too.
