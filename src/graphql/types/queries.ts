import { queryType } from "nexus"

export const queries = queryType({
  definition(t) {
    t.string("ping", { resolve: () => "pong" })
  },
})
