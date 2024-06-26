import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <div className="money-details-container">
      <div className="money-item balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-size"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">{`Rs ${balance}`}</p>
        </div>
      </div>
      <div className="money-item income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-size"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="money-item expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-size"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
