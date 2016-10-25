import xstream from "xstream"
import {map} from "ramda"
import {pipe} from "ramda"

import asTwitterClient from "./asTwitterClient"
import asSearcher from "./asSearcher"
import asStream from "./asStream"
import heartbeat from "./heartbeat"
import authentications from "./authentications"

// : Authentication as Array of CredentialPair
// : TwitterClient as Authentication
// : Listener as Object where "start" is Function, "stop" is Function
// : CredentialPair as Array where [String, String]
// : Producer as Object where "next" is Function, "error" is Function, "complete" is Function

xstream
  .merge(
    ...map(
        pipe(
          asTwitterClient,
          asSearcher,
          asStream(xstream)
        ),
        authentications
      )
  )
  .addListener(heartbeat)
