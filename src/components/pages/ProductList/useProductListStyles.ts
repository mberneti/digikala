import { createUseStyles } from "react-jss";
import { ITheme } from "../../../theme/DThemeProvider";

export const useProductListStyles = createUseStyles((theme: ITheme) => ({
  productsListScroll: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem 1rem",
    overflowY: "scroll",
    direction: "ltr",
    flex: 1,
    "& *": {
      direction: "rtl",
    },
  },
  products: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  productTitle: {
    textAlign: "center",
    fontSize: ".75rem",
    width: "100%",
    maxWidth: 300,
    cursor: "pointer",
  },
  productImage: {
    width: "200px",
    height: "200px",
    cursor: "pointer",
  },
  detailsLink: {
    fontSize: ".7rem",
    textDecoration: "unset",
    padding: "0 12px",
    borderRadius: "2rem",
    color: theme.colors.commonWhite,
    backgroundColor: theme.colors.commonBlack,
    fontWeight: "bold",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addToCardButton: {
    cursor: "pointer",
    marginRight: ".5rem",
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.grayscaleInputBackground,
  },
}));
