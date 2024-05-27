import './index.css'

const TransactionItem = props => {
  const {details, updateMoney} = props
  const {Title, Amount, Type, id} = details

  const updatemoney = () => {
    const detail = {
      amount: Amount,
      type: Type,
      ID: id,
    }
    updateMoney(detail)
  }

  return (
    <li className="history-headings">
      <p className="title-history">{Title}</p>
      <p className="amount-history">{`Rs ${Amount}`}</p>
      <p className="title-type">{Type}</p>
      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={updatemoney}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
