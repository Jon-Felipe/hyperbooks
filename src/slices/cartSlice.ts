import { createSlice } from '@reduxjs/toolkit';

// extra
import { CartItemType } from '../utils/types';

interface CartState {
  cartItems: CartItemType[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
