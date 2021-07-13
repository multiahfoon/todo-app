import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: Date.now(),
      title: 'Food shopping',
      completed: false
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },
    getTodos: (state) => {
      return state
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    }
  }
});

export const { addTodo, getTodos, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
