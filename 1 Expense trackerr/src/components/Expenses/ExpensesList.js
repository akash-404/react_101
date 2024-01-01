import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="expenses-list_fallback">Found no expenses.</h2>
    }

    return(
        <ul>
            {props.items.map((expense, index) => (
            <ExpenseItem id={index + 1} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    )
};

export default ExpensesList;