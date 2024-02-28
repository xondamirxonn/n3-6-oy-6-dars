import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { ProductReducer, add, remove, toggleAnmount, totalPrice, deleteAllProducts, setProduct } from "./reducers/product-reducer";
import { saveState } from "../config/storage";

const storageMiddleWere = createListenerMiddleware();

storageMiddleWere.startListening({
  matcher: isAnyOf(add, remove,toggleAnmount, deleteAllProducts,),
  effect: (_, api) => {
    api.dispatch(totalPrice())
  api.dispatch(setProduct())

  }
});
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
  middleware: (middleWere) => middleWere().prepend(storageMiddleWere.middleware)
});


store.subscribe(() => {
  saveState("product", store.getState().product)
})