function TransactionsViewControls({ setView, setSort, setSearchQuery }) {
    return (
        <section className="transactions-view-controls">
            <input type="search" placeholder="Search..."  onChange={(e) => setSearchQuery(e.currentTarget.value)} />

            <div className="transaction-filtering-controls">
                <label htmlFor="transaction-view">View:</label>
                <select id="transaction-view"  defaultValue="all" onChange={(e) => setView(e.currentTarget.value)} >
                    <option value="all">All</option>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="transaction-sorting-controls">
                <label htmlFor="transaction-sort">Sort:</label>
                <select id="transaction-sort" defaultValue="none" onChange={(e) => setSort(e.currentTarget.value)} >
                    <option value="none">None</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="amount-high">Amount: High → Low</option>
                    <option value="amount-low">Amount: Low → High</option>
                    <option value="name-az">Name: A → Z</option>
                    <option value="name-za">Name: Z → A</option>
                </select>
            </div>

        </section>
    )
}

export default TransactionsViewControls;