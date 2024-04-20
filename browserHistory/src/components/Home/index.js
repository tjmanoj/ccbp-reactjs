import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class Home extends Component {
  state = {hisList: initialHistoryList, delId: -1, searchq: ''}

  changeSearch = event => {
    this.setState({searchq: event.target.value})
  }

  onDelete = uniqueNo => {
    const {hisList} = this.state
    const history = hisList.filter(each => each.id !== uniqueNo)
    this.setState({hisList: history})
  }

  render() {
    const {hisList, searchq, delId} = this.state

    const ResList = hisList.filter(each =>
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
