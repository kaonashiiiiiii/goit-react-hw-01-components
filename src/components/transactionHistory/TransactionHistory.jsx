import React from 'react'
import transactionHistoryStyles from './transactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionHistoryStyles['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory
