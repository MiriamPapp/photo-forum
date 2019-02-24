
# Local hosting of the github pages

If you want to serve the github pages on your computer (for example to change and test them),
you need an [installed Ruby](https://www.ruby-lang.org/) interpreter (MacOS users, please
see the next paragraph!).  
Then enter the following commands in your terminal window:  
```Shell
gem install bundler jekyll
cd docs  <- the directory in this project
gem install
bundle exec jekyll serve 
```

# Special hint for MacOS users

The Ruby installation on OS/X Mojave seems not be suitable for installing
Jekyll. It helps to do the following steps which install a new ruby version
and make it the default.

Link https://github.com/jekyll/jekyll/issues/7274#issuecomment-425069689

Then follow the advice to add gems only in your home directory:
https://github.com/jekyll/jekyll/issues/7274#issuecomment-424401726
