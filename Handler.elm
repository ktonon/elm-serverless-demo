port module Handler exposing (..)

import Serverless
import Serverless.Request as Request exposing (..)
import Serverless.Response as Response exposing (..)


main : Program Request.Raw (Maybe Model) Msg
main =
    Serverless.httpApi
        { endpointPort = endpoint
        , responsePort = response
        , init = init
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { req : Request
    }


init : Request -> ( Model, Cmd Msg )
init req =
    ( Model req, Cmd.none )



-- UPDATE


type Msg
    = Endpoint Serverless.Stage


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Endpoint stage ->
            ( model
            , response
                ( 200
                , "Hello Elm on AWS Lambda: "
                    ++ stage
                    ++ ", "
                    ++ model.req.path
                )
            )



-- SUBSCRIPTIONS


port endpoint : Serverless.EndpointPort msg


port response : Response.Port msg


subscriptions : Model -> Sub Msg
subscriptions _ =
    endpoint Endpoint
