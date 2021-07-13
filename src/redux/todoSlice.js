import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: 'Todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false
    },
    {
      id: 3,
      title: 'Todo 3',
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
    }
  }
});

export const { addTodo, getTodos, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
