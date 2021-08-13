import { ApolloServer } from "apollo-server-micro"
import { schema } from "graphql/schema"
import { createContext } from "graphql/context"

const Server = new ApolloServer({
  context: createContext,
  schema,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

await Server.start()

export default Server.createHandler({
  path: "/api/graphql",
})
