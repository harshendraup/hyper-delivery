import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to make the API request
export const fetchMobile = createAsyncThunk(
    "fetchMobile",
    async (mobileNumber, { rejectWithValue }) => {
      try {
        const response = await fetch("https://getweed.stgserver.site/api/v1/shop/start-phone-verification", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: mobileNumber }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to start phone verification.");
        }
  
        const data = await response.json();
        // Log the response to check if user_id is present
        console.log("API Response:", data);
        return data;
      } catch (error) {
        return rejectWithValue(error.message || "An unknown error occurred.");
      }
    }
  );

// Slice definition
const Mobileslice = createSlice({
    name: "mobile",
    initialState: {
      isLoading: false,
      data: null, // Store user_id here
      isError: false,
      errorMessage: "",
    },
    reducers: {
      resetError: (state) => {
        state.isError = false;
        state.errorMessage = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMobile.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.errorMessage = "";
        })
        .addCase(fetchMobile.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload; // Store the response, including user_id
        })
        .addCase(fetchMobile.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload || "Failed to fetch data.";
        });
    },
  });
  
  
  // Export actions
  export const { resetError } = Mobileslice.actions;
  
  // Export reducer
  export default Mobileslice.reducer;
