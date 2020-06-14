import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Account() {

    const context = useContext(GlobalContext);

    const transactions = context.transactions;
    let income = 0;
    let expence = 0;
    if (transactions.length > 0) {

        const allPositiveAmountArray = transactions.map((transaction) => {
            if (transaction.amount > 0) {
                return transaction.amount;
            }
            return 0;
        });

        income = allPositiveAmountArray.reduce((total, number) => {
            return total + number;
        });

        const allNegativeAmountArray = transactions.map((transaction) => {
            if (transaction.amount < 0) {
                return transaction.amount;
            }
            return 0;
        });

        expence = allNegativeAmountArray.reduce((total, number) => {
            return total + number;
        });

        console.log(allPositiveAmountArray, income);
        console.log(allNegativeAmountArray, expence);

    }


    return (

        <div className="row">
            
            <div className="col s12 m6 ">
                <div className="card light-green">
                    <div className="card-content white-text">
                        <span className="card-title"><b>Income</b></span>
                        <span className="card-account-amount">${income.toFixed(2)} </span>
                    </div>

                </div>
            </div>
            <div className="col s12 m6 ">
                <div className="card red darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"><b>Expence</b></span>
                        <span className="card-account-amount">${Math.abs(expence).toFixed(2)} </span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Account;
