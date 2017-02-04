elm serverless demo
===================

This repo demonstrates how to use [![elm-package](https://img.shields.io/badge/elm--serverless-3.0.2-blue.svg)](http://package.elm-lang.org/packages/ktonon/elm-serverless/3.0.2). It is kept up to date with that release version of the package. For a demo which is kept in sync with the master branch of `elm-serverless` see the [demo embedded in that repo](https://github.com/ktonon/elm-serverless/tree/master/demo)

__NOTE__: This project uses forked [serverless-webpack][], but there is an open [Pull Request](https://github.com/elastic-coders/serverless-webpack/pull/82). The PR adds support for [Lambda Proxy Integration][] to the local server.

## Try it

* clone this repo
* `npm install`
* `npm start`
  * [http://localhost:8000/quote](http://localhost:8000/quote) will respond with quotes which it fetches from another service
* `npm run deploy` to test deploying it to [AWS Lambda][]

## The break down

Two tools are involved in getting your elm app on [AWS Lambda][]:

* [webpack][] along with [elm-webpack-loader][] transpiles your elm code to JavaScript
* [serverless][] along with [serverless-webpack][] packages and deploys your app to [AWS Lambda][]

There are four files that you should check out in this demo to get a better understanding of how everything fits together. Each file is self-documenting. Take a look at:

* [serverless.yml][]: configures [serverless][] and uses the [serverless-webpack][] plugin
* [webpack.config.js][]: compiles elm using [elm-webpack-loader][]
* [api.js][]: contains the `handler` function, which is the entry point to your application, called by AWS Lambda
* [API.elm][]: contains the elm `Serverless.Program` which defines your HTTP API

[AWS Lambda]:https://aws.amazon.com/lambda
[elm-serverless]:https://github.com/ktonon/elm-serverless
[elm-webpack-loader]:https://github.com/elm-community/elm-webpack-loader
[Lambda Proxy Integration]:http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html#api-gateway-create-api-as-simple-proxy-for-lambda-build
[serverless]:https://serverless.com/
[serverless-webpack]:https://github.com/elastic-coders/serverless-webpack
[webpack]:https://webpack.github.io/

[API.elm]:https://github.com/ktonon/elm-serverless-demo/blob/master/src/API.elm
[api.js]:https://github.com/ktonon/elm-serverless-demo/blob/master/src/api.js
[serverless.yml]:https://github.com/ktonon/elm-serverless-demo/blob/master/serverless.yml
[webpack.config.js]:https://github.com/ktonon/elm-serverless-demo/blob/master/webpack.config.js
