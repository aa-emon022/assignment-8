// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
      <nav >
        <ul className='flex gap-[10%] justify-center'>
          <li className='border-2 border-solid bg-red-400'>
            <Link to="/">Home</Link>
          </li>
          <li className='border-2 border-solid bg-red-400'>
            <Link to="/income">Income</Link>
          </li>
          <li className=' border-2 border-solid bg-red-400'>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
    
  );
};

export default Header;
