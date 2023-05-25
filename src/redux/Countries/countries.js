import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.airvisual.com/v2/countries?key=ae5c3f4a-e825-4e10-896c-67b7a80ba63c';

export const fetchCountries = createAsyncThunk('fetch-countries', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const initialState = {
  countriesArray: [],
  loading: false,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchCountries.fulfilled, (state, action) => ({
      ...state,
      countriesArray: action.payload,
      loading: false,
    }));
  },
});

export default countrySlice.reducer;
