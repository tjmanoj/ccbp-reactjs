import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchq: '', pastev: ''}

  onSuggest = event => {
    this.setState({searchq: event.target.value, pastev: event.target.value})
  }

  onPaste = content => {
    this.setState({pastev: content})
  }

  render() {
    const {searchq, pastev} = this.state
    const {suggestionsList} = this.props
    const newList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchq.toLowerCase()),
    )
    return (
      <div className="main-bg">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <ul className="search-card">
          <li>
            <img
              className="search"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onSuggest}
              value={pastev}
            />
          </li>
          {newList.map(each => (
            <SuggestionItem details={each} key={each.id} paste={this.onPaste} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
