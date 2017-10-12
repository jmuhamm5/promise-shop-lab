require('es6-promise');

'use strict';



var promise = new Promise(function (resolve) {
  // Your solution here
  setTimeout(function() {
    resolve('TIMED OUT!!!');
    console.log(resolve);
  }, 300);
});
