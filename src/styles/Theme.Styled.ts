// Tokens from the ElPrisen.nu Figma file, "Design specs" frame.
const palette = {
  surface: "#27282B",
  background: "#201E1E",
  green: "#55EC20",
  light: "#EBEBEB",
} as const;

// Price indicator colors, cheapest to most expensive.
const priceScale = [
  "#00FF29",
  "#33FF00",
  "#B8FF22",
  "#EDFF23",
  "#FFD645",
  "#FF7A00",
  "#FF8717",
  "#FF4D00",
] as const;

export const theme = {
  color: {
    palette,
    priceScale,

    dark: {
      background: palette.surface,
      text: palette.light,
    },
  },

  font: {
    primary: "Roboto",
    weight: 300,
  },
  fontSize: {
    xs: "0.75rem", //12px
    s: "0.875rem", //14px
    m: "1.25rem", //20px
    l: "2rem", //32px
    xl: "2.5rem", //40px
  },
  lineHeigth: {
    xs: "1.25rem",
    s: "1.5rem",
    m: "1.8rem",
    l: "2rem",
    xl: "2.5rem",
  },
} as const;
export type Theme = typeof theme;
