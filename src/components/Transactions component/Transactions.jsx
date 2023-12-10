// import React from 'react'

const TransactionHistory = ({items}) => {

    const transactionNewArray = items.map(el => (
        <tr  key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
    ));

    
  return (
    <table className="transaction-history">
  <thead className="transaction-header">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className="transaction-body">
{transactionNewArray}
  </tbody>
</table>

  )
}

export  {TransactionHistory};