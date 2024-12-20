import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      image: `${process.env.PUBLIC_URL}/images/image.jpg`,
      text: '"Sleek. Stylish. Classy."',
    },
    {
      image: `${process.env.PUBLIC_URL}/images/image.jpg`,
      text: '"A Touch of Class for Your Digital Presence!"',
    },
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
