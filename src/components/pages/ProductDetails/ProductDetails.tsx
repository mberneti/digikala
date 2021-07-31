import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { IProduct } from "../../../api/product/product-types";
import DBox from "../../../core/DBox";
import DButton from "../../../core/DButton";
import DLoading from "../../../core/DLoading";
import { usePageTitle } from "../../../hooks/usePageTitle";
import { addToCartAction } from "../../../redux/modules/cart/cartActions";
import { mapProductToCartItem } from "../../../redux/modules/cart/cartUtils";
import { useGetProductDetails } from "./useGetProductDetails";
import { useProductDetailsStyles } from "./useProductDetailsStyles";

interface IMatchParams {
  productId: string;
}

function ProductDetails() {
  const { setPageTitle } = usePageTitle("فروشگاه اینترنتی دیجیکالا");
  const dispatch = useDispatch();
  const {
    params: { productId },
  } = useRouteMatch<IMatchParams>();
  const classes = useProductDetailsStyles();

  const addToCart = (product?: IProduct) => () => {
    if (!product) {
      return;
    }
    const cartItem = mapProductToCartItem(product);
    dispatch(addToCartAction(cartItem));
  };

  const { requestState, product } = useGetProductDetails(productId);

  useEffect(() => {
    setPageTitle(product?.title + " | دیجیکالا");
  }, [product, setPageTitle]);

  return (
    <div className={classes.productDetailsScroll}>
      <DBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <DLoading isLoading={requestState === "loading"} />
        {product && (
          <img
            className={classes.productImage}
            src={product?.images.main}
            alt={product?.title || "تصویر محصول"}
          />
        )}
        <h1 className={classes.productTitle}>{product?.title}</h1>
        <span
          className={classes.productRate}
        >{`امتیاز: ${product?.rating.rate}`}</span>
        <p
          className={classes.productPrice}
        >{`${product?.price.selling_price} ریال`}</p>
        <DButton onClick={addToCart(product)}>افزودن به سبد خرید</DButton>
      </DBox>
    </div>
  );
}

export default ProductDetails;
