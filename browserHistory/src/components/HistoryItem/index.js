import './index.css'

const HistoryItem = props => {
  const {details, DeleteEl} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const onDelete = () => {
    DeleteEl(id)
  }

  return (
    <li>
      <p className="time">{timeAccessed}</p>
      <div className="main-align">
        <div className="social-media">
          <img src={logoUrl} className="icons" alt="domain logo" />
          <div className="title-domain">
            <p className="name">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="icons"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
