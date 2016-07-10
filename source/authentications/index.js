import rev from "require-environment-variables"
import Dotenv from "dotenv"
import {zip} from "ramda"
import {map} from "ramda"

import asCredentialPair from "../asCredentialPair"

Dotenv.config()
rev([
  "TWITTER_CONSUMER_PUBLICS",
  "TWITTER_CONSUMER_PRIVATES",
  "TWITTER_ACCESS_PUBLICS",
  "TWITTER_ACCESS_PRIVATES",
  "RETHINKDB_DATABASE_NAME"
])

// : Array of Authentication
export default zip(
  ...map(
    asCredentialPair,
    [
      [
        process.env.TWITTER_CONSUMER_PUBLICS,
        process.env.TWITTER_CONSUMER_PRIVATES
      ],
      [
        process.env.TWITTER_ACCESS_PUBLICS,
        process.env.TWITTER_ACCESS_PRIVATES
      ]
    ]
  )
)
