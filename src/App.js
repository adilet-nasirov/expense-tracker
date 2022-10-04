import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import Expenses from "./components/Expenses";
import Header from "./components/Header";
import History from "./components/History";
import { TransactionsContext } from "./Helper/Context";
function App() {
  const [transactions, setTransactions] = useState([]);
  return (
    <div className="container">
      <TransactionsContext.Provider>
        <Header />
        <main>
          {/* Balance */}
          <Balance />
          {/* Income expenses */}
          <Expenses />
          {/* Transaction history */}
          <History />
          {/* Transaction add*/}
          <AddTransaction />
        </main>
      </TransactionsContext.Provider>
    </div>
  );
}

export default App;
