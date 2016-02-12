#! /usr/bin/env node
'use strict';

require('dnewrelic');

let app = require('dexpress');
app.use(require('dheaders'));
const dhttpAuth = require('dhttp-auth');
if (dhttpAuth) {
  app.use(dhttpAuth);
}
app.use(require('compression')());
app.use(app.express.static(process.cwd() + '/web'));
