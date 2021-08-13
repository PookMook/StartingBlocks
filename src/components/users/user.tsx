import { useLoadAllUsersQuery } from "generated/graphql"
import { ReactElement, useEffect } from "react"
import { Pre } from "ui/pre"

export function Users(): ReactElement {
  const { data, status, refetch } = useLoadAllUsersQuery(undefined, { enabled: false })

  useEffect(() => {
    const interval = setTimeout(() => refetch(), 3000)
    return () => clearTimeout(interval)
  }, [refetch])

  if (status === "idle") {
    return <p>Waiting 3 seconds before fetching data</p>
  }

  return (
    <Pre Type="primary">
      {status}: {JSON.stringify(data, null, 1)}
    </Pre>
  )
}
