require('es6-promise');

'use strict';





doSomethingRisky()
    .then(doAnotherRiskyThing)
    .then(null, console.log);
