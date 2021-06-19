import { ReactElement } from "react"
import { SVG } from "ui/icons/svg"
import { props } from "./svg"

export function TemplateIcon(props: props): ReactElement {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <g>
        <line y2="512" x2="512" y1="0" x1="0" />
        <line y2="512" x2="0" y1="0" x1="512" />
      </g>
    </SVG>
  )
}
