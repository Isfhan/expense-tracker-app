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
        <div className="row">
          <div className="col s3 m3"></div>
          <div className="col s12 m6 custom-col-container grey-lighten-1">
            <Balance />
            <Account />
            <History />
            <Transaction />
          </div>
          <div className="col s3 m3"></div>
        </div>

      </div>
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
