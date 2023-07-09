import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type Post ={
  id: number;
  title: string;
  image:string;
  category:string
  price:number;
}


export type PostsState ={
  posts: Post[];
  status: boolean
  error: string 
  item:number
}

export const initialState: PostsState = {
  posts: [],
  status: false,
  error: '',
  item:0
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get<Post[]>('https://fakestoreapi.com/products');
    return response.data;
  });

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = true
      })
      .addCase(fetchPosts.fulfilled, (state, action:PayloadAction<Post[]>) => {
        state.status = false
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = false
        state.posts=[];
        state.error = action.error.message || 'Error fetching posts';
      });
  },
});



export default postsSlice.reducer;
