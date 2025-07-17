
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type FooterSection = {
  title: string;
  items: string[];
};

type FooterData = {
  logoUrl: string;
  description: string;
  sections: FooterSection[];
  copyright: string;
};

type FooterState = {
  data: Record<string, FooterData> | null;
  loading: boolean;
  error: string | null;
};

const initialState: FooterState = {
  data: null,
  loading: false,
  error: null,
};

// ✅ Async thunk
export const fetchFooter = createAsyncThunk("footer/fetchFooter", async () => {
  const response = await axios.get("http://localhost:5000/api/footer");
  return response.data; // { en: {...}, fr: {...}, ar: {...} }
});

// ✅ Slice
const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFooter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load footer";
      });
  },
});

export default footerSlice.reducer;
