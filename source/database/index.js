import knex from "knex"

const client = "pg"
const connection = process.env.DATABASE_URL
const configuration = {
  client,
  connection
}

export default knex(configuration)
