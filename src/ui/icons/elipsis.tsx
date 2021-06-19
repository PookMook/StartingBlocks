import { ReactElement } from "react"
import { SVG } from "ui/icons/svg"
import { props } from "./svg"

export function ElipsisIconSolid(props: props): ReactElement {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 412 512" {...props}>
      <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" />
    </SVG>
  )
}
