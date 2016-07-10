// TwitterClient -> Function
const start = (client) => (listener) => {
  const stream = client.stream("statuses/filter", {
    track: "javascript"
  })

  stream.on("data", (tweet) => listener.next(tweet))
  stream.on("error", (error) => listener.error(error))
}

// : TwitterClient -> Producer
export default function asSearcher (client) {
  return {
    start: start(client),
    stop () {
      return null
    }
  }
}
