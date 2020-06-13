import React from 'react'

function Account() {
    return (

        <div className="row">
            <div className="col s12 m3 "></div>
            <div className="col s12 m3 ">
                <div className="card green darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"><b>Income</b></span>
                        <span className="card-account-amount">$0.000 </span>
                    </div>

                </div>
            </div>
            <div className="col s12 m3 ">
                <div className="card red darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"><b>Expence</b></span>
                        <span className="card-account-amount">$0.000 </span>
                    </div>

                </div>
            </div>
            <div className="col s12 m3 "></div>
        </div>

    )
}

export default Account;
