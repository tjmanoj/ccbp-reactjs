import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchq: ''}

  onChangeSearch = event => {
    this.setState({searchq: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchq} = this.state

    const PlaceList = destinationsList.filter(each =>
      each.name.toLocaleLowerCase().includes(searchq.toLocaleLowerCase()),
    )
    return (
      <div className="main-bg">
        <h1 className="heading">Destination Search</h1>
        <div className="searchbox">
          <input
            type="search"
            placeholder="search"
            className="search"
            onChange={this.onChangeSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="icon"
            alt="search icon"
          />
        </div>
        <ul className="card-container">
          {PlaceList.map(each => (
            <DestinationItem card={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
