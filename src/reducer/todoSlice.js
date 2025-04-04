import { createSlice } from '@reduxjs/toolkit'

let nextId = 0
const initialState = [
  {
    id: 0,
    text: '첫번째 할일',
    done: true,
  },
]

export const todoSlice = createSlice({
  name: 'todofunction',
  initialState,
  reducers: {
    add: (state, action) => {
      nextId++
      state.push({
        id: nextId,
        text: action.payload,
        done: false,
      })
    },
    remove: (state, action) => {
      return state.filter(e => e.id !== action.payload)
    },
    finish: (state, action) => {
      return state.map(e => (e.id === action.payload ? { ...e, done: !e.done } : e))
    },
  },
})

export const { add, remove, finish } = todoSlice.actions
export default todoSlice.reducer
