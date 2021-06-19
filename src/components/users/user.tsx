import { useLoadAllUsersQuery } from "generated/graphql"
import { ReactElement } from "react"
import { Pre } from "ui/pre"

export function Users(): ReactElement {
  const { data, status } = useLoadAllUsersQuery()
  return (
    <Pre Type="primary">
      {status}: {JSON.stringify(data?.users, null, 1)}
    </Pre>
  )
}
