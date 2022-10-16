export default function TransactionHistory({ items }) {
  const tableCell = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  return (
    <table className="transaction-history">
      <thead className="table-header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="table-body">{tableCell}</tbody>
    </table>
  );
}
