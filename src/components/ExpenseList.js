import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: 'shopping', cost: 200 },
    { id: 2, name: 'transport', cost: 250 },
    { id: 3, name: 'fuel', cost: 250 },
    { id: 4, name: 'health', cost: 300 },
  ];

  return (
    <div>
      <ul className='list-group'>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
