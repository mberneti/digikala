import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import DBox from "../../../core/DBox";
import DButton from "../../../core/DButton";
import DLoading from "../../../core/DLoading";
import { usePageTitle } from "../../../hooks/usePageTitle";
import { useGetProductDetails } from "./useGetProductDetails";
import { useProductDetailsStyles } from "./useProductDetailsStyles";

interface IMatchParams {
  productId: string;
}

function ProductDetails() {
  const { setPageTitle } = usePageTitle("فروشگاه اینترنتی دیجیکالا");
  const {
    params: { productId },
  } = useRouteMatch<IMatchParams>();
  const classes = useProductDetailsStyles();

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
        >{`${product?.price.selling_price} تومان`}</p>
        <DButton>افزودن به سبد خرید</DButton>
      </DBox>
    </div>
  );
}

export default ProductDetails;
