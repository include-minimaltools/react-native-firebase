import { createSelector, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
  },
  reducers: {
    login: (state, action) => {
      console.log(state, action);
      return {
        isAuthenticated: true,
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    },
  },
});

export const { login } = authSlice.actions;

export const selectUser = createSelector(
  (state: any) => state.auth,
  (auth: any) => ({
    uid: auth.uid,
    email: auth.email,
    displayName: auth.displayName,
    photoURL: auth.photoURL, 
  })
);
export const selectIsAuthenticated = createSelector(
  (state: any) => state.auth,
  (auth: any) => auth.isAuthenticated
);

export default authSlice.reducer;
