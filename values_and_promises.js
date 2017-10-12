require('es6-promise');

'use strict';

doSomeSetup()
     .then(function () {
       return cache.fetchModel(id) || promisedAjax("users/" + id);
     })
     .then(displayUser)
