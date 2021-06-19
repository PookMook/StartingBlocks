import { keyframes, styled } from "ui/stitches.config"
import { StitchesVariants } from "@stitches/core"
import { ComponentProps, ReactElement } from "react"
import { squaredViewport } from "helpers/squaredViewport"

const Spin = keyframes({
  "0%": { transform: "rotate(0)" },
  "100%": { transform: "rotate(360deg)" },
})

const SVGInternal = styled("svg", {
  width: "$icon_medium",
  height: "$icon_medium",
  variants: {
    Stroke: {
      bold: {
        stroke: "$primary",
        strokeWidth: "1rem",
      },
    },
    Size: {
      smallExtra: {
        width: "$icon_smallExtra",
        height: "$icon_smallExtra",
      },
      small: {
        width: "$icon_small",
        height: "$icon_small",
      },
      large: {
        width: "$icon_large",
        height: "$icon_large",
      },
      largeExtra: {
        width: "$icon_largeExtra",
        height: "$icon_largeExtra",
      },
      banner: {
        width: "$icon_banner",
        height: "$icon_banner",
      },
    },
    Rotate: {
      "90": {
        transform: "rotate(90deg)",
      },
      "180": {
        transform: "rotate(180deg)",
      },
      "270": {
        transform: "rotate(270deg)",
      },
      "-90": {
        transform: "rotate(-90deg)",
      },
      "-180": {
        transform: "rotate(-180deg)",
      },
      "-270": {
        transform: "rotate(-270deg)",
      },
    },
    Spin: {
      true: {
        transform: "rotate(360deg)",
        animationName: `${Spin}`,
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
      },
    },
  },
})

export type props = ComponentProps<typeof SVGInternal> & StitchesVariants<typeof SVGInternal>

export function SVG(props: props): ReactElement {
  const newViewbox = squaredViewport(props.viewBox)
  return <SVGInternal {...props} viewBox={newViewbox} />
}
