import { createUseStyles } from "react-jss";

export const useProductDetailsStyles = createUseStyles((theme) => ({
  productDetailsScroll: {
    margin: "0 auto",
    maxWidth: "300px",
    width: "100%",
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
  productImage: {
    width: 280,
    height: 280,
  },
  productTitle: {
    fontSize: ".8rem",
    color: theme.colors.grayscaleBody,
    marginBottom: 0,
    textAlign: "center",
  },
  productRate: {
    fontSize: ".75rem",
    color: theme.colors.grayscaleLabel,
    marginTop: 0,
    marginBottom: ".25rem",
  },
  productPrice: {
    fontSize: ".75rem",
    fontWeight: "bold",
    color: theme.colors.grayscaleBody,
    marginTop: 0,
    marginBottom: "2rem",
  },
}));
