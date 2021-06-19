import { styled } from "./stitches.config"

export const Pre = styled("pre", {
  variants: {
    Type: {
      primary: {
        fontSize: "$banner",
        color: "$primary",
      },
    },
    Color: {
      primary: {
        color: "$primary",
      },
    },
    Size: {
      smallExtra: {
        fontSize: "$smallExtra",
      },
    },
  },
})
