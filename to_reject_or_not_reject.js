require('es6-promise');

'use strict';

/*
function myFunc(user, callback) {
  if (user) {
    callback(null, user);
  }

  return callback('No user was found', null);
}
*/


require('es6-promise');

'use strict';

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  if (true) {
    fulfill();
  } else {
    reject();
  }
});

// Your solution here
promise
    .then(
