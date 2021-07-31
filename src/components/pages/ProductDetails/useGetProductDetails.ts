import { useCallback, useEffect, useRef, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { AsyncState, useAsyncState } from "../../../hooks/useAsyncState";
import { getProductDetails } from "../../../api";
import { IProduct } from "../../../api/product/product-types";

interface IUseGetDepartmentsReturnProps {
  requestState: AsyncState;
  product?: IProduct;
}

export const useGetProductDetails = (
  productId?: string,
): IUseGetDepartmentsReturnProps => {
  const [product, setProduct] = useState<IProduct>();
  const [requestState, setRequestState] = useAsyncState();

  const cancelToken = useRef<CancelTokenSource | null>(null);

  const loadProducts = useCallback(
    async (_productId: number) => {
      setRequestState("loading");
      try {
        if (cancelToken.current) {
          cancelToken.current.cancel();
        }
        cancelToken.current = axios.CancelToken.source();
        const { product } = await getProductDetails(
          _productId,
          cancelToken.current.token,
        );
        setRequestState("loaded");
        setProduct(product);
      } catch (e) {
        console.log(e);
        if (!axios.isCancel(e)) {
          setRequestState("loaded");
        }
      }
    },
    [setRequestState],
  );

  useEffect(() => {
    if (productId) {
      loadProducts(Number(productId));
    }
    return () => {
      if (cancelToken.current) {
        cancelToken.current.cancel();
      }
    };
  }, [loadProducts, productId]);

  return {
    requestState,
    product,
  };
};
