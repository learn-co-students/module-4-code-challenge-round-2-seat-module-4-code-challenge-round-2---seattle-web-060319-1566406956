import React from 'react'
import Transaction from './Transaction'
const TransactionsList = (props) => {
  
  const filteredSearch = () => {
    return props.transactions.filter(transaction => {
    return transaction.description.includes(props.filteredTransaction)
    })
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
            
          </th>
        </tr>

        {filteredSearch().map(transaction => {
          return <Transaction transaction={transaction} /> })}

      </tbody>
    </table>
  )
}

export default TransactionsList
