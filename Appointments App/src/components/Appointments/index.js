import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', AppointmentsList: [], isStarActive: false}

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateDate = event => {
    this.setState({date: event.target.value})
  }

  updateAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newItem = {
      Title: title,
      DATE: date,
      id: uuidv4(),
      isStarred: false,
    }
    this.setState(prevState => ({
      AppointmentsList: [...prevState.AppointmentsList, newItem],
      title: '',
      date: '',
    }))
  }

  updateStarred = ID => {
    this.setState(prevState => ({
      AppointmentsList: prevState.AppointmentsList.map(eachItem => {
        if (eachItem.id === ID) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  showStarred = () => {
    const {AppointmentsList} = this.state
    const newList = AppointmentsList.filter(each => each.isStarred === true)
    return newList
  }

  updateStar = () => {
    this.setState(prevState => ({isStarActive: !prevState.isStarActive}))
  }

  render() {
    const {title, date, AppointmentsList, isStarActive} = this.state
    const Filtered = this.showStarred()
    const FilteredList = isStarActive ? Filtered : AppointmentsList

    const staredBtn = isStarActive ? 'star-active' : ' '
    return (
      <div className="main-bg">
        <div className="appointment-app">
          <div className="top-section">
            <div>
              <h1 className="heading-element">Add Appointment</h1>
              <form onSubmit={this.updateAppointment}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <br />
                <input
                  id="title"
                  type="text"
                  value={title}
                  required
                  onChange={this.updateTitle}
                  className="inputBox"
                />
                <br />
                <label htmlFor="dateInput" className="label">
                  DATE
                </label>
                <br />
                <input
                  id="dateInput"
                  type="date"
                  value={date}
                  required
                  onChange={this.updateDate}
                  className="inputBox"
                />
                <br />
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="appointment-image"
              alt="appointments"
            />
          </div>
          <hr className="ruler" />
          <div>
            <div className="appointment-heading">
              <h1 className="heading-element">Appointments</h1>
              <button
                className={`star-button ${staredBtn}`}
                type="button"
                onClick={this.updateStar}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-container">
              {FilteredList.map(eachAppointment => (
                <AppointmentItem
                  details={eachAppointment}
                  key={eachAppointment.id}
                  updateStarred={this.updateStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
