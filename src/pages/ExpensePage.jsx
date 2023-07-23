// ExpensePage.js
import React from 'react';
import ExpenseForm from '../components/ExpenseForm';

const ExpensePage = () => {
  return (
    <div className='allcompoent '>
      <h2 className='text-[#cc2400] mb-[30px]'>Expense Page</h2>
      <div>
      <ExpenseForm  />
      </div>
     
    </div>
  );
};

export default ExpensePage;
