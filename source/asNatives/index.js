import {map} from "ramda"

// : Array of JSON-Raw -> Array of JSON-Native
export default function asNatives (raws) {
  return map(JSON.parse, raws)
}
