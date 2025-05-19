import React from "react";
import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addComas } from "@/lib/utils";

const IncomeExpense = async () => {

    const {income, expense} = await getIncomeExpense()

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{addComas(income ?? 0)}₸</p> // change
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{addComas(Number(expense))}₸</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
