import React from "react";
import DBox from "../../core/DBox";
import DIcon from "../../core/DIcon";
import { useMainLayoutStyles } from "./useMainLayoutStyles";

const MainLayout: React.FC = ({ children, ...props }) => {
  const classes = useMainLayoutStyles();
  return (
    <DBox display="flex" height="100vh" flexDirection="column">
      <header className={classes.header}>
        <a className={classes.logo} href="/">
          Digikala
        </a>
        <div className={classes.headerIcons}>
          <DBox position="relative">
            <a className={classes.searchAnchor} href="/">
              search
            </a>
            <DIcon name="search" size="1.5rem" color="grayscaleLabel" />
          </DBox>
          <DIcon
            name="shopping-cart-1"
            size="1.5rem"
            color="grayscaleLabel"
            weight="600"
          />
        </div>
      </header>
      <>{children}</>
    </DBox>
  );
};

export default MainLayout;
