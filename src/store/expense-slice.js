import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addExpense(state, action) {
      console.log("inside redux add expense");
      const newItem = action.payload;
      console.log("newItem", newItem);
      state.totalQuantity++;
      state.items.push({
        id: newItem.id,
        title: newItem.title,
        amount: newItem.amount,
        date: newItem.date,
      });
      console.log(state.items);
    },
    removeExpense(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.items = state.items.filter((item) => item.id !== id);
    },
    editExpense(state, action) {
      const editItem = action.payload;
      console.log("editItem", editItem);
      state.items = state.items.map((item) => {
        if (item.id === editItem.id) {
          return {
            ...item,
            id: editItem.id,
            title: editItem.title,
            amount: editItem.amount,
            date: new Date(editItem.date),
          };
        }
        return item;
      });
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice;
