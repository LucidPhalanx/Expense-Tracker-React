import { useState } from "react";
import AddTransactionDialog from "../components/AddTransactionDialog";
import TransactionCard from "../components/TransactionCard";
import TransactionsViewControls from "../components/TransactionsViewControls";

function TransactionsPage({ transactions, addTransaction, deleteTransaction, editTransaction }) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState(null);

    const [view, setView] = useState("all");
    const [sort, setSort] = useState("none");
    const [searchQuery, setSearchQuery] = useState("");


    function getDisplayedTransactions() {
        let results = transactions;

        if (view === "expense") {
            results = [...results].filter(transaction => transaction.type === "expense");
        } else if (view === "income") {
            results = [...results].filter(transaction => transaction.type === "income");
        } else if (view === "food") {
            results = [...results].filter(transaction => transaction.category === "food");
        } else if (view === "transport") {
            results = [...results].filter(transaction => transaction.category === "transport");
        } else if (view === "entertainment") {
            results = [...results].filter(transaction => transaction.category === "entertainment");
        } else if (view === "education") {
            results = [...results].filter(transaction => transaction.category === "education");
        } else if (view === "other") {
            results = [...results].filter(transaction => transaction.category === "other");
        }

        if (sort === "newest") {
            results = [...results].sort((a ,b) => new Date(b.date) - new Date(a.date)); 
        } else if (sort === "oldest") {
            results = [...results].sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sort === "amount-high") {
            results = [...results].sort((a, b) => b.amount - a.amount);
        } else if (sort === "amount-low") {
            results = [...results].sort((a, b) => a.amount - b.amount);
        } else if (sort === "name-az") {
            results = [...results].sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "name-za") {
            results = [...results].sort((a, b) => b.name.localeCompare(a.name));
        }

        results = [...results].filter(transaction => transaction.name?.toLowerCase().includes(searchQuery.toLowerCase()));

        return results;
    }

    const displayedTransactions = getDisplayedTransactions();

    function handleEdit(transaction) {
        setEditingTransaction(transaction);
        setDialogOpen(true)
    }

    return (
        <section id="transactions-page">
            <h2>My Transactions</h2>

            <div id="transaction-page-header">
                <button className="add-transaction-button" onClick={() => {
                    setDialogOpen(true);
                    setEditingTransaction(null);
                }}>Add Transaction</button> 
                 <TransactionsViewControls setView={setView} setSort={setSort} setSearchQuery={setSearchQuery} />
            </div>

            {isDialogOpen && <AddTransactionDialog setDialogOpen={setDialogOpen} addTransaction={addTransaction} editTransaction={editTransaction} transaction={editingTransaction} />}
            <div className="transactions-container">
                {displayedTransactions.map((transaction) => <TransactionCard transaction={transaction} key={transaction.id} deleteTransaction={deleteTransaction} handleEdit={handleEdit} />)}
            </div>
        </section>
    )
}

export default TransactionsPage;