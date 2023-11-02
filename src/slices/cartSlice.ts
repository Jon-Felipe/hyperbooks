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
      const { book, language, quantity } = payload;

      const bookExists = state.cartItems.find(
        (cartItem) => cartItem.book.id == book.id
      );

      if (bookExists) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.book.id == bookExists.book.id
            ? { ...bookExists, language, quantity }
            : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, payload];
      }
      return state;
    },
    removeFromCart: (state, { payload }) => {
      const { id } = payload;

      const bookExists = state.cartItems.find(({ book }) => book.id == id);
      if (bookExists) {
        state.cartItems = state.cartItems.filter(({ book }) => book.id != id);
      }
      return state;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
