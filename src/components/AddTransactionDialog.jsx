function AddTransactionDialog({ setDialogOpen, addTransaction, editTransaction, transaction }) {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedData = {
            name: formData.get("transaction-name-input"),
            amount: Number(formData.get("transaction-amount-input")),
            type: formData.get("transaction-type-select"),
            category: formData.get("transaction-category-select"),
            date: formData.get("transaction-date-input")
        }

        if (transaction) {
            editTransaction(transaction.id, updatedData);
        } else {
            addTransaction({
                id: crypto.randomUUID(),
                ...updatedData
            })
        }
        
        setDialogOpen(false);
    }
    return (
        <dialog open>
            <h2>Add Transaction</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="transaction-name-input">Name:</label>
                    <input type="text" maxLength="50" id="transaction-name-input" name="transaction-name-input" defaultValue={transaction?.name ?? ""} required />
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-amount-input">Amount:</label>
                    <input type="number" min="0" id="transaction-amount-input" required name="transaction-amount-input" defaultValue={transaction?.amount ?? ""} />
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-type-select">Type:</label>
                    <select id="transaction-type-select" name="transaction-type-select" defaultValue={transaction?.type ?? "expense"}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>   

                <div className="form-group">
                    <label htmlFor="transaction-category-select">Category:</label>
                    <select id="transaction-category-select" name="transaction-category-select" defaultValue={transaction?.category ?? "food"} >
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction-date-input">Date:</label>
                    <input type="date" required id="transaction-date-input" name="transaction-date-input" defaultValue={transaction?.date ?? "" } />
                </div>

                <div className="form-actions">
                    <button type="submit" id="confirm-transaction-button">Confirm</button>
                    <button type="button" id="close-dialog-button" onClick={() => setDialogOpen(false)} >Cancel</button>
                </div>
            </form>
        </dialog>
    )
}

export default AddTransactionDialog;