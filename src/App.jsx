import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <h2 className='allcompoent'>Welcome to Income and Expense Tracker!</h2>;

export default App;
