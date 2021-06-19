import { ReactElement } from "react"
import { TemplateIcon } from "ui/icons"
import { Users } from "components/users/user"
import { Wrapper } from "components/wrapper"
import Link from "next/link"

export default function IndexPage(): ReactElement {
  return (
    <>
      <h1>2nd page</h1>
      <TemplateIcon Rotate="-270" Size="banner" Stroke="bold" />
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

IndexPage.extra = Wrapper
