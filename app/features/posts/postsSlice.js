// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // ✅ API call with axios
// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return res.data;
//   }
// );

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     data: [],
//     status: 'idle',
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state) => {
//         state.status = 'failed';
//       });
//   },
// });

// export default postsSlice.reducer;


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPosts= createAsyncThunk(
'posts/fetchposts',
async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data
}
)
 const postsSlice=createSlice ( {
name: 'slice',
initialState: { 
data: [],
status: 'idle'},
reducers:{},
extraReducers: (builder)=> {
builder.addCase (fetchPosts.pending, (state)=>{
  state.status= 'loading'
})
.addCase (fetchPosts.fulfilled, (state,action) => {
  state.status='succeded'
  state.data=action.payload
})
.addCase (fetchPosts.rejected, (state)=>{
  state.status= 'error'
})
}

})
export default postsSlice.reducer
