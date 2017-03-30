# answerme

This application allows users to ask a question and receive multiple answers for that question.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Planning

1. Configuration/dependencies
  * NPM (Development)
    * bower-files (pulls in dynamic list of file paths to bower components)
    * browser-sync (live CSS Reload & Browser Syncing)
    * browserify (recursively analyze all the require() calls)
    * del (delete files and folders)
    * gulp (task manager)
    * gulp-concat (concatenates files into one)
    * gulp-jshint (Checks for JavaScript syntax errors)
    * gulp-sass (plugin allows use of SASS)
    * gulp-sourcemaps (gives ability to pipe files through multiple operations)
    * gulp-uglify (Removes white space and creates shorter variable names)
    * gulp-util (utility functions for gulp plugins)
    * jshint (Checks for JavaScript syntax errors)
    * vinyl-source-stream (converts the readable stream from browserify into a vinyl stream)
  * bower (Production)
    * jQuery
    * Bootstrap

 2. Integration

  |Route(s)|Template(s)|Component(s)|
  |--------|-----------|------------|
  |question|question|question-tile, add-question, update-question, delete-question|
  |answer|answer-tile, add-answer|

  * update-question: User clicks 'update question' button which populates a form to update question, author and additional notes.
  * add-answer: User clicks 'add new answer' button which populates a form to enter answer, author.
  * Display one question with multiple answers.
  * Integrate feature that allows user to add, update and delete a question.
  * Integrate feature that allows user(s) to answer a question.

3. UX/UI
  * Include and modify bootstrap.
  * Develop custom style


## Installation

* `git clone https://github.com/danlauby/answerme.git>` answerme
* `cd answerme`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### License

Copyright (c) 2017 Copyright Dan Lauby All Rights Reserved.
