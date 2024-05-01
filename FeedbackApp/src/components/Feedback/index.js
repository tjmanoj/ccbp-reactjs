import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isWelcome: true}

  changeWelcome = () => {
    this.setState(prevState => ({isWelcome: !prevState.isWelcome}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isWelcome} = this.state
    return (
      <div className="main-bg">
        {isWelcome ? (
          <div className="emoji-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
              <ul>
                <li>
                  <img
                    src={emojis[0].imageUrl}
                    alt={emojis[0].name}
                    className="emoji"
                    onClick={this.changeWelcome}
                  />
                  <p className="emoji-name">{emojis[0].name}</p>
                </li>
                <li>
                  <img
                    src={emojis[1].imageUrl}
                    alt={emojis[1].name}
                    className="emoji"
                    onClick={this.changeWelcome}
                  />
                  <p className="emoji-name">{emojis[1].name}</p>
                </li>
                <li>
                  <img
                    src={emojis[2].imageUrl}
                    alt={emojis[2].name}
                    className="emoji"
                    onClick={this.changeWelcome}
                  />
                  <p className="emoji-name">{emojis[2].name}</p>
                </li>
              </ul>
            </h1>
          </div>
        ) : (
          <div className="welcome-container">
            <img src={loveEmojiUrl} className="heart-emoji" alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We Will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
