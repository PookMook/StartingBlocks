import { createStitches } from "@stitches/react"
import {
  violet,
  violetDark,
  mauve,
  mauveDark,
  red,
  redDark,
  tomato,
  tomatoDark,
  purple,
  purpleDark,
} from "@radix-ui/colors"

function calculateScale(step: number, unit = "rem"): string {
  // Static config
  const baseScale = 1.618 // Golden ratio scale
  const halfStep = true

  const effectiveStep = halfStep ? baseScale ** 0.5 : baseScale
  return effectiveStep ** step + unit
}

/*
  scale0: excagerated background
  scale1: app background
  scale2: subtle background
  scale3: UI element background
  scale4: Hovered UI element background
  scale5: Active/selected UI element background
  scale6: Subtle borders and separators
  scale7: UI element border + focus ring
  scale8: Hovered UI element border
  scale9: Solid background / highest chroma
  scale10: Hovered Solid background / lowest contrast
  scale11: Low Contrast
  scale12: High Contrast
  scale13: blackest Contrast
*/

export const { styled, getCssText, keyframes, createTheme, globalCss, theme } = createStitches({
  theme: {
    colors: {
      ...violet,
      ...mauve,
      ...tomato,
      ...red,
      ...purple,

      successSolidBackground: "$violet9",
      infoSolidBackground: "$purple9",
      warningSolidBackground: "$tomato9",

      errorSolidBackground: "$red9",
      errorText: "$red9",
      errorBorder: "$red9",

      appBackground: "$mauve2",
      subtleBackground: "$mauve1",
      subtleBackgroundColour: "$violet1",

      linkText: "$violet11",
      highContrast: "$mauve12",
      highContrastColored: "$violet12",
      lowContrast: "$mauve11",
      lowContrastColored: "$violet11",
      lowestContrast: "$mauve10",
      placeholderText: "$mauve7",

      border: "$mauve7",
      borderFocus: "$violet7",

      borderDisabled: "$mauve6",
      disabledBackground: "$mauve2",
      disabledText: "$mauve10",

      primarySolidBackground: "$violet9",
      primaryFaded: "$violet8",
      primaryIcon: "$violet9",

      constructiveSolidBackground: "$violet9",
      constructiveFaded: "$violet8",

      tableHeaderBackground: "$violet5",
      tableRowBackground: "$slate3",
      tableRowAlternateBackground: "$violet3",
    },
    space: {
      minus3: calculateScale(-3),
      minus2: calculateScale(-2),
      minus1: calculateScale(-1),
      plus0: calculateScale(0),
      plus1: calculateScale(1),
      plus2: calculateScale(2),
      plus3: calculateScale(3),
      plus4: calculateScale(4),
    },
    fontSizes: {
      minus3: calculateScale(-3),
      minus2: calculateScale(-2),
      minus1: calculateScale(-1),
      plus0: calculateScale(0),
      plus1: calculateScale(1),
      plus2: calculateScale(2),
      plus3: calculateScale(3),
      plus4: calculateScale(4),
    },
    sizes: {
      minus3: calculateScale(-3),
      minus2: calculateScale(-2),
      minus1: calculateScale(-1),
      plus0: calculateScale(0),
      plus1: calculateScale(1),
      plus2: calculateScale(2),
      plus3: calculateScale(3),
      plus4: calculateScale(4),
      icon_smallExtraMega: "$minus3",
      icon_smallExtra: "$minus2",
      icon_small: "$minus1",
      icon_medium: "$plus0",
      icon_large: "$plus1",
      icon_largeExtra: "$plus2",
      icon_largeExtraMega: "$plus3",
      icon_banner: "$plus4",
    },
  },
  media: {
    phone: "(max-width: 519px)",
    tablet: "(min-width: 520px) AND (max-width: 799px)",
    desktop: "(min-width: 800px)",
    print: "print",
    withMotion: "(prefers-reduced-motion)",
    darkTheme: "(prefers-color-scheme: dark)",
  },
})

export const darkTheme = createTheme({
  colors: {
    ...violetDark,
    ...mauveDark,
    ...tomatoDark,
    ...redDark,
    ...purpleDark,
  },
})

const createThemeCssText = (theme: typeof darkTheme): Record<string, string> => {
  const tokens: Record<string, string> = {}
  if (theme.colors) {
    for (const token of Object.values(theme.colors)) {
      tokens[token.variable] = token.value
    }
  }
  return tokens
}

export const globalStyles = globalCss({
  ":root": {
    "@darkTheme": {
      ...createThemeCssText(darkTheme),
    },
  },
  "html,body": {
    margin: 0,
    padding: 0,
    backgroundColor: "$appBackground",
    color: theme.colors.lowestContrast,
  },
  body: {
    overflowY: "scroll",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
  },
})
