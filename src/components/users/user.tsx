import { useLoadAllUsersQuery } from "generated/graphql"
import { ReactElement } from "react"
import { styled } from "ui/stitches.config"

const Pre = styled("pre", {
  color: "$primary",
  fontSize: "$smallExtra",
})

export default function Users(): ReactElement {
  const { data, status } = useLoadAllUsersQuery()
  return (
    <Pre>
      {status}: {JSON.stringify(data?.users, null, 1)}
    </Pre>
  )
}
