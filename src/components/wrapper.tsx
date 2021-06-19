import { ReactElement, useState } from "react"

export function Wrapper({ children }: { children: ReactElement }): ReactElement {
  const [status, setStatus] = useState<string>("Hello")
  return (
    <>
      <input value={status} onChange={(e) => setStatus(e.target.value)} />
      {children}
    </>
  )
}
