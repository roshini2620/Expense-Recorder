import { React, useState } from "react";
import deleteImage from "../../assets/dele.png";
import editImage from "../../assets/edit.png";
import Popup from "./popup";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expense-slice";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);
  const dispatch = useDispatch();

  const toggleDeletePopup = () => {
    setDeleteOpen(!isDeleteOpen);
  };

  const toggleEditPopup = () => {
    setEditOpen(!isEditOpen);
  };

  const deleteHandler = (event) => {
    dispatch(expenseActions.removeExpense(event.id));
  };
  const editHandler = (event) => {
    event.preventDefault();
    dispatch(
      expenseActions.editExpense({
        title,
        amount,
        date: new Date(date).toISOString().slice(0, 10),
        id: props.id,
      })
    );
    setEditOpen(!isEditOpen);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={toggleEditPopup}>
          <img src={editImage} alt="edit" className="expense-item__edit"></img>
        </button>

        <button onClick={toggleDeletePopup}>
          <img src={deleteImage} alt="del" className="expense-item__img"></img>
        </button>

        {isDeleteOpen && (
          <Popup
            content={
              <>
                <p>Are you sure want to delete??</p>
                <button
                  onClick={() => deleteHandler(props)}
                  className="expense-item__yes"
                >
                  Yes
                </button>
                <button
                  onClick={toggleDeletePopup}
                  className="expense-item__no"
                >
                  No
                </button>
              </>
            }
            handleClose={toggleDeletePopup}
          />
        )}

        {isEditOpen && (
          <form onSubmit={toggleEditPopup}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input type="hidden" value={props.id} />
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input
                  type="date"
                  // min='2019-01-01'
                  // max='2022-12-31'
                  value={new Date(date).toISOString().slice(0, 10)}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="new-expense__actions">
              <button type="button" onClick={toggleEditPopup}>
                Cancel
              </button>
              <button type="button" onClick={(e) => editHandler(e)}>
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default ExpenseItem;

