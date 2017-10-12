require('es6-promise');

'use strict';

doStuff()
    .then(doMoreStuff)
    .then(null, complainAboutJavascript);
