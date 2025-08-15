import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isSidebarOpen: boolean;
};

const initialState: InitialStateType = {
  isSidebarOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
