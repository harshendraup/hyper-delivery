import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to make the API request
export const fetchOtp = createAsyncThunk(
    "fetchOtp",
    async ({ otp, user_id }, { rejectWithValue }) => {
      try {
        const response = await fetch("https://getweed.stgserver.site/api/v1/shop/otp-verification", {
          method: "POST",  // Assuming it's a POST request
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp: otp,
            user_id: user_id,  // Sending user_id along with OTP
          }),
        });
  
        const responseBody = await response.json(); // Read the response body
  
        // Log the full response
        console.log('Response status:', response.status);
        console.log('Response body:', responseBody);
  
        if (!response.ok) {
          // If response is not OK, throw an error with response details
          throw new Error(`Failed to verify OTP: ${responseBody.message || response.statusText}`);
        }
  
        return responseBody; // Return the successful response
      } catch (error) {
        console.error("Error during OTP verification:", error);
        return rejectWithValue(error.message || "An unknown error occurred.");
      }
    }
  );
  

// Slice definition
const otpSlice = createSlice({
    name: "otp",
    initialState: {
      isLoading: false,
      data: null,
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
        .addCase(fetchOtp.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.errorMessage = "";
        })
        .addCase(fetchOtp.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload; // Store the response from OTP verification
        })
        .addCase(fetchOtp.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMessage = action.payload || "Failed to verify OTP.";
        });
    },
  });

// Export actions
export const { resetError } = otpSlice.actions;

// Export reducer
export default otpSlice.reducer;
