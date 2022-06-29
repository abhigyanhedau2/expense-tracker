import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // Copy the previous input details and then update the title
        // If we just update the title, other keys would've been lost
        // setUserInput({ ...userInput, enteredTitle: event.target.value });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({ ...userInput, enteredAmount: event.target.value });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });   
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({ ...userInput, enteredDate: event.target.value });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);

        // Running the function in NewExpense.js
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense-inputs">
                    <div className="new-expense-title">
                        <label>Title</label>
                        <input 
                            type="text" name="" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense-amount">
                        <label>Amount</label>
                        <input type="number" name="" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                    </div>
                    <div className="new-expense-date">
                        <label>Date</label>
                        <input type="date" name="" value={enteredDate} onChange={dateChangeHandler} min="2022-01-01" max="2025-12-31" />
                    </div>
                </div>
                <div className="new-expense-actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm