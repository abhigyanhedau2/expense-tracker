import React from 'react';
import './ExpenseFilter.css';
import Card from '../UI/Card'

function ExpenseFilter(props) {

    const dropDownChangeHandler = (event) => {
        props.onYearChange(event.target.value);
    }

    return (
        <Card className='expenses-filter'>
            <div className="expenses-filter-controls">
                <label>Filter By Year</label>
                <select value={props.selectedYear} onChange={dropDownChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </Card>
    )
}

export default ExpenseFilter