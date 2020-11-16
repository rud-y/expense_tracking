import React, {Component} from "react";
import ExpenseItem from "./ExpenseItem";

class ExpenseList extends Component {
    render () {
        const expenseNodes = this.props.expenses.map(expense => {
            return (
                <ExpenseItem date = {expense.date} amount = {expense.amount} store={expense.store}></ExpenseItem>
            );
        });


        return (
            <ul className="expense-list">
                {expenseNodes}
            </ul>
        );
    }
}

export default ExpenseList;