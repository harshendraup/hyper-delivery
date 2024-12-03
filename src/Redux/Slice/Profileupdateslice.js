import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk to handle the API call
export const updateProfile = createAsyncThunk(
    'profileUpdate/updateProfile',
    async (profileData, { rejectWithValue }) => {
      try {
        const response = await fetch('https://getweed.stgserver.site/api/v1/shop/update-profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${"7|8rxbtzGo3erCTYbpdpELhxKMHoxwU7aEaU9T1jvFb3ff8636"}`,  // Ensure the token is included
          },
          body: JSON.stringify(profileData),
        });
  
        if (response.status === 401) {
          // If the server returns Unauthorized, inform the user or redirect to login
          return rejectWithValue('Unauthorized. Please log in.');
        }
  
        // Check if the response is HTML, which indicates a possible login page or error page
        const textResponse = await response.text();
        if (textResponse.includes('<html>')) {
          // Log the raw HTML if it's an unexpected response
          console.error('Received HTML response. This could be an error page or a login page.', textResponse);
          return rejectWithValue('Received HTML instead of JSON.');
        }
  
        // If the response is JSON, proceed
        return JSON.parse(textResponse); // Manually parse JSON
  
      } catch (error) {
        return rejectWithValue(error.message); // Return error message if request fails
      }
    }
  );

// Create the slice
const profileUpdateSlice = createSlice({
    name: 'profileUpdate',
    initialState: {
      profile: null,
      loading: false,
      error: null,
      success: false,
    },
    reducers: {
      resetProfileState: (state) => {
        state.loading = false;
        state.error = null;
        state.success = false;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(updateProfile.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        })
        .addCase(updateProfile.fulfilled, (state, action) => {
          state.loading = false;
          state.profile = action.payload;  // Set the updated profile data from API response
          state.success = true;
        })
        .addCase(updateProfile.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.success = false;
        });
    },
  });

export const { resetProfileState } = profileUpdateSlice.actions;
export default profileUpdateSlice.reducer;
