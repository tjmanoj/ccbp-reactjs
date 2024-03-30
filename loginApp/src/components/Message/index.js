import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {login} = this.props
    return login ? <h1>Welcome User</h1> : <h1>Please Login</h1>
  }
}

export default Message
