import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Account from './components/Account';
import History from './components/History';
import Transaction from './components/Transaction ';

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Balance />
      <Account />
      <History />
      <Transaction />
    </div>
    </>
  );
}

export default App;
