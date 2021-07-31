import { useCallback, useEffect, useRef, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { AsyncState, useAsyncState } from "../../../hooks/useAsyncState";
import { searchProducts } from "../../../api";
import {
  IPager,
  ISearchProductItem,
  ISearchProductPayload,
} from "../../../api/search/search-types";

interface IProductState {
  [productId: string]: ISearchProductItem;
}

interface IUseGetDepartmentsReturnProps {
  requestState: AsyncState;
  products: IProductState;
  pagination: IPager;
  loadProducts: (payload?: Partial<ISearchProductPayload>) => void;
  loadMore: (payload?: Partial<ISearchProductPayload>) => void;
}

export const useSearchProducts = (): IUseGetDepartmentsReturnProps => {
  const [products, setProducts] = useState<IProductState>({});
  const [pagination, setPagination] = useState<IPager>({
    current_page: 1,
    total_pages: 1,
    total_items: 1,
  });
  const [requestState, setRequestState] = useAsyncState();

  const cancelToken = useRef<CancelTokenSource | null>(null);

  const loadProducts = useCallback(
    async (payload: Partial<ISearchProductPayload> = {}) => {
      setRequestState("loading");
      const isFirstPageLoad = !payload.page || payload.page === 1;
      if (isFirstPageLoad) {
        setProducts({});
      }
      try {
        if (cancelToken.current) {
          cancelToken.current.cancel();
        }
        cancelToken.current = axios.CancelToken.source();

        const { products, pager } = await searchProducts(
          payload,
          cancelToken.current.token,
        );
        setRequestState("loaded");
        if (products) {
          const newProductState = products.reduce(
            (productState, currentProduct) => {
              // Added key prefix to prevent the automatic sort of numeric keys of Object
              productState[`key${currentProduct.id}`] = currentProduct;
              return productState;
            },
            {} as IProductState,
          );

          if (isFirstPageLoad) {
            setProducts(newProductState);
          } else {
            setProducts((oldProducts) => ({
              ...oldProducts,
              ...newProductState,
            }));
          }
          setPagination(pager);
        }
      } catch (e) {
        console.log(e);
        if (!axios.isCancel(e)) {
          setRequestState("loaded");
        }
      }
    },
    [setRequestState],
  );

  const loadMore = (payload: Partial<ISearchProductPayload> = {}) => {
    if (requestState === "loading") {
      return;
    }
    payload.page = pagination.current_page + 1;
    loadProducts(payload);
  };

  useEffect(() => {
    loadProducts();
    return () => {
      if (cancelToken.current) {
        cancelToken.current.cancel();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    requestState,
    products,
    loadProducts,
    loadMore,
    pagination,
  };
};
