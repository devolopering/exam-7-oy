import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Boshqa joyda updateCartItem orqali miqdorni oshiring
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1, totalPrice: action.payload.price });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    updateCartItem: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (type === 'increase') {
          item.quantity += 1;
          item.totalPrice = item.price * item.quantity;
        } else if (type === 'decrease') {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.price * item.quantity;
          }
        } else if (type === 'remove') {
          state.items = state.items.filter(item => item.id !== id);
        }
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, updateCartItem } = cartSlice.actions;
export default cartSlice.reducer;
