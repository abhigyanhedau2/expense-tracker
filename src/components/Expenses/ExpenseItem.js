import React from 'react';
import './ExpenseItem.css';
import month from '../../utility/month';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // Date(<year>, <month>, <date>);
    const expenseDate = props.date;

    return (
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-item-month">{month(expenseDate.getMonth())}</div>
                <div className="expense-item-year">{expenseDate.getFullYear()}</div>
                <div className="expense-item-date">{expenseDate.getDate()}</div>
            </div>
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-price">$ {props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem