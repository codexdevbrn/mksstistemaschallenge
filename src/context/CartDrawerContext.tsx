import React, { createContext, useCallback, useContext, useState } from "react";
import { CartDrawer } from "../components/CartDrawer";

/* Contexto para abertura e fechamento 
do carrinho de compras */

interface CartDrawerContextProviderProps {
  children: React.ReactNode;
}
type CartDrawerContextData = {
  isOpen: boolean | false;
  open: () => void;
  close: () => void;
}

const CartDrawerContext = createContext({} as CartDrawerContextData);

export function useCartDrawerContext() {
  return useContext(CartDrawerContext)
}
export function CartDrawerContextProvider({ children }: CartDrawerContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CartDrawerContext.Provider value={{ isOpen, open, close }}>
      {children}
      <CartDrawer />
    </CartDrawerContext.Provider>
  );
};
