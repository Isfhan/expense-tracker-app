import React from 'react'

function History() {
    return (
        <div className="row">
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <h4 className="history-heading blue-grey darken-1 white-text">Transaction History</h4>
                <ul className="collection">

                    <li className="collection-item avatar green white-text">
                        <i className="material-icons circle red">clear</i>
                        <span className="title"><b>+5500</b></span>
                        <p>This is descripition Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, voluptatum. Porro iste rem id placeat ipsum ipsam accusantium. Labore, ea.</p>

                  
                    </li>

                    <li className="collection-item avatar  red lighten-2 white-text ">
                        <i className="material-icons circle red">clear</i>
                        <span className="title"><b>-300</b></span>
                        <p>This is descripition Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                  
                    </li>
            

                </ul>

            </div>
            <div classNameName="col s12 m3"></div>
        </div>
    )
}

export default History;
;