import { makeSchema } from "nexus"
import path from "path"
import { queries } from "./types"

export const schema = makeSchema({
  types: [queries],
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), "src/generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "src/generated", "schema.graphql"),
  },
})
