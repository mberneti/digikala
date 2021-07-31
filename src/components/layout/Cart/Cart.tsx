import { useSelector } from "react-redux";
import { getCartTotalPrice } from "../../../redux/modules/cart/cartUtils";
import ProductListItem from "./CartItem";
import { useProductListStyles } from "./useCartStyles";

function Cart() {
  const classes = useProductListStyles();
  const cartItems = useSelector((state) => state.cart.products);

  const totalPrice = getCartTotalPrice(cartItems);

  return (
    <>
      <label className={classes.totalPriceLabel}>
        مجموع کل: {totalPrice} ریال
      </label>
      <section className={classes.products}>
        {Object.values(cartItems).map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default Cart;
