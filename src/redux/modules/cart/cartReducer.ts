import { nanoid } from "nanoid";
import { createReducer } from "typesafe-actions";
import { actions, ICartState } from ".";

export const initialState: ICartState = {
  version: "",
  products: {},
};

export default createReducer(initialState)
  .handleAction(actions.addToCartAction, (state, { payload: { product } }) => {
    const cartProduct = state.products[product.id];
    if (cartProduct) {
      cartProduct.quantity++;
      return {
        products: {
          ...state.products,
        },
        version: nanoid(),
      };
    }
    return {
      products: {
        ...state.products,
        [product.id]: product,
      },
      version: nanoid(),
    };
  })
  .handleAction(
    actions.increaseQuantityByProductIdAction,
    (state: ICartState, { payload: { productId } }) => {
      if (!state.products[productId]) {
        return state;
      }
      state.products[productId].quantity++;
      return {
        products: { ...state.products },
        version: nanoid(),
      };
    },
  )
  .handleAction(
    actions.decreaseQuantityByProductIdAction,
    (state: ICartState, { payload: { productId } }) => {
      if (!state.products[productId]) {
        return state;
      }
      state.products[productId].quantity--;
      if (state.products[productId].quantity === 0) {
        delete state.products[productId];
      }
      return {
        products: { ...state.products },
        version: nanoid(),
      };
    },
  )
  .handleAction(
    actions.removeProductByIdAction,
    (state: ICartState, { payload: { productId } }) => {
      if (!state.products[productId]) {
        return state;
      }
      delete state.products[productId];
      return {
        products: { ...state.products },
        version: nanoid(),
      };
    },
  )
  .handleAction(
    actions.resetCartStateAction,
    (state: ICartState, { payload: { cardState } }) => {
      console.log({ state, cardState });
      if (cardState.version === state.version) {
        return state;
      }
      return {
        ...cardState,
        version: "",
      };
    },
  )
  .handleAction(actions.removeCartItemsALLAction, () => ({
    products: {},
    version: nanoid(),
  }));
