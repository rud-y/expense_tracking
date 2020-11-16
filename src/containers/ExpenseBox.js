import React, { Component } from "react";
import ExpenseList from "../components/ExpenseList";
import AddForm from "../components/AddForm";
import ExpenseService from "../services/ExpenseService";


class ExpenseBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses: []
        };
            
            // expenses: [
            //     {
            //         id: 1,
            //         date: "2020-11-09",
            //         amount: 22,
            //         store: "Tesco"
            //     },
            //     {
            //         id: 3,
            //         date: "2020-11-10",
            //         amount: 12,
            //         store: "Amazon"
            //     }
            // ]
        this.handleNewEntrySubmit = this.handleNewEntrySubmit.bind(this);
    }

    componentDidMount() {
        ExpenseService.getExpenses()
        .then(data => this.setState({ expenses: data }));
    }
        
    

    handleNewEntrySubmit(submittedEntry) {
        submittedEntry.id = Date.now();

        const updatedExpenses = [...this.state.expenses, submittedEntry];
        this.setState({
            expenses: updatedExpenses
        });
    }


    render() {
        return (
            <div className="expense-box">
            <h3>New entry:</h3>
            <AddForm onExpenseSubmit={this.handleNewEntrySubmit}/>
            <h3>Expenses-all:</h3>
            <ExpenseList expenses={this.state.expenses}/>
            </div>
        )
    }

}

export default ExpenseBox;