import type { Middleware } from "@reduxjs/toolkit";
import { cartItemsLocalStorageKey } from '../../utils/constants';
import { cartSliceName, CartState } from '../actions/cartSlice';
import type { ProductsState } from "../actions/productSlice";

interface RootState {
  products: ProductsState;
  cart: CartState;
}

export const cartMiddleware: Middleware<Record<string, unknown>, RootState> =
  store => next => action => {
    const result = next(action);

    if (action.type?.startsWith(`${cartSliceName}/`)) {
      const cartItemsState = store.getState().cart.items;

      localStorage.setItem(
        cartItemsLocalStorageKey,
        JSON.stringify(cartItemsState),
      );
    }

    return result;
  };