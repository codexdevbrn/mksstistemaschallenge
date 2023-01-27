import { configureStore } from '@reduxjs/toolkit';
import { getCartItems } from '../utils/getCartItems'
import { cartMiddleware } from './middleware/cartMiddleware'
import { cartReducer, cartSliceName } from '../features/actions/cartSlice';
import { productsReducer, productsSliceName } from '../features/actions/productSlice';

export const store = configureStore({
  reducer: {
    [productsSliceName]: productsReducer,
    [cartSliceName]: cartReducer,
  },
  preloadedState: {
    cart: {
      items: getCartItems(),
    },
  },
  middleware: getDefultMiddleware => {
    return getDefultMiddleware().concat(cartMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;