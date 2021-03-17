import React, { Component } from "react";
import ExpenseList from "../components/ExpenseList";
import AddForm from "../components/AddForm";
import ExpenseService from "../services/ExpenseService";
import ExpenseItem from "../components/ExpenseItem";

class ExpenseBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };

    this.handleNewEntrySubmit = this.handleNewEntrySubmit.bind(this);
    this.displayLastWeek = this.displayLastWeek.bind(this);
  }

  componentDidMount() {
    ExpenseService.getExpenses().then((data) =>
      this.setState({ expenses: data })
    );
  }

  handleNewEntrySubmit(submittedEntry) {
    submittedEntry.id = Date.now();

    const updatedExpenses = [...this.state.expenses, submittedEntry];
    this.setState({
      expenses: updatedExpenses,
    });
  }

  displayLastWeek() {
    const filtered = this.state.expenses.filter((expense) => {
      if (
        new Date(expense.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      ) {
        return expense;
      }
    });
    this.setState({ expenses: filtered });
    console.log(filtered);
  }

  render() {
    return (
      <div className="expense-box">
        <h3>New entry:</h3>
        <AddForm onExpenseSubmit={this.handleNewEntrySubmit} />
        <h3>Expenses-all</h3>
        <button onClick={this.displayLastWeek}>Recent</button>

        <ExpenseList expenses={this.state.expenses} />
      </div>
    );
  }
}

export default ExpenseBox;
