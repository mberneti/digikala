import React, { useState } from "react";
import { useSelector } from "react-redux";
import DBox from "../../core/DBox";
import DIcon from "../../core/DIcon";
import DModal from "../../core/DModal";
import { useCartStorage } from "../../hooks/useCartStorage";
import { getCartTotalProducts } from "../../redux/modules/cart/cartUtils";
import Cart from "./Cart/Cart";
import { useMainLayoutStyles } from "./useMainLayoutStyles";

const MainLayout: React.FC = ({ children, ...props }) => {
  useCartStorage();
  const classes = useMainLayoutStyles();
  const cartItems = useSelector((state) => state.cart.products);
  const totalProducts = getCartTotalProducts(cartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
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
            <DBox
              position="relative"
              cursor="pointer"
              onClick={() => setIsCartOpen((isOpen) => !isOpen)}
            >
              {totalProducts > 0 && (
                <span className={classes.cartItemsBadge}>{totalProducts}</span>
              )}
              <DIcon
                name="shopping-cart-1"
                size="1.5rem"
                color="grayscaleLabel"
                weight="600"
              />
            </DBox>
          </div>
        </header>
        <>{children}</>
      </DBox>
      <DModal
        title="سبد خرید"
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart />
      </DModal>
    </>
  );
};

export default MainLayout;
