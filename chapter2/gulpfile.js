const gulp = require('gulp');
//TODO add more dependancies here. 

// NOTE Dependancies of the whole project as files will be downloaded by npm. We put it here as well to be able to use these with GULP as JS external libraries. 
// As an example, we included GULP as a library above and now we can call object called 'gulp' below. 
// gulp.task is a request of method 'task' of object 'gulp'. 

// Ethan seem to be using gulp3 while writting the book and following the book's instructions you will get gulp4 with a slightly different approach to callback functions. 
// To make it work add (cb) to the task. There are different methods to prowide a correct callback to gulp, check gulp documentation and search for callback keyword to find more.
gulp.task('default', function (cb) {
    //TODO add tasks here
    cb();
});