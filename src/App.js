import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Account from './components/Account';
import History from './components/History';
import Footer from './components/Footer';
import Transaction from './components/Transaction ';
import GlobalContextProvider from './contexts/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
    <Header />
    <div className="container ">
      <Balance />
      <Account />
      <History />
      <Transaction />
    </div>
    <Footer />
    </GlobalContextProvider>
  );
}

export default App;
