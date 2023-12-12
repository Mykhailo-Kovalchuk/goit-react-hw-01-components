// import React from 'react'
import css from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  const transactionNewArray = items.map(el => (
    <tr className={css.wrappertr} key={el.id}>
      <td width="200" className={css.wrappertd}>
        {el.type}
      </td>
      <td className={css.wrappertd}>{el.amount}</td>
      <td width="180" className={css.wrappertd}>
        {el.currency}
      </td>
    </tr>
  ));

  return (
    <table className={css.transactionhistory}>
      <thead className={css.transactionheader}>
        <tr className={css.wrappertr}>
          <th width="200">Type</th>
          <th>Amount</th>
          <th width="200">Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionbody}>{transactionNewArray}</tbody>
    </table>
  );
};

export { TransactionHistory };
