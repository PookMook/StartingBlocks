import { objectType, queryType } from "nexus"

import { Context } from "graphql/context"

const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.field("id", { type: "ID", description: "ID of the user" })
    t.nonNull.field("name", { type: "String", description: "Name of the user" })
  },
})

const UserQueries = queryType({
  definition(t) {
    t.nonNull.list.nonNull.field("users", {
      type: User,
      resolve: async (source, args, context: Context) => {
        const users = await context.prisma.user.findMany()
        return users
      },
    })
  },
})

export { User, UserQueries }
