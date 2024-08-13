import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "contador", 
  initialState: {
    count: 10,
  },
  reducers: {
    incrementTodo: (state /* action */) => {
      state.count += 1;
    },
    decrementar: (state) => {
      state.count -= 1;
    },
    incrementByMonto: (state, action) => {
      state.count += action.payload;
    },
  

  },
});

// Action creators are generated for each case reducer function

export const { incrementTodo, decrementar, incrementByMonto } = todoSlice.actions;
