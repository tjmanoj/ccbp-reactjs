import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class Home extends Component {
  state = {delId: -1, searchq: ''}

  changeSearch = event => {
    this.setState({searchq: event.target.value})
  }

  onDelete = uniqueNo => {
    this.setState({delId: uniqueNo})
  }

  render() {
    const {delList} = this.props
    const {searchq, delId} = this.state

    const ResList = delList.filter(each =>
      each.title.toLowerCase().includes(searchq.toLocaleLowerCase()),
    )

    const resList = ResList.filter(each => each.id !== delId)
    const len = resList.length

    return (
      <div>
        <div className="top-bg">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="logo"
              alt="app logo"
            />
          </div>
          <div className="searching-container">
            <div className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="searchicon"
                alt="search"
              />
            </div>
            <div className="getinput">
              <input
                type="search"
                placeholder="Search history"
                onChange={this.changeSearch}
              />
            </div>
          </div>
        </div>
        {len ? (
          <ul>
            {resList.map(each => (
              <HistoryItem
                details={each}
                key={each.id}
                DeleteEl={this.onDelete}
              />
            ))}
          </ul>
        ) : (
          <div className="nothing">
            <p>There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default Home
