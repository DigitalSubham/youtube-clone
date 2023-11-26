import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeMenu: (state) => {
      state.isSideBarOpen = false;
    },
    openMenu: (state) => {
      state.isSideBarOpen = true;
    },
  },
});

export default appSlice.reducer;
export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;
