'use strict';

require('dnewrelic');

const app = require('dexpress');
app.use(require('dheaders'));
app.use(require('dhttp-auth'));
app.use(require('compression')());
app.use(app.express.static(process.cwd() + '/www'));

module.exports = app;
