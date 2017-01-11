'use strict';

const elm = require('elm-serverless');
const handler = require('./Handler.elm').Handler;

module.exports.handler = elm.httpApi(handler);
