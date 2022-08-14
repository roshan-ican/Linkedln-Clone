import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },

    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.user.user
export default userSlice.reducer

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectUser(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

// extraReducers: (builder) => {
//   builder
//     .addCase(incrementAsync.pending, (state) => {
//       state.status = "loading";
//     })
//     .addCase(incrementAsync.fulfilled, (state, action) => {
//       state.status = "idle";
//       state.value += action.payload;
//     });
// },
