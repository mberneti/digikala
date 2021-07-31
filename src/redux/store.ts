import { createStore, Store } from "redux";
import rootReducer from "./reducer";
import { IS_DEVELOPMENT_ENV } from "../config";
import { composeWithDevTools } from "redux-devtools-extension";

const actionSanitizer = (action: any) => action;
const stateSanitizer = (state: any) => state;

const composeEnhancers = composeWithDevTools({
  actionSanitizer,
  stateSanitizer,
});

const store: Store = createStore(
  rootReducer,
  IS_DEVELOPMENT_ENV ? composeEnhancers() : undefined,
);

export const initialState = {
  ...store.getState(),
};

export { store };
