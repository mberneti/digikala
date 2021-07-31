import { combineReducers } from "redux";
import { ICartState, reducer as cart } from "./modules/cart";

const appReducer = combineReducers({
  cart,
});

export type RootState = ReturnType<typeof appReducer> & {
  cart: ICartState;
};

const rootReducer = (state: any, action: any): RootState => {
  return appReducer(state, action);
};

export default rootReducer;
