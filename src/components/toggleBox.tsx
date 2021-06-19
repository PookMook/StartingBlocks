import { ReactElement, useState } from "react"

export function ToggleBox(): ReactElement {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => setOpened((state) => !state)}>Click me to open the box!</button>
      {opened && <p>You opened me!</p>}
    </>
  )
}
