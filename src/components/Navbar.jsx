function Navbar({ setCurrentPage }) {
    return (
        <header>
            <h1>Expense Tracker</h1>

            <nav>
                <button onClick={() => setCurrentPage("statistics")}>Statistics</button>
                <button onClick={() => setCurrentPage("transactions")}>Transactions</button>
            </nav>
        </header>
    )
}

export default Navbar;