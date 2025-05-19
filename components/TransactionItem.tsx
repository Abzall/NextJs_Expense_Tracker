'use client'

import deleteTransaction from "@/app/actions/deleteTransaction";
import { addComas } from "@/lib/utils";
import { Transaction } from "@/types/Transaction";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (transactionID: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this transaction"
    );

    if (!confirm) return;

    const { message, error } = await deleteTransaction(transactionID);

    if(error) {
        return toast.error(error) //return
    }

    toast.success(message);
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}{addComas(Math.abs(transaction.amount))} ₸
      </span>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
