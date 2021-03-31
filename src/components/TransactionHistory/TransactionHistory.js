import React from 'react';
import styles from './transactionHistory.module.scss';
function transactionItemRender({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
const TransactionHistory = ({ transactions }) => {
  return (
    <table class={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions.map(transactionItemRender)}</tbody>
    </table>
  );
};
export default TransactionHistory;
