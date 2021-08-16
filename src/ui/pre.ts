import { styled, theme } from "./stitches.config"

export const Pre = styled("pre", {
  variants: {
    Type: {
      primary: {
        fontSize: theme.fontSizes.plus1,
        color: theme.colors.highContrastColored,
      },
    },
    Size: {
      smallExtra: {
        fontSize: theme.fontSizes.minus2,
      },
    },
  },
})
