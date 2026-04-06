// store/store.js

// import { configureStore } from '@reduxjs/toolkit';
// import postsReducer from '../features/posts/postsSlice';
// export const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
export const store=configureStore({

reducers:{
  posts:postsReducer,
},

})