require('es6-promise');

'use strict';

doSomeSetup()
     .then(function () {
       return cache.fetchModel(id) || promisedAjax("users/" + id);
     })
     .then(displayUser)


     function attachTitle(name) {
       return 'id ' + id;
     }

     Promise.resolve('MANHATTAN')
       .then(attachTitle)
       .then(console.log);
