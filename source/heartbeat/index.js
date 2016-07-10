// : Array where [RethinkDBClient, RethinkDBConnection] -> Function
const next = ([client, connection]) => (raw) => {
  return client
    .table("messages")
    .insert({raw})
    .run(connection)
    .then(() => console.log("Insert"))
}

// : RethinkDBConnection -> Producer
export default function heartbeat ([client, connection]) {
  return {
    next: next([client, connection]),
    error (data) {
      console.log({data})
    },
    complete (data) {
      console.log({data})
    }
  }
}
