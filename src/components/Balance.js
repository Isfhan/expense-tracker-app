import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Balance() {

    const context = useContext(GlobalContext);

    const transactions = context.transactions;
    let totalAmount = 0;
    if (transactions.length > 0) {

        const allAmountArray = transactions.map((transaction) => transaction.amount);

        totalAmount = allAmountArray.reduce((total, number) => {
            return total + number;
        });

        //console.log(allAmountArray,totalAmount);
    }


    return (

        <div className="row ">
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <div className="card blue-grey darken-1 balance-card">
                    <div className="card-content white-text">
                        <span className="card-title"><b>Your Available Balance</b></span>
                        <span className="card-balance-amount">${totalAmount.toFixed(2)} </span>
                    </div>
                </div>
            </div>
            <div className="col s12 m3"></div>
        </div>


    )
}

export default Balance;
