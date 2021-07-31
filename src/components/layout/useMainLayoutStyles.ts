import { createUseStyles } from "react-jss";

export const useMainLayoutStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    minHeight: "4rem",
    padding: "0 1.5rem",
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
    justifyContent: "space-between",
    // position: "fixed",
    zIndex: 2,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.commonWhite,
  },
  logo: {
    background: "url(/assets/images/digikala.svg) no-repeat center center",
    backgroundSize: "contain",
    width: "7rem",
    textIndent: "-1000rem",
  },
  headerIcons: {
    display: "flex",
    width: "80px",
    justifyContent: "space-between",
  },
  searchAnchor: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2,
    textIndent: "-1000rem",
  },
}));
