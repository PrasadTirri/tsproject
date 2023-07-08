import { createSlice,  PayloadAction } from '@reduxjs/toolkit';


type Post ={
  id: number;
  title: string;
  image:string;
  category:string
  price:number;
}


type PostsState ={
  posts: Post[];
  status: boolean
  error: string 
}

const initialState: PostsState = {
  posts: [],
  status: false,
  error: '',
};



const postsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state, action:PayloadAction<Post>)=>{
      state.posts.push(action.payload)
    }, 
    remove:(state, action)=>{
      state.posts.filter((item)=>item.id !== action.payload)
    }
  },
  
});


export const {add, remove}=postsSlice.actions
export default postsSlice.reducer;
