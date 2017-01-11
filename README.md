elm serverless demo
===================

This repo demonstrates how to use [elm-serverless][].

We use [webpack][] with [elm-webpack-loader][] to compile to JavaScript, and then [serverless-webpack][] to deploy the whole thing to [AWS Lambda][].

__NOTE__: This project uses forked [serverless-webpack][], but there is an open [Pull Request](https://github.com/elastic-coders/serverless-webpack/pull/82). The PR adds support for [Lambda Proxy Integration][] to the local server.

## Try it

* clone this repo
* `npm install`
* `npm start`
* [http://localhost:8000/foo/bar](http://localhost:8000/foo/bar)

Then deploy it to [AWS Lambda][] by running

```shell
npm run deploy
```

[AWS Lambda]:https://aws.amazon.com/lambda
[elm-serverless]:https://github.com/ktonon/elm-serverless
[elm-webpack-loader]:https://github.com/elm-community/elm-webpack-loader
[Lambda Proxy Integration]:http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html#api-gateway-create-api-as-simple-proxy-for-lambda-build
[serverless-webpack]:https://github.com/elastic-coders/serverless-webpack
[webpack]:https://webpack.github.io/
