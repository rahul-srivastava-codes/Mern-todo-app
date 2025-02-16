import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.day, text: action.payload });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
