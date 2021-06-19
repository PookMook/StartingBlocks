import { ReactElement } from "react"
import { SVG } from "ui/icons/svg"
import { props } from "./svg"

export function TemplateIcon(props: props): ReactElement {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="" />
    </SVG>
  )
}
