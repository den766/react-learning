import { useState } from "react";

import ExpesnseDashboard from "./expensedashboard";

function ExpenseMain() {
  //   const [expenses, setExpenses] = useState("");
  const [user] = useState("Ashu");

  return (
    <>
      <h1>Prop Drilling Demo</h1>
      <ExpesnseDashboard user={user} />
    </>
  );
}

export default ExpenseMain;
