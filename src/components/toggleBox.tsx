import { ReactElement, useState } from "react"

type props = {
  id: string
}

export function ToggleBox({ id }: props): ReactElement {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => setOpened((state) => !state)} data-id={`${id}-button`}>
        Click me to open the box!
      </button>
      {opened && <p data-id={`${id}-box`}>You opened me!</p>}
    </>
  )
}
