import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: ''
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setText: (state, action) => {
      return {
        text: action.payload
      }
    },
  },
})

export const { setText } = filterSlice.actions

export default filterSlice.reducer