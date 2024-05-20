import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, updateStarred} = props
  const {Title, DATE, isStarred, id} = details
  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const updateStar = () => {
    updateStarred(id)
  }
  return (
    <li className="appointment-item">
      <div className="appointment-heading">
        <p className="heading">{Title}</p>
        <button
          onClick={updateStar}
          className="starred-button"
          data-testid="star"
        >
          <img src={starUrl} alt="star" />
        </button>
      </div>
      <p className="date">{format(new Date(DATE), 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}

export default AppointmentItem
