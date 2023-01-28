import { createContext, useCallback, useContext, useState } from "react";

interface CartDrawerContextProviderProps {
  children: React.ReactNode;
}

type CartDrawerContextData = {
  isOpen: boolean;
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
    </CartDrawerContext.Provider>
  );
};
