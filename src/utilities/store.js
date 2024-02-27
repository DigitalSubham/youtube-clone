import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";
import searchResultSlice from "./searchResultSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: SearchSlice,
    chat: chatSlice,
    searchResult: searchResultSlice,
  },
});

export default store;
