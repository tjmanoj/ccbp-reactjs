import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogin: false}

  changeBtn = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="main-bg">
        <div className="count-container">
          <Message login={isLogin} />
          {isLogin ? (
            <Logout login={this.changeBtn} />
          ) : (
            <Login logout={this.changeBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
