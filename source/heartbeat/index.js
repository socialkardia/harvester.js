import database from "../database"
import adapters from "../adapters"

// : Client -> Provider -> Raw -> Promise
const next = (provider) => (raw) => {
  return database
    .table(provider)
    .insert(adapters[provider](raw))
    .then(() => console.log("Insert"))
    .catch((error) => console.error(error))
}

// : Provider -> Producer
export default function heartbeat (provider) {
  return {
    next: next(provider),
    error (data) {
      console.log({data})
    },
    complete (data) {
      console.log({data})
    }
  }
}
