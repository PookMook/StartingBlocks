import { ReactElement } from "react"
import { ToggleBox } from "components/toggleBox"
import Users from "components/users/user"
import { IDS } from "data/ids"

export default function IndexPage(): ReactElement {
  return (
    <>
      <h1>Hello World</h1>
      <Users />
      <ToggleBox id={IDS.toggleBoxHomePage} />
    </>
  )
}
