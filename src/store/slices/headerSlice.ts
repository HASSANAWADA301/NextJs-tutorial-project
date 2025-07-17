import { createSlice } from "@reduxjs/toolkit";

type HeaderState = {
  isOpen: boolean;
  isOpen335: boolean;
  language: string;
};

const initialState: HeaderState = {
  isOpen: false,
  isOpen335: false,
  language: "en",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.isOpen = !state.isOpen;
    },
    toggleTabletMenu(state) {
      state.isOpen335 = !state.isOpen335;
    },
    closeMenus(state) {
      state.isOpen = false;
      state.isOpen335 = false;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  toggleTabletMenu,
  closeMenus,
  setLanguage,
} = headerSlice.actions;

export default headerSlice.reducer;
