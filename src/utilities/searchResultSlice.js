import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    searchResultValue: "",
  },
  reducers: {
    addSearchResultValue: (state, action) => {
      state.searchResultValue = action.payload;
    },
  },
});

export const { addSearchResultValue } = searchResultSlice.actions;
export default searchResultSlice.reducer;
