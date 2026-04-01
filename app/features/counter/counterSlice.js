import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log('✅ Increment dispatched! New value:', state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      console.log('✅ Decrement dispatched! New value:', state.value);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      console.log(`✅ Increment by ${action.payload}! New value:`, state.value);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;