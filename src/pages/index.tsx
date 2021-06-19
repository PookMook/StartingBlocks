import { ReactElement } from "react"
import { ToggleBox } from "components/toggleBox"
import { IDS } from "data/ids"

export default function IndexPage(): ReactElement {
  return (
    <>
      <h1>Hello World</h1>
      <ToggleBox id={IDS.toggleBoxHomePage} />
    </>
  )
}
