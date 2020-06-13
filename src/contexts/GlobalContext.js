import React,{createContext,useReducer} from 'react';
import Reducer from './Reducer';

// initialize global state

const globalState = {
    transactions: []
}


// create context
export const GlobalContext = createContext(globalState);

// provider componenys
function GlobalContextProvider(props) {

    const [state, dispatch] = useReducer(Reducer, globalState)

    // Action 

    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
        
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })

    }


    return (
        // in value  we can pass state and action that can manipulate state
        <GlobalContext.Provider value={{ transactions: state.transactions,deleteTransaction,addTransaction}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
