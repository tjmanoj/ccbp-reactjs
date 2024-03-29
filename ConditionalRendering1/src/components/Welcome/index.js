import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  ChangeText = () => {
    const {text} = this.state
    this.setState(() => {
      if (text === 'Subscribe') {
        return {text: 'Subscribed'}
      }
      return {text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state

    return (
      <div className="main-bg">
        <h1 className="heading">Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button onClick={this.ChangeText}>{text}</button>
      </div>
    )
  }
}

export default Welcome
