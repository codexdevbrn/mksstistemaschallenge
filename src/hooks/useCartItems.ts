import { useSelector } from "../features/hooks/hooks";
import { selectCartItems } from "../features/actions/cartSlice";

export function useCartItems() {
  return useSelector(selectCartItems);
}