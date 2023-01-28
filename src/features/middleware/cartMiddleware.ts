import { cartItemsLocalStorageKey } from '../../utils/constants';
import { cartSliceName, CartState } from '../actions/cartSlice';
import type { ProductsState } from "../actions/productSlice";

interface RootState {
  products: ProductsState;
  cart: CartState;
}

const cartMiddleware = <S extends Record<keyof RootState, any>>
  ({ getState }: any) => (next: any) => (action: any) => {
    const result = next(action);

    if (action.type.startsWith(`${cartSliceName}/`)) {
      const cartItemsState = getState().cart.items;

      localStorage.setItem(
        cartItemsLocalStorageKey,
        JSON.stringify(cartItemsState),
      );
    }
    return result;

  }

export default cartMiddleware;