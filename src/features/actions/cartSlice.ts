import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from '../../@types/ProductTypes';
import type { RootState } from "../store";

/* Equivalente as Action no antigo Redux */

export interface CartItem {
  productId: ProductTypes['id'];
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

type AddItemAction = PayloadAction<{ productId: ProductTypes['id'] }>;
type RemoveItemAction = PayloadAction<{ productId: ProductTypes['id'] }>;
type UpdateItemQuantityAction = PayloadAction<{
  productId: ProductTypes['id'];
  quantity: number;
}>;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: AddItemAction) {
      const { productId } = action.payload;

      const isItemAlreadyInCart = state.items.some(
        item => item.productId === productId,
      );

      if (!isItemAlreadyInCart) {
        state.items.push({
          productId,
          quantity: 1,
        });
      }
    },
    removeItem(state, action: RemoveItemAction) {
      state.items = state.items.filter(
        item => item.productId !== action.payload.productId,
      );
    },
    updateItemQuantity(state, action: UpdateItemQuantityAction) {
      const { productId, quantity } = action.payload;

      const index = state.items.findIndex(item => item.productId === productId);

      if (index >= 0) {
        state.items[index].quantity = quantity;
      }
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const cartSliceName = cartSlice.name;
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.items;