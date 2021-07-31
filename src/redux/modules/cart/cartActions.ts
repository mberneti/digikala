import { createAction } from "typesafe-actions";
import { ICartProduct, ICartState } from "./cartType";

const key = "CART";

export const addToCartAction = createAction(
  `${key}/ADD_TO_CART`,
  (product: ICartProduct) => ({ product }),
)();

export const removeProductByIdAction = createAction(
  `${key}/REMOVE_FROM_CART`,
  (productId: number) => ({ productId }),
)();

export const increaseQuantityByProductIdAction = createAction(
  `${key}/INCREASE_CART_ITEM`,
  (productId: number) => ({ productId }),
)();

export const decreaseQuantityByProductIdAction = createAction(
  `${key}/DECREASE_CART_ITEM`,
  (productId: number) => ({ productId }),
)();

export const removeCartItemsALLAction = createAction(`${key}/REMOVE_ALL`)();

export const resetCartStateAction = createAction(
  `${key}/RESET`,
  (cardState: ICartState) => ({
    cardState,
  }),
)();
