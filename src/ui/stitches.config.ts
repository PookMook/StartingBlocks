import { createStitches } from "@stitches/react"
import { violet, violetDark, slate, slateDark } from "@radix-ui/colors"

export const { styled, getCssText, keyframes, createTheme } = createStitches({
  theme: {
    colors: {
      ...violet,
      ...slate,
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

export const darkTheme = createTheme({
  colors: {
    ...violetDark,
    ...slateDark,
  },
})
