require('es6-promise');

'use strict';


var p = Promise.p([
  new Promise(function(resolve) {
    setTimeout(function() {
      resolve('TIMED OUT!!!');
    }, 300);
  })
]);
