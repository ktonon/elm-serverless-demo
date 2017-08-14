const elmServerless = require('elm-serverless');

const elm = require('./API.elm');

module.exports.handler = elmServerless.httpApi({
  handler: elm.Forms.API,
});
