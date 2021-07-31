import { createUseStyles } from "react-jss";

export const useOrdersStyles = createUseStyles({
  header: {
    display: "flex",
    height: "4rem",
    padding: "0 1.5rem",
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
    justifyContent: "space-between",
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
});
