import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoaded: false, // Flag to prevent saving empty cart before loading
};

export const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // 1. Sync from LocalStorage (Triggered only in useEffect)
    setCartFromLocalStorage: (state, action) => {
      state.cart = action.payload;
      state.isLoaded = true;
    },

    // 2. Add to Cart logic
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrement: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    removeAll: (state) => {
      state.cart = [];
    }
  }
});

export const { 
  addToCart, increment, decrement, remove, removeAll, setCartFromLocalStorage 
} = slice.actions;

export default slice.reducer;