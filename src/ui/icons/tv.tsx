import { ReactElement } from "react"
import { SVG } from "ui/icons/svg"
import { props } from "./svg"

export function TvIcon(props: props): ReactElement {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h248v48H112a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H344v-48h248a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm0 368H48V48h544z" />
    </SVG>
  )
}