import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  Increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked <br /> <span> {count} </span>times
          </h1>
          <p className="para">Click the button to increase the count</p>
          <button onClick={this.Increment}>Click Me!</button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
