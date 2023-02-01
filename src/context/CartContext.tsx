import React, { createContext, useCallback, useContext, useState } from "react";
import { Cart } from "../components/Cart";

/* Contexto para abertura e fechamento 
do carrinho de compras */

interface CartContextProviderProps {
  children: React.ReactNode;
}
type CartContextData = {
  isOpen: boolean | false;
  open: () => void;
  close: () => void;
}

const CartContext = createContext({} as CartContextData);

export function useCartContext() {
  return useContext(CartContext)
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CartContext.Provider value={{ isOpen, open, close }}>
      {children}
      <Cart />
    </CartContext.Provider>
  );
};
