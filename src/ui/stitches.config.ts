import { createStitches } from "@stitches/react"

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      primary: "blue",
    },
    fontSizes: {
      smallExtra: "0.618rem",
      small: "0.786rem",
      medium: "1rem",
      large: "1.272rem",
      largeExtra: "1.618rem",
      banner: "2.618rem",
    },
    sizes: {
      icon_smallExtra: "$fontSizes$smallExtra",
      icon_small: "$fontSizes$small",
      icon_medium: "$fontSizes$medium",
      icon_large: "$fontSizes$large",
      icon_largeExtra: "$fontSizes$largeExtra",
      icon_banner: "$fontSizes$banner",
    },
  },
})
