import type { de } from "zod/locales";
import type { theme } from "./Theme.Styled";
import "styled-components";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
