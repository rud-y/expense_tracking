const ExpenseItem = (props) => {
  return (
    <p className="expense">
      {props.date} | £{props.amount} | {props.store}
    </p>
  );
};

export default ExpenseItem;
