// Redux/Slice/Allproducts.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
};

// Define the async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    
    try {
      const response = await fetch('https://getweed.stgserver.site/api/v1/shop/product/all', {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: mobileNumber }),
        });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data.data;  // Assuming the API response contains a `data` key with the products
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }
);

// Create the slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

// Export actions if necessary (for future use)
export default productsSlice.reducer;
