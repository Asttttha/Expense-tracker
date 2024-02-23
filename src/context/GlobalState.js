import * as React from "react";
import AppReducer from "./AppReducer";

//initial state

const initialSate = {
    transactions: []
}

// create context

export const GlobalContext= React.createContext(initialSate);

//Provider

export const GlobalProvider = ({children}) =>{
    const [state,dispatch ] = React.useReducer(AppReducer, initialSate)


    //actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }
    function addTransaction(transactions){
        dispatch({
            type: 'ADD',
            payload: transactions
        })
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}