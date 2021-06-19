import { ReactElement, useState } from "react"
import { TemplateIcon } from "ui/icons"
import { Users } from "components/users/user"
import Link from "next/link"

export default function IndexPage(): ReactElement {
  return (
    <>
      <h1>Hello World</h1>
      <TemplateIcon Spin Size="banner" Stroke="bold" />
      <Users />
      <Link href="/">
        <a>Index (shared state A)</a>
      </Link>
      <Link href="/second">
        <a>Second (shared state A)</a>
      </Link>
      <Link href="/third">
        <a>third (shared State B)</a>
      </Link>
    </>
  )
}

const SoloWrapper = ({ children }: { children: ReactElement }): ReactElement => {
  const [status, setStatus] = useState<string>("Hello")
  return (
    <>
      <input value={status} onChange={(e) => setStatus(e.target.value)} />
      {children}
    </>
  )
}

IndexPage.extra = SoloWrapper
