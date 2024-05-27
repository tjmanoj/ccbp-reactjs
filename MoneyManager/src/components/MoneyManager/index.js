import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    income: '0',
    expenses: '0',
    transations: [],
    balance: '0',
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateAmount = event => {
    this.setState({amount: event.target.value})
  }

  updateType = event => {
    this.setState({type: event.target.value})
  }

  updateAppointment = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const details = {
      id: uuidv4(),
      Title: title,
      Amount: amount,
      Type: type,
    }

    let incomeAmt = 0
    let expenseAmt = 0
    let balanceAmt = 0
    let a = type
    a = a[0] + a.slice(1).toLowerCase()
    if (a === 'Income') {
      incomeAmt = parseInt(amount)
      balanceAmt = parseInt(amount)
    } else {
      expenseAmt = parseInt(amount)
      balanceAmt = expenseAmt * -1
    }

    this.setState(prevState => ({
      transations: [...prevState.transations, details],
      title: '',
      amount: '',
      type: 'Income',
      income: parseInt(prevState.income) + incomeAmt,
      expenses: parseInt(prevState.expenses) + expenseAmt,
      balance: parseInt(prevState.balance) + balanceAmt,
    }))
  }

  updateMoney = detail => {
    const {amount, type, ID} = detail

    let incomeAMT = 0
    let expenseAMT = 0
    let balanceAMT = 0
    let a = type
    a = a[0] + a.slice(1).toLowerCase()
    if (a === 'Expenses') {
      expenseAMT = parseInt(amount)
      balanceAMT = parseInt(amount)
    } else {
      incomeAMT = parseInt(amount) * -1
      balanceAMT = parseInt(amount) * -1
    }

    this.setState(prevState => ({
      transations: prevState.transations.filter(each => each.id !== ID),
      expenses: parseInt(prevState.expenses) - expenseAMT,
      balance: parseInt(prevState.balance) + balanceAMT,
      income: parseInt(prevState.income) + incomeAMT,
    }))
  }

  render() {
    const {title, amount, income, expenses, transations, type} = this.state
    const {balance} = this.state
    console.log(transations)
    return (
      <div className="main-bg">
        <div className="welcome-container">
          <h1>Hi, Manoj</h1>
          <p className="description">
            Welcome back to your <span className="manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="transaction-history-container">
          <div className="transaction transaction-form">
            <form onSubmit={this.updateAppointment}>
              <h1 className="heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <br />
              <input
                id="title"
                type="text"
                value={title}
                placeholder="TITLE"
                required
                onChange={this.updateTitle}
                className="inputBox"
              />
              <br />

              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <br />
              <input
                id="amount"
                type="text"
                value={amount}
                placeholder="AMOUNT"
                required
                onChange={this.updateAmount}
                className="inputBox"
              />
              <br />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <br />
              <select
                id="type"
                className="inputBox"
                onChange={this.updateType}
                value={type}
              >
                <option name="type" value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option name="type" value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="transaction transaction-history">
            <h1 className="heading">History</h1>

            <ul className="history-items">
              <li className="history-headings">
                <p className="title-history">Title</p>
                <p className="amount-history">Amount</p>
                <p className="title-type">Type</p>
              </li>
              {transations.map(each => (
                <TransactionItem
                  details={each}
                  updateMoney={this.updateMoney}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
