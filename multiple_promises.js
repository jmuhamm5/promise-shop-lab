require('es6-promise');

'use strict';


var thingOne = getThing(1);
    var thingTwo = getThing(2);

    combine(thingOne, thingTwo);


getAll(fetch(1), fetch(2))
      .then(function (values) {
        console.log(values[0], values[1]);
      });


Promise.all([getPromise1(), getPromise2()])
      .then(onFulfilled, onRejected);
