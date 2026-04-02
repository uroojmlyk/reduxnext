import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    // ✅ simple action
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    // ✅ payload concept
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 👉 actions (commands)
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 👉 reducer (logic)
export default counterSlice.reducer;