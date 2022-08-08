//import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { expenseActions } from "./store/expense-slice";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import NavBar from "./components/nav/NavBar";
//import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux/es/exports";

const App = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.items);
  console.log(expenses);

  const addExpenseHandler = (props) => {
    const { id, title, amount, date } = props;

    dispatch(
      expenseActions.addExpense({
        id,
        title,
        amount,
        date: new Date(date).toISOString().slice(0, 10),
      })
    );
  };

  return (
    <div>
      <NavBar />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
