import { createSlice } from "@reduxjs/toolkit";
import { LIVECHATCOUNT } from "./Config";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVECHATCOUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
