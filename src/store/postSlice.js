import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    name: 'Test',
    count: 11000,
    status: 'publish',
  },{
    id: uuidv4(),
    name: 'Test2 name filter',
    count: 13000,
    status: 'publish',
  },{
    id: uuidv4(),
    name: 'Test2',
    count: 22000,
    status: 'publish',
  },{
    id: uuidv4(),
    name: 'Test3',
    count: 33000,
    status: 'publish',
  }
]

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    save: (state, action) => {
      const editableItem = action.payload;

      return state.map(item => item.id === editableItem.id ? editableItem : item)
    },
    create: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const id = action.payload;
      return state.filter(item => item.id !== id)
    },
    edit: (state, action) => {
      const id = action.payload;

      return state.map(item => {
        return item.id === id ? {...item, status: 'edit'} :  {...item, status: 'publish'};
      })
    },
    cancel:(state) => {
      return state.map(item => ({...item, status: 'publish'}))
    },
  },
})

export const { save, create, remove, edit, cancel } = postSlice.actions

export default postSlice.reducer