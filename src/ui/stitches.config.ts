import { createCss } from "@stitches/react"

export const { styled, getCssString } = createCss({
  theme: {
    colors: {
      primary: "red",
    },
    fontSizes: {
      smallExtra: "0.618rem",
      small: "0.786rem",
      medium: "1rem",
      large: "1.272rem",
      largeExtra: "1.618rem",
      banner: "2.618rem",
    },
  },
})
