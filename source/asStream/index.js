// : XStream -> Function -> Stream
export default function asProducer (xstream) {
  return (producer) => xstream.create(producer)
}
