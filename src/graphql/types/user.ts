import { User as UserModel } from "nexus-prisma"
import { objectType, queryType } from "nexus"

import { Context } from "graphql/context"

const User = objectType({
  name: UserModel.$name,
  definition(t) {
    t.field(UserModel.id.name, UserModel.id)
    t.field(UserModel.name.name, UserModel.name)
  },
})

const UserQueries = queryType({
  definition(t) {
    t.nonNull.list.nonNull.field("User", {
      type: User,
      resolve: async (source, args, context: Context) => {
        const users = await context.prisma.user.findMany()
        return users
      },
    })
  },
})

export { User, UserQueries }
