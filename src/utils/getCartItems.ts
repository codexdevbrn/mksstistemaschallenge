import type { CartItem } from '../features/actions/cartSlice';
import { cartItemsLocalStorageKey } from "./constants";

export function getCartItems(): CartItem[] {
  const existingCartItems = localStorage.getItem(cartItemsLocalStorageKey);
  if (existingCartItems) {
    return JSON.parse(existingCartItems);
  }

  return [];
}