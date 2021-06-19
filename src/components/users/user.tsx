import { useLoadAllUsersQuery } from "generated/graphql"
import { ReactElement } from "react"

export default function Users(): ReactElement {
  const { data, status } = useLoadAllUsersQuery()
  return (
    <pre>
      {status}: {JSON.stringify(data?.users, null, 1)}
    </pre>
  )
}
