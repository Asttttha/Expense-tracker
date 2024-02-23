import * as React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export  const TransactionList = () => {

  const {transactions} = React.useContext(GlobalContext)

  return (
    <>
    <h3>History</h3>
    <ul className='list'>
      {transactions.map(transactions=>(
        <Transaction key={transactions.id} transactions={transactions}/>
      ))}
        
    </ul>
      
    </>
  )
}


