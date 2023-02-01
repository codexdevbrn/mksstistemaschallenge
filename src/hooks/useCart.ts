import { useMemo } from "react";
import { ProductTypes } from "../@types/ProductTypes";
import { useCartItems } from "./useCartItems";
import { useProducts } from "./useProducts";

/* Cria os componentes do carrinho */

export interface FullCartItem {
  product: ProductTypes;
  quantity: number;
}

export function useAllCartItems(): FullCartItem[] | null {
  const products = useProducts();
  const cartItems = useCartItems();

  /* Hook para usar um calculo memorizado | useMemo | */
  const fullCartItems = useMemo((): FullCartItem[] | null => {
    if (!products) {
      return [];
    }
    return (
      cartItems
        .map(item => ({
          quantity: item.quantity,
          product: products.find(product => product.id === item.productId)!,
        }))
    );
  }, [cartItems, products]);

  return fullCartItems;
}