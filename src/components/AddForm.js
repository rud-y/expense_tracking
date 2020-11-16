import React, {Component} from 'react'
import ExpenseService from '../services/ExpenseService';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            amount: '',
            store: ''
        };
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(event) {
        this.setState({date: event.target.value}); 
    }

    handleAmountChange(event) {
        this.setState({amount: event.target.value}); 
    }

    handleStoreChange(event) {
        this.setState({store: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const date = this.state.date.trim();
        const amount = this.state.amount.trim();
        const store = this.state.store.trim();
        
            if(!date || !amount) {
                return
            }

        this.props.onExpenseSubmit({
            date: date,
            amount: amount,
            store: store
        });

        this.setState({
            amount: '',
            store: ''
        });

        ExpenseService.postExpense({
            date: this.state.date,
            amount: this.state.amount,
            store: this.state.store
        });
    }


    render() {
        return (

            <form className="expense-form" onSubmit={this.handleSubmit}>
                <input type="date"
                value={this.state.date}
                onChange={this.handleDateChange}/><br></br>
                
                <input type="number"
                placeholder="Enter amount"
                value={this.state.amount}
                onChange={this.handleAmountChange}/><br></br>

                <input type="text"
                placeholder="From..."
                value={this.state.store}
                onChange={this.handleStoreChange}/><br></br>

                <input type="submit" value="Add To List" />
            </form>
        )
    }
}

export default AddForm;