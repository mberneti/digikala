import { createUseStyles } from "react-jss";
import { ITheme } from "../../../../theme/DThemeProvider";

export const useProductFiltersStyles = createUseStyles((theme: ITheme) => ({
  searchInput: {
    padding: ".75rem",
    borderRadius: ".25rem",
    margin: "0 auto",
    backgroundColor: theme.colors.commonWhite,
    justifyContent: "space-between",
    border: `2px solid ${theme.colors.grayscaleLine}`,
    "&:focus": {
      borderColor: theme.colors.grayscaleLabel,
      outline: "none",
    },
    width: "100%",
  },
  searchInputContainer: {
    maxWidth: "300px",
    overflow: "hidden",
    margin: "0 auto",
    flexShrink: 0,
  },
  maxMinInputsContainer: {
    width: "calc(100% + 1rem)",
    margin: "1rem -.5rem",
    "& > *": {
      padding: ".5rem",
    },
  },
  selectBox: {
    border: `2px solid ${theme.colors.grayscaleLine}`,
    borderRadius: ".25rem",
    "&:focus": {
      borderColor: theme.colors.grayscaleLabel,
      outline: "none",
    },
  },
  searchButton: {
    cursor: "pointer",
    width: "100%",
    padding: "8px 10px",
    fontSize: ".9rem",
    border: "none",
    backgroundColor: theme.colors.grayscaleInputBackground,
  },
}));
