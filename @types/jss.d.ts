import { ITheme } from "../src/theme/DThemeProvider";

declare module "react-jss" {
  export interface DefaultTheme extends ITheme {}
}

declare module "jss" {
  export interface Theme extends ITheme {}
}

declare global {
  namespace Jss {
    /** You can use the global `Jss.Theme` interface to define a project-wide default theme. */
    export interface Theme extends ITheme {}
  }
}
