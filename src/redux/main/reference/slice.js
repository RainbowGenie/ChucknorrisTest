import { createSlice } from "@reduxjs/toolkit";

const referenceReducerInitialState = {
  isLoading: false,
  chuckData: { total: 0, result: [] },
  error: {},
};
const referenceSlice = createSlice({
  name: "reference",
  initialState: referenceReducerInitialState,
  reducers: {
    setIsLoading(state, action) {
      const isLoading = action.payload;
      state.isLoading = isLoading;
    },
    setChuckData(state, action) {
      const chuckData = action.payload;
      state.chuckData = chuckData;
    },
    setError(state, action) {
      const error = action.payload;
      state.error = error;
    },
  },
});
export const { setIsLoading, setChuckData, setError } = referenceSlice.actions;
export const ReferenceReducer = referenceSlice.reducer;
