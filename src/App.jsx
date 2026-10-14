import Navbar from "./components/Navbar"
import StatisticsPage from "./pages/StatisticsPage";
import TransactionsPage from "./pages/TransactionsPage";
import { useState, useEffect } from "react"

function App() {
    const [currentPage, setCurrentPage] = useState("statistics");
    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem("transactions");

        return savedTransactions ? JSON.parse(savedTransactions) : [];
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    function addTransaction(transaction) {
        setTransactions(prev => [...prev, transaction]);
    }

    function deleteTransaction(id) {
        setTransactions(prev => prev.filter(transaction => transaction.id !== id));
    }

    function editTransaction(id, updatedTransaction) {
        setTransactions(prev => 
            prev.map(
                transaction => transaction.id === id ? {...transaction, ...updatedTransaction} : transaction
            )
        )
    }

    return (
        <>
            <Navbar setCurrentPage={setCurrentPage} />

            {currentPage === "statistics" && <StatisticsPage transactions={transactions} />}
            {currentPage === "transactions" && 
            <TransactionsPage 
                transactions={transactions} 
                addTransaction={addTransaction} 
                deleteTransaction={deleteTransaction} 
                editTransaction={editTransaction} 
            />}
        </>
    )
}

export default App;