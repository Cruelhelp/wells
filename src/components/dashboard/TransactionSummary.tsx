import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  id: string;
  account_id: string;
  description: string;
  amount: number;
  transaction_date: string;
  transaction_type: string;
}

interface TransactionSummaryProps {
  transactions: Transaction[];
}

const TransactionSummary = ({ transactions }: TransactionSummaryProps) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/statement');
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Transaction Summary</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-2">Date</th>
            <th className="py-2">Description</th>
            <th className="py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr 
              key={tx.id} 
              className="border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              onClick={handleRowClick}
            >
              <td className="py-2 px-1 md:px-2">{tx.transaction_date}</td>
              <td className="py-2 px-1 md:px-2">{tx.description}</td>
              <td className="py-2 px-1 md:px-2 text-right font-semibold text-green-700">${tx.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionSummary; 