import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseService from "../services/ExpenseService";

class ExpenseList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const expenseNodes = this.props.expenses.map((expense) => {
      return (
        <div>
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            store={expense.store}
          ></ExpenseItem>
        </div>
      );
    });

    return <ul className="expense-list">{expenseNodes}</ul>;
  }
}

export default ExpenseList;
