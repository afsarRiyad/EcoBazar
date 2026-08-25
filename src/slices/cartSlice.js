import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existing = state.items.find((item) => item.id === product.id);
            if (existing) {
                existing.qty += product.qty || 1;
            } else {
                state.items.push({
                    id: product.id,
                    name: product.name || product.title || '',
                    price: product.price ?? 0,
                    image: product.images?.[0] || product.image || '',
                    qty: product.qty || 1,
                });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQty: (state, action) => {
            const { id, qty } = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item) {
                item.qty = Math.max(1, qty);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions;

// selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.reduce((sum, item) => sum + item.qty, 0);
export const selectCartTotal = (state) =>
    state.cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);

export default cartSlice.reducer;
