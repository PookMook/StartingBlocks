import { SVG } from "ui/icons/svg"
import { props } from "./svg"

export function SpinnerIcon(props: props) {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M108.92 355.08a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 416a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm208-208a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm-60.92 147.08a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-198.16a48 48 0 1 0-48-48 48 48 0 0 0 48 48z"
      />
      <path d="M108.92 60.92a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM48 208a48 48 0 1 0 48 48 48 48 0 0 0-48-48zM256 0a48 48 0 1 0 48 48 48 48 0 0 0-48-48z" />
    </SVG>
  )
}
