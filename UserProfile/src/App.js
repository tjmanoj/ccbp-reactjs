import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchq: '', userDetailsList: initialUserDetailsList}

  changeSearchq = event => {
    this.setState({searchq: event.target.value})
  }

  onDelete = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredData = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filteredData})
  }

  render() {
    const {searchq, userDetailsList} = this.state
    const Results = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchq),
    )
    console.log(searchq)
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.changeSearchq} />
        <ul className="list-container">
          {Results.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
