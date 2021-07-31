import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICartState } from "../redux/modules/cart";
import { resetCartStateAction } from "../redux/modules/cart/cartActions";
import { RootState } from "../redux/reducer";

export const CART_STORAGE_KEY = "cart_storage";

export function getCartFromLocalStorage(): ICartState | null {
  const storageData = localStorage.getItem(CART_STORAGE_KEY);
  if (!storageData) {
    return null;
  }
  try {
    return JSON.parse(storageData) as ICartState;
  } catch (e) {
    return null;
  }
}

export const useCartStorage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const eventListener = (e: StorageEvent) => {
      if (e.key === CART_STORAGE_KEY) {
        try {
          const cartInfo = e.newValue
            ? (JSON.parse(e.newValue) as ICartState)
            : undefined;
          if (!cartInfo) {
            return;
          }
          dispatch(resetCartStateAction(cartInfo));
        } catch (error) {
          console.log(error);
        }
      }
    };
    const cartInfoFromLocalStorage = getCartFromLocalStorage();
    if (cartInfoFromLocalStorage) {
      dispatch(resetCartStateAction(cartInfoFromLocalStorage));
    }
    window.addEventListener("storage", eventListener);
    return () => window.removeEventListener("storage", eventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cart.version) {
      const cartInfoFromLocalStorage = getCartFromLocalStorage();
      if (
        !cartInfoFromLocalStorage ||
        cartInfoFromLocalStorage.version !== cart.version
      ) {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      }
    }
  }, [cart]);
};
