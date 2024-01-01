import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setfilteredYear] = useState('2020');

    const expenseFilterHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={expenseFilterHandler} selectedYear={filteredYear}/>
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
                {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map((expense, index) => (
                    <ExpenseItem id={index + 1} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )) */}
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;