import React, {Component} from "react";
import displayDate from "../helpers/date";


class ExpenseItem extends Component {
    render() {
        return (
            <li className="expense">
                <p>{this.props.children} {this.props.date}  |  £{this.props.amount} | {this.props.store}</p>
            </li>
        );
    }
}

export default ExpenseItem;