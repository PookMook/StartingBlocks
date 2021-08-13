import { ReactElement } from "react"
import { TemplateIcon } from "ui/icons"
import { Users } from "components/users/user"
export default function IndexPage(): ReactElement {
  return (
    <>
      <h1>Hello World</h1>
      <TemplateIcon Spin Size="banner" Stroke="bold" />
      <Users />
    </>
  )
}
