function StatisticsPage({ transactions }) {
    let income = 0;
    let expenses= 0;

    for (const transaction of transactions) {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else if (transaction.type === "expense") {
            expenses += transaction.amount;
        }
    }

    let balance = income - expenses;

    return (
        <section id="statistics-page">
            <h2>Statistics:</h2>

            <section>
                <h3>Overview: </h3>
                <p>Amount of transactions: {transactions.length}</p>
                <p>Balance: {balance}</p>
                <p>Income: {income}</p>
                <p>Expenses: {expenses}</p>
            </section>
        </section>
    )
}

export default StatisticsPage;