import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");
const token = storedToken ? storedToken.replace(/^"|"$/g, "") : null;

const initialState = {
  signupData: null,
  loading: false,
  token: token, // ✅ use clean token string
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
      // also save token to localStorage as string
      if (value.payload) {
        localStorage.setItem("token", value.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;
export default authSlice.reducer;
