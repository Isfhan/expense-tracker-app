import React,{useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalContext';

function History() {

    const context = useContext(GlobalContext);
    // both are same 
   // const {transactions} = useContext(GlobalContext);
    const transactions = context.transactions;
    //console.log(context);

    // this function delete data from state
    const deleteTransaction = context.deleteTransaction;
    
    return (
        <div className="row">
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <h4 className="history-heading blue-grey darken-1 white-text">Transaction History</h4>
                <ul className="collection">

                    {/* transaction history li start*/}
                    {transactions.map(function(transaction){
                        let sign = transaction.amount < 0 ? '-':'+';
                        let generateCSSClass = transaction.amount < 0 ? 'collection-item avatar white-text red lighten-2':'collection-item avatar white-text green';
                        
                        return(
                        <li key={transaction.id} className={generateCSSClass}>
                            <i onClick={() => deleteTransaction(transaction.id)} className="waves-effect waves-light material-icons circle red">clear</i>
                            <span className="title"><b>{sign}${Math.abs(transaction.amount)}</b></span>
                            <p>{transaction.desc}</p>
                        </li>
                        )

                    })}
                    {/* transaction history li end*/}

                </ul>

            </div>
            <div className="col s12 m3"></div>
        </div>
    )
}

export default History;
;