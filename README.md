# Photo-Forum

This project aims to provide an experience like Google+ groups with special support for
photographers' needs.

> For people interested in hosting the Photo-Forum there is a [dedicated website](https://fte378.github.io/photo-forum/index) which describes all necessary steps.  
> Für alle, die ein Photo-Forum betreiben möchten, gibt es eine [Webseite mit genauen Anleitungen](https://fte378.github.io/photo-forum/index_de).

The software is intended to be used by some photographers who I (the author) know but it may be used
also by anyone else including non-photographers.

The software is designed to be hosted at AWS (Amazon Web Services). It is designed to keep
the costs at a minimum, so anybody should be able to host their own forum without the need
to accept advertising or get restrictions on contents.

The Photo-Forum is designed for closed user groups where you have to get an invitation
to enter. It is not a social network and there is no intention to develop it into one.

At the moment there is no usable functionality because the software is in a very early stage.

## Local github pages

If you want to serve the github pages on your computer (for example to change and test them),
you need an [installed Ruby](https://www.ruby-lang.org/) interpreter.  
Then enter the following commands in your terminal window:  
```Shell
gem install bundler jekyll
cd docs  <- the directory in this project
gem install
bundle exec jekyll serve 
```

## Angular application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.
It is not required that you have @angular/cli installed globally - it is part of the development
dependencies of this project.

### Development server

Run `npm run ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm run ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Mocking AWS S3

Use https://github.com/localstack/localstack installed via  `pip install --user localstack` 
