function TransactionCard({ transaction, deleteTransaction, handleEdit}) {
    return (
        <div className="transaction">
            <h3>
                {transaction.type === "expense" ? "Expense" : "Income"}
            </h3>

            <p>Name: {transaction.name}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Category: {transaction.category}</p>
            <p>Date: {transaction.date}</p>

            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            <button onClick={() => handleEdit(transaction)}>Edit</button>
        </div>
    )
}

export default TransactionCard;