const elmServerless = require('elm-serverless');

const { SideEffects } = require('./API.elm');

module.exports.handler = elmServerless.httpApi({
  handler: SideEffects.API,
});
