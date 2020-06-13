import React from 'react'

function Balance() {
    return (

        <div className="row ">
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"><b>Your Available Balance</b></span>
                        <span className="card-balance-amount">$0.000 </span>
                    </div>
                </div>
            </div>
            <div className="col s12 m3"></div>
        </div>


    )
}

export default Balance;
