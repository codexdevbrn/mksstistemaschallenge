import { useSelector } from '../features/hooks/hooks';
import { selectProducts } from '../features/actions/productSlice';

export function useProducts() {
  return useSelector(selectProducts);
}