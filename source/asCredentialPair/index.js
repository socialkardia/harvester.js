import {zip} from "ramda"

import asNatives from "../asNatives"

// : Array of JSON-Raw -> Array of CredentialPair
export default function asCredentialPair (list) {
  // ["["public1", "public1", ...]", "["secret1", "secret2", ...]"]
  // [["public1", "public1", ...], ["secret1", "secret2", ...]]
  // [["public1", "secret1"], ["public2", "secret2"]]
  return zip(...asNatives(list))
}
