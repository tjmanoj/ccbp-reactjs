import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  updateNum = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({number: num})
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-bg">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.updateNum}>
            Generate
          </button>
          <p className="heading">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
