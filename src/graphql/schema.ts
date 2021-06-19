import { makeSchema } from "nexus"
import path from "path"
import { User, UserQueries } from "./types"

export const schema = makeSchema({
  types: [User, UserQueries],
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), "src/generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "src/generated", "schema.graphql"),
  },
})
