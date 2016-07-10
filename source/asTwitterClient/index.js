import Twitter from "twitter"

// : Authentication -> TwitterClient
export default function asTwitterClient ([consumerPair, accessPair]) {
  const [consumerPublic] = consumerPair
  const [, consumerPrivate] = consumerPair
  const [accessPublic] = accessPair
  const [, accessPrivate] = accessPair

  return new Twitter({
    consumer_key: consumerPublic,
    consumer_secret: consumerPrivate,
    access_token_key: accessPublic,
    access_token_secret: accessPrivate
  })
}
