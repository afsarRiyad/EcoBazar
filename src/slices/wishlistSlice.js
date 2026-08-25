import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const product = action.payload;
            const exists = state.items.find((item) => item.id === product.id);
            if (!exists) {
                state.items.push({
                    id: product.id,
                    name: product.name || product.title || '',
                    price: product.price ?? 0,
                    image: product.thumbnail || product.images?.[0] || product.image || '',
                });
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;

export default wishlistSlice.reducer;
