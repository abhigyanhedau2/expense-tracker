import React from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import expenses from './utility/expense'

function App() {

  const addExpenseHandler = (expense) => {
    console.log("In App.js ");
    expenses.push(expense);
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App