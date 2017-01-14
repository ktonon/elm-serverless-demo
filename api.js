const elmServerless = require('elm-serverless');
const elm = require('./API.elm');

module.exports.handler = elmServerless.httpApi({
  handler: elm.API,
  config: {
    something: 'testing config loader',
  },
  requestPort: 'requestPort',
  responsePort: 'responsePort',
});
