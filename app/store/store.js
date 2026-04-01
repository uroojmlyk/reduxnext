import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true, // DevTools enable
});

// Debugging ke liye console mein store expose kar diya
if (typeof window !== 'undefined') {
  window.store = store;
  console.log('🟢 Redux Store is ready! Type: window.store.getState() to check state');
}