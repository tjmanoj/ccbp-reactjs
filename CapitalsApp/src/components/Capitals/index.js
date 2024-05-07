import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {ID: 'NEW_DELHI'}

  changeCountry = () => {
    const eleId = document.getElementById('selectvalue')
    this.setState({ID: eleId.value})
  }

  render() {
    const {ID} = this.state
    const filteredList = countryAndCapitalsList.filter(each => each.id === ID)
    return (
      <div className="main-container">
        <div className="country-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="dropbox"
            id="selectvalue"
            value={ID}
            onChange={this.changeCountry}
          >
            <option value={countryAndCapitalsList[0].id}>
              {countryAndCapitalsList[0].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[1].id}>
              {countryAndCapitalsList[1].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[2].id}>
              {countryAndCapitalsList[2].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[3].id}>
              {countryAndCapitalsList[3].capitalDisplayText}
            </option>
            <option value={countryAndCapitalsList[4].id}>
              {countryAndCapitalsList[4].capitalDisplayText}
            </option>
          </select>
          <p>is capital of which country</p>
          <p>{filteredList[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
