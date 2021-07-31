import { Link, useHistory } from "react-router-dom";
import DBox from "../../../core/DBox";
import DIcon from "../../../core/DIcon";
import { useProductListStyles } from "./useCartStyles";
import { useDispatch } from "react-redux";
import {
  decreaseQuantityByProductIdAction,
  increaseQuantityByProductIdAction,
} from "../../../redux/modules/cart/cartActions";
import { ICartProduct } from "../../../redux/modules/cart/cartType";

interface IProps {
  product: ICartProduct;
}

function CartItem({ product }: IProps) {
  const classes = useProductListStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const goToDetails = (productId: number) => () => {
    history.push(`/product/${productId}`);
  };

  const increaseProductQuantity = (productId: number) => () => {
    dispatch(increaseQuantityByProductIdAction(productId));
  };

  const decreaseProductQuantity = (productId: number) => () => {
    dispatch(decreaseQuantityByProductIdAction(productId));
  };

  return (
    <DBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pt={2}
      pb={2}
      pl={1}
      pr={1}
    >
      <img
        className={classes.productImage}
        src={product.image}
        alt={product.title}
        onClick={goToDetails(product.id)}
      />
      <h3 className={classes.productTitle} onClick={goToDetails(product.id)}>
        {product.title}
      </h3>
      <label className={classes.productPriceLabel}>{product.price} ریال</label>
      <DBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={0.5}
        width="100%"
      >
        <div
          className={classes.addToCardButton}
          onClick={decreaseProductQuantity(product.id)}
        >
          <DIcon name="minus" size="12px" color="commonBlack" weight="bold" />
        </div>
        <Link className={classes.detailsLink} to={`product/${product.id}`}>
          {product.quantity}
        </Link>
        <div
          className={classes.addToCardButton}
          onClick={increaseProductQuantity(product.id)}
        >
          <DIcon name="plus" size="12px" color="commonBlack" weight="bold" />
        </div>
      </DBox>
    </DBox>
  );
}

export default CartItem;
