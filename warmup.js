require('es6-promise');

'use strict';


  setTimeout(function() {
    resolve('TIMED OUT!!!');
    console.log(resolve);
  }, 300);
