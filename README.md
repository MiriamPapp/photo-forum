# Foto-Forum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.
It aims to provide an experience like the Google+ groups with special support for
photographers needs.

The software is intended to be used by some photographers I (the author) know but may be used
also by anone else.

# AWS infrastructure
The infrastructure is managed through serverless.
See the AWS document in the doc folder.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Mocking AWS S3

Use https://github.com/localstack/localstack installed via  `pip install --user localstack` 