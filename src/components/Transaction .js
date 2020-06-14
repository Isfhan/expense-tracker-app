import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Transaction() {

    const context = useContext(GlobalContext);
    // this function add data from state
    const addTransaction = context.addTransaction;

    const [getDesc, setDesc] = useState('');
    const [getAmount, setAmount] = useState(0);

    const createTransaction = (event) => {
        event.preventDefault();

        const data = {
            id: Math.floor(Math.random() * 100000000),
            desc: getDesc,
            amount: Number(getAmount)
        }
        console.log(data, getAmount);

        addTransaction(data);

        //reset input fields
        setDesc('');
        setAmount(0);

    }

    return (

        <>
            <h4 className="history-heading blue-grey darken-4 white-text">Create Transaction</h4>
            <form onSubmit={createTransaction}>

                <div>
                    <label htmlFor="email"><b>Amount</b></label>
                    <input type="number" value={getAmount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount" required />
                </div>

                <div>
                    <label htmlFor="psw"><b>Descripition</b></label>
                    <input type="text" value={getDesc} onChange={(event) => setDesc(event.target.value)} placeholder="Enter Descripition" required />
                </div>

                <button onClick={(event) => setAmount(Math.abs(getAmount))} className="waves-effect waves-light btn-large transaction-btn light-green" ><i className="material-icons left">add</i>Add</button>
                <button onClick={(event) => setAmount(-Math.abs(getAmount))} className="waves-effect waves-light btn-large transaction-btn red darken-1"><i className="material-icons right">remove</i>Subtract</button>
            </form>
        </>

    )
}

export default Transaction; 
