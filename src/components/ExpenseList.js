import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './AppContext';

const ExpenseList = () => {
  const {expenses} = useContext(AppContext)

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
