import React from 'react'

function Transaction() {
    return (
        <div className="row">
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <h4 className="history-heading blue-grey darken-3 white-text">Create Transaction</h4>
                <form>
                    <div className="input-field transaction-input">
                        <input placeholder="Enter Amount" type="number" className="validate" />
                        <label HTMLfor="first_name">Amount</label>
                    </div>

                    <div className="input-field transaction-input">
                        <input placeholder="Enter Descripition" type="text" className="validate" />
                        <label HTMLfor="first_name">Enter Transaction Descripition</label>
                    </div>

                    <button  type="submit" className="waves-effect waves-light btn-large transaction-btn green darken-1" ><i className="material-icons left">add</i>Add</button>
                    <button  type="submit" className="waves-effect waves-light btn-large transaction-btn red darken-1"><i className="material-icons right">remove</i>remove</button>
                </form>
            </div>
                <div classNameName="col s12 m3"></div>
        </div>
    )
}

export default Transaction; 
